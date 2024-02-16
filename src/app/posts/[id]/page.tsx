import RenderHtml from "@/components/RenderHtml";
import { html } from "../../../../teste";

export default function Post() {
  return (
    <>
      <main className="w-full min-h-screen bg-blueDark py-20">
        <div className="lg:max-w-3xl sm:max-w-xl max-w-64 mx-auto divRenderHtml">
          <RenderHtml html={html} />
        </div>
      </main>
    </>
  );
}
