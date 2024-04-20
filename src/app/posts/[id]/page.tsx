import { metadata } from "@/app/layout";
import ChangePage from "@/components/ChangePage";
import RenderHtml from "@/components/RenderHtml";
import getPost from "@/service/getPost";
import getPosts from "@/service/getPosts";
import executeService from "@/utils/functions/executeService";

export default async function Post({ params }: { params: { id: number } }) {
  metadata.title = "Erick Staviasz - Post";
  const { id } = params;
  const [post, allPosts] = await Promise.all([
    executeService(getPost, id),
    executeService(getPosts),
  ]);
  const firstIdArray = allPosts[0].id;
  const lastIdArray = allPosts[allPosts.length - 1].id;

  const prev = {
    name: Number(id) <= firstIdArray ? "Posts" : "Prev",
    link: Number(id) <= firstIdArray ? "/posts" : `/posts/${Number(id) - 1}`,
  };

  const next = {
    name: Number(id) >= lastIdArray ? "Skills" : "Next",
    link: Number(id) >= lastIdArray ? "/skills" : `/posts/${Number(id) + 1}`,
  };

  const { html } = post;

  return (
    <>
      <main className="w-full min-h-screen bg-blueDark py-20">
        <ChangePage changePage="prev" link={prev.link}>
          {prev.name}
        </ChangePage>
        <ChangePage changePage="next" link={next.link}>
          {next.name}
        </ChangePage>
        <div className="lg:max-w-3xl sm:max-w-xl max-w-64 mx-auto divRenderHtml">
          <RenderHtml html={html} />
        </div>
      </main>
    </>
  );
}
