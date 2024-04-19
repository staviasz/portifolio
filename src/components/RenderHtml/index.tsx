"use client";
import sanitizeHtml from "sanitize-html";

const allowedTags = [
  "a",
  "abbr",
  "b",
  "blockquote",
  "br",
  "cite",
  "code",
  "div",
  "em",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "i",
  "img",
  "li",
  "ol",
  "p",
  "pre",
  "span",
  "strong",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "u",
  "ul",
];

export default function RenderHtml({ html }: { html: string }) {
  const safeHtml = sanitizeHtml(html, { allowedTags });

  return <div dangerouslySetInnerHTML={{ __html: safeHtml }} />;
}
