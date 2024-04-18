import { AxiosAdapter } from "@/adapter/axiosResponse";
import RenderHtml from "@/components/RenderHtml";
import getPost from "@/service/getPost";

export default async function Post({ params }: { params: { id: number } }) {
  const { id } = params;
  const response = await getPost(new AxiosAdapter(), id);

  const { html, name } = response;

  return (
    <>
      <main className="w-full min-h-screen bg-blueDark py-20">
        <div className="lg:max-w-3xl sm:max-w-xl max-w-64 mx-auto divRenderHtml">
          <h1>{name}</h1>
          <RenderHtml html={html} />
        </div>
      </main>
    </>
  );
}
