import { AxiosAdapter } from "@/adapter/axiosResponse";
import ContainerMain from "@/components/ContainerMain";
import getPosts from "@/service/getPosts";
import { IlistItem } from "@/types/listItem";

export default async function Posts() {
  const response = await getPosts(new AxiosAdapter());
  const listItemPosts = response.map((item: any) => {
    const post: IlistItem = {
      id: item.id,
      imagesUrls: item.images_urls,
      techs: item.techs,
      name: item.name,
    };
    return post;
  });

  return (
    <>
      <ContainerMain list={listItemPosts} route="/posts" />
    </>
  );
}
