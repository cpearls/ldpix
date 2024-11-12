import { showcaseData } from "@/lib/data";
import { format } from "date-fns";

export function generateRssFeed() {
  const blogUrl = "https://your-blog-url.com";
  const blogTitle = "LD Design";
  const blogDescription = "Design projects for the crypto industry.";
  const logoUrl = `${blogUrl}/path-to-logo.png`;
  const currentDate = format(new Date(), "EEE, dd MMM yyyy HH:mm:ss xx");

  const rssItems = showcaseData.map((project) => `
    <item>
      <title>${project.title}</title>
      <link>${blogUrl}${project.showcaseUrl}</link>
      <dc:creator><![CDATA[admin]]></dc:creator>
      <pubDate>${currentDate}</pubDate>
      ${project.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join("\n")}
      <guid isPermaLink="false">${blogUrl}${project.showcaseUrl}</guid>
      <description><![CDATA[<img src="${project.imageUrl}" /><p>${project.description}</p>]]></description>
      <content:encoded><![CDATA[<img src="${project.imageUrl}" /><p>${project.description}</p>]]></content:encoded>
    </item>
  `).join("");

  return `
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
        <title>${blogTitle}</title>
        <atom:link href="${blogUrl}/feed/" rel="self" type="application/rss+xml" />
        <link>${blogUrl}</link>
        <description>${blogDescription}</description>
        <lastBuildDate>${currentDate}</lastBuildDate>
        <language>en-US</language>
        <sy:updatePeriod>hourly</sy:updatePeriod>
        <sy:updateFrequency>1</sy:updateFrequency>

        <image>
          <url>${logoUrl}</url>
          <title>${blogTitle}</title>
          <link>${blogUrl}</link>
          <width>32</width>
          <height>32</height>
        </image>

        ${rssItems}
      </channel>
    </rss>
  `;
}