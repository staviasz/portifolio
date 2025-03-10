import { AxiosAdapter } from "@/adapter/axiosResponse";
import ContainerMain from "@/components/ContainerMain";
import getProjects from "@/service/getProjects";
import { IProject } from "@/types/project";
import { metadata } from "../layout";

export default async function Projects() {
  metadata.title = "Erick Staviasz - Projects";
  const projects = await getProjects(new AxiosAdapter());
  const projectsList: Array<IProject> | null = projects
    ? projects.map((item: any) => {
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
      })
    : null;

  return (
    <>
      {projectsList && (
        <ContainerMain
          title="Projetos"
          list={projectsList.reverse()}
          route="/projects"
          namePathPrev="About"
          pathPrev="/about"
          namePathNext="Posts"
          pathNext="/posts"
          description="Com uma ampla gama de tecnologias, incluindo JavaScript, TypeScript, Python, ReactJS e muito mais, cada projeto demonstra uma arquitetura robusta, testes de qualidade e colaboração efetiva em equipes multidisciplinares. Desde soluções de impacto social até inovações tecnológicas, cada projeto reflete minha paixão e habilidade como desenvolvedor full stack. Explore agora para descobrir como transformo ideias em realidade digital."
        />
      )}
    </>
  );
}
