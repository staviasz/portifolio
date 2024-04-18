"use client";
import sanitizeHtml from "sanitize-html";

export default function RenderHtml({ html }: { html: string }) {
  const safeHtml = sanitizeHtml(html);

  return <div dangerouslySetInnerHTML={{ __html: safeHtml }} />;
}
