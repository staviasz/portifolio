import { AxiosAdapter } from "@/adapter/axiosResponse";
import ChangePage from "@/components/ChangePage";
import Head from "@/components/Head";
import RenderHtml from "@/components/RenderHtml";
import getPost from "@/service/getPost";
import getPosts from "@/service/getPosts";

export default async function Post({ params }: { params: { id: number } }) {
  const { id } = params;
  const [post, allPosts] = await Promise.all([
    getPost(new AxiosAdapter(), id),
    getPosts(new AxiosAdapter()),
  ]);

  const prev = {
    name: Number(id) <= 1 ? "Posts" : "Prev",
    link: Number(id) <= 1 ? "/posts" : `/posts/${Number(id) - 1}`,
  };

  const next = {
    name: Number(id) >= allPosts.length ? "Skills" : "Next",
    link:
      Number(id) >= allPosts.length ? "/skills" : `/posts/${Number(id) + 1}`,
  };

  const { name, html } = post;

  return (
    <>
      <Head />
      <main className="w-full min-h-screen bg-blueDark py-20">
        <ChangePage changePage="prev" link={prev.link}>
          {prev.name}
        </ChangePage>
        <ChangePage changePage="next" link={next.link}>
          {next.name}
        </ChangePage>
        <div className="lg:max-w-3xl sm:max-w-xl max-w-64 mx-auto divRenderHtml">
          <h1>{name}</h1>
          <RenderHtml html={html} />
        </div>
      </main>
    </>
  );
}
