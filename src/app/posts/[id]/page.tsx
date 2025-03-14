import { AxiosAdapter } from "@/adapter/axiosResponse";
import { metadata } from "@/app/layout";
import ChangePage from "@/components/ChangePage";
import OpacyTop from "@/components/OpacyTop";
import RenderHtml from "@/components/RenderHtml";
import getPost from "@/service/getPost";
import getPosts from "@/service/getPosts";

interface IPost {
  id: number;
  html: string;
}

interface IParams {
  params: {
    id: number;
  };
}

export async function generateStaticParams() {
  const allPosts = await getPosts(new AxiosAdapter());

  const post = allPosts.map((post: IPost) => {
    return { id: post.id.toString() };
  });

  return post;
}

export default async function Post({ params }: IParams) {
  metadata.title = "Erick Staviasz - Post";
  const { id } = params;

  const post = await getPost(new AxiosAdapter(), Number(id));
  const allPosts = await getPosts(new AxiosAdapter());

  const firstIdArray = allPosts[0]!.id;
  const lastIdArray = allPosts[allPosts.length - 1]!.id;

  const prev = {
    name: post.id >= lastIdArray ? "Posts" : "Prev",
    link: post.id >= lastIdArray ? "/posts" : `/posts/${post.id + 1}`,
  };

  const next = {
    name: post.id > firstIdArray ? "Next" : "Skills",
    link: post.id > firstIdArray ? `/posts/${Number(id) - 1}` : "/skills",
  };

  const { html } = post;

  return (
    <>
      <main className="w-full min-h-screen bg-blueDark py-20">
        <OpacyTop />
        <ChangePage changePage="prev" link={prev.link}>
          {prev.name}
        </ChangePage>
        <ChangePage changePage="next" link={next.link}>
          {next.name}
        </ChangePage>
        <div className="lg:max-w-3xl sm:max-w-xl max-w-full px-3 mx-auto divRenderHtml">
          <RenderHtml html={html} />
        </div>
      </main>
    </>
  );
}
