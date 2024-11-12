// utils/generateRSSFeed.ts
import { showcaseData } from "@/lib/data";

const BLOG_URL = "https://yourblogurl.com"; // Replace with actual blog URL
const BLOG_NAME = "LD Design"; // Replace with actual blog name
const BLOG_LOGO_URL = "https://yourblogurl.com/logo.png"; // Replace with actual logo URL

// Helper function to format date as "Tue, 12 Nov 2024 02:38:42 +0000"
function formatDate(date: Date): string {
  return date.toUTCString();
}

export function generateRSSFeed(): string {
  const itemsXML = showcaseData.map(item => {
    const { title, showcaseUrl, tags, imageUrl, description } = item;
    const tagsXML = tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join("");
    const currentDate = formatDate(new Date());

    return `
      <item>
        <title>${title}</title>
        <link>${BLOG_URL}${showcaseUrl}</link>
        <dc:creator><![CDATA[admin]]></dc:creator>
        <pubDate>${currentDate}</pubDate>
        ${tagsXML}
        <guid isPermaLink="false">${BLOG_URL}${showcaseUrl}</guid>
        <description><![CDATA[<img src="${imageUrl}" /><p>${description}</p>]]></description>
        <content:encoded><![CDATA[<img src="${imageUrl}" /><p>${description}</p>]]></content:encoded>
      </item>
    `;
  }).join("");

  const rssFeed = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0"
      xmlns:content="http://purl.org/rss/1.0/modules/content/"
      xmlns:wfw="http://wellformedweb.org/CommentAPI/"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:atom="http://www.w3.org/2005/Atom"
      xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
      xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
    >
      <channel>
        <title>${BLOG_NAME}</title>
        <atom:link href="${BLOG_URL}/feed/" rel="self" type="application/rss+xml" />
        <link>${BLOG_URL}</link>
        <description>${BLOG_NAME}</description>
        <lastBuildDate>${formatDate(new Date())}</lastBuildDate>
        <language>en-US</language>
        <sy:updatePeriod>hourly</sy:updatePeriod>
        <sy:updateFrequency>1</sy:updateFrequency>

        <image>
          <url>${BLOG_LOGO_URL}</url>
          <title>${BLOG_NAME}</title>
          <link>${BLOG_URL}</link>
          <width>32</width>
          <height>32</height>
        </image>

        ${itemsXML}
      </channel>
    </rss>
  `;

  return rssFeed;
}