import { AxiosAdapter } from "@/adapter/axiosResponse";
import ChangePage from "@/components/ChangePage";
import ContainerButtonLinksProjects from "@/components/ContainerButtonLinksProjects";
import Head from "@/components/Head";
import Tag from "@/components/Tag";
import ImageCarousel from "@/components/carousel";
import getProject from "@/service/getProject";
import getProjects from "@/service/getProjects";
import { IProject } from "@/types/project";

export default async function Project({ params }: { params: { id: number } }) {
  const { id } = params;
  const [projectRes, allProjects] = await Promise.all([
    getProject(new AxiosAdapter(), id),
    getProjects(new AxiosAdapter()),
  ]);

  const project: IProject = {
    id: projectRes.id,
    name: projectRes.name,
    description: projectRes.description,
    linkCode: projectRes.link_code,
    linkDeploy: projectRes.link_deploy,
    imagesUrls: projectRes.images_urls,
    techs: projectRes.techs,
  };

  const { name, description, techs, imagesUrls } = project;

  const prev = {
    name: Number(id) <= 1 ? "Projects" : "Prev",
    link: Number(id) <= 1 ? "/projects" : `/projects/${Number(id) - 1}`,
  };

  const next = {
    name: Number(id) >= allProjects.length ? "Skills" : "Next",
    link:
      Number(id) >= allProjects.length ? "/skills" : `/posts/${Number(id) + 1}`,
  };

  return (
    <>
      <Head />
      <main className="w-full min-h-screen bg-blueDark text-gray py-20">
        <ChangePage changePage="prev" link={prev.link}>
          {prev.name}
        </ChangePage>
        <ChangePage changePage="next" link={next.link}>
          {next.name}
        </ChangePage>
        <div className="lg:max-w-3xl sm:max-w-xl max-w-64 mx-auto">
          <h1 className="text-4xl font-bold mb-5 capitalize">{name}</h1>
          <p className="mb-5 text-lg">{description}</p>
          {techs && (
            <ul className="mb-8 flex space-x-4 space-y-2 flex-wrap ">
              {techs.map(tag => (
                <li key={tag} className="first:mt-2">
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          )}
          <ContainerButtonLinksProjects
            linkCode={project.linkCode}
            linkDeploy={project.linkDeploy}
          />
          <ImageCarousel images={imagesUrls} title={name} />
        </div>
      </main>
    </>
  );
}
