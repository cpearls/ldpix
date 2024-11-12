import { showcaseData } from "@/lib/data";
import { NextResponse } from "next/server";

// Helper function to get current date with a 12-hour rotation
function getRotatedData() {
  const hoursInMillis = 12 * 60 * 60 * 1000;
  const rotationInterval = hoursInMillis * 2;
  const now = new Date();

  // Calculate the current rotation shift based on time
  const rotationShift = Math.floor(now.getTime() / rotationInterval) % showcaseData.length;

  // Rotate array to bring the last item to the front every 12 hours
  const rotatedData = [
    ...showcaseData.slice(-rotationShift),
    ...showcaseData.slice(0, -rotationShift),
  ];

  return rotatedData;
}

// Generate the RSS feed
export async function GET() {
  const blogUrl = "https://ldpix.xyz";
  const blogName = "LD Design";
  const logoUrl = "https://ldpix/ld-logo-9.png";
  const currentDate = new Date();

  const rotatedData = getRotatedData();

  // Map over rotated data to create feed items with decreasing pubDate
  const feedItems = rotatedData
    .map((item, index) => {
      const itemDate = new Date(currentDate.getTime() - index * 12 * 60 * 60 * 1000).toUTCString();
      const tags = item.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join("");
      const imageUrl = typeof item.imageUrl === 'string' ? item.imageUrl : item.imageUrl.src;


      return `
        <item>
          <title><![CDATA[${item.title}]]></title>
          <link>${blogUrl}${item.showcaseUrl}</link>
          <dc:creator><![CDATA[admin]]></dc:creator>
          <pubDate>${itemDate}</pubDate>
          ${tags}
          <guid isPermaLink="false">${blogUrl}${item.showcaseUrl}</guid>
          <description><![CDATA[<img src=">${blogUrl}${imageUrl}" class="webfeedsFeaturedVisual" alt="${item.title}" style="display: block; margin: auto; margin-bottom: 5px;max-width: 100%;" decoding="async" fetchpriority="high /><p>${item.description}</p>]]></description>
          <content:encoded><![CDATA[<img src=">${blogUrl}${imageUrl}" class="webfeedsFeaturedVisual" alt="${item.title}" style="display: block; margin: auto; margin-bottom: 5px;max-width: 100%;" decoding="async" fetchpriority="high  /><p>${item.description}</p>]]></content:encoded>
        </item>
      `;
    })
    .join("");

  // Build the RSS feed XML
  const rssFeed = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0"
         xmlns:content="http://purl.org/rss/1.0/modules/content/"
         xmlns:wfw="http://wellformedweb.org/CommentAPI/"
         xmlns:dc="http://purl.org/dc/elements/1.1/"
         xmlns:atom="http://www.w3.org/2005/Atom"
         xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
         xmlns:slash="http://purl.org/rss/1.0/modules/slash/">

      <channel>
        <title>${blogName}</title>
        <atom:link href="${blogUrl}/feed/" rel="self" type="application/rss+xml" />
        <link>${blogUrl}</link>
        <description>${blogName}</description>
        <lastBuildDate>${currentDate.toUTCString()}</lastBuildDate>
        <language>en-US</language>
        <sy:updatePeriod>hourly</sy:updatePeriod>
        <sy:updateFrequency>1</sy:updateFrequency>

        <image>
          <url>${logoUrl}</url>
          <title>${blogName}</title>
          <link>${blogUrl}</link>
          <width>32</width>
          <height>32</height>
        </image>

        ${feedItems}
      </channel>
    </rss>
  `;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}