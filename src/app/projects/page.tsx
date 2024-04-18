import { AxiosAdapter } from "@/adapter/axiosResponse";
import ContainerMain from "@/components/ContainerMain";
import getProjects from "@/service/getProjects";
import { IProject } from "@/types/project";

export default async function Projects() {
  const projects = await getProjects(new AxiosAdapter());
  console.log(projects);
  const projectsList: Array<IProject> = projects.map((item: any) => {
    const project: IProject = {
      id: item.id,
      name: item.name,
      description: item.description,
      linkCode: item.link_code,
      linkDeploy: item.link_deploy,
      imagesUrls: item.images_urls,
      techs: item.techs,
    };
    return project;
  });

  return (
    <>
      <ContainerMain
        list={projectsList}
        route="/projects"
        namePathPrev="Home"
        pathPrev="/"
        namePathNext="Posts"
        pathNext="/posts"
        description="Com uma ampla gama de tecnologias, incluindo JavaScript, TypeScript, Python, ReactJS e muito mais, cada projeto demonstra uma arquitetura robusta, testes de qualidade e colaboração efetiva em equipes multidisciplinares. Desde soluções de impacto social até inovações tecnológicas, cada projeto reflete minha paixão e habilidade como desenvolvedor full stack. Explore agora para descobrir como transformo ideias em realidade digital."
      />
    </>
  );
}
