import { AxiosAdapter } from "@/adapter/axiosResponse";
import { metadata } from "@/app/layout";
import ChangePage from "@/components/ChangePage";
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

  const post = await getPost(
    new AxiosAdapter(),
    // process.env.TOKEN_USER!,
    Number(id),
  );
  const allPosts = await getPosts(new AxiosAdapter());

  // const post = await executeService(new AxiosAdapter(), getPost, id);
  // const allPosts = await executeService(new AxiosAdapter(), getPosts);

  const firstIdArray = allPosts[0]!.id;
  const lastIdArray = allPosts[allPosts.length - 1]!.id;

  const prev = {
    name: post.id <= firstIdArray ? "Posts" : "Prev",
    link: post.id <= firstIdArray ? "/posts" : `/posts/${post.id - 1}`,
  };

  const next = {
    name: post.id >= lastIdArray ? "Skills" : "Next",
    link: post.id >= lastIdArray ? "/skills" : `/posts/${post.id + 1}`,
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
