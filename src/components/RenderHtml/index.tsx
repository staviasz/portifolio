"use client";
import * as DOMPurify from "dompurify";

export default function RenderHtml({ html }: { html: string }) {
  const safeHtml = DOMPurify.sanitize(html);

  return <div dangerouslySetInnerHTML={{ __html: safeHtml }} />;
}
