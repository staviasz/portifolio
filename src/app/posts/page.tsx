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
      <ContainerMain
        list={listItemPosts}
        route="/posts"
        namePathPrev="Projects"
        pathPrev="/projects"
        namePathNext="Skills"
        pathNext="/skills"
        description="Aqui você encontrará uma coleção de insights e tutoriais detalhados sobre as ferramentas e tecnologias que utilizo. Cada post é projetado para fornecer dicas práticas e guias passo a passo para ajudar você a aprimorar suas habilidades de desenvolvimento. Desde melhores práticas até as últimas atualizações tecnológicas, estes posts são uma fonte valiosa de conhecimento para desenvolvedores em busca de aprendizado contínuo e crescimento profissional."
      />
    </>
  );
}
