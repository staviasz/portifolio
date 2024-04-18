import { AxiosAdapter } from "@/adapter/axiosResponse";
import ContainerMain from "@/components/ContainerMain";
import getProjects from "@/service/getProjects";
import { IProject } from "@/types/project";

export default async function Projects() {
  const projects = await getProjects(new AxiosAdapter());
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
      <ContainerMain list={projectsList} route="/projects" />
    </>
  );
}
