import { AxiosAdapter } from "@/adapter/axiosResponse";
import { metadata } from "@/app/layout";
import ChangePage from "@/components/ChangePage";
import ContainerButtonLinksProjects from "@/components/ContainerButtonLinksProjects";
import OpacyTop from "@/components/OpacyTop";
import Tag from "@/components/Tag";
import ImageCarousel from "@/components/carousel";
import getProject from "@/service/getProject";
import getProjects from "@/service/getProjects";
import { IProject } from "@/types/project";

export async function generateStaticParams() {
  const allProjects = await getProjects(new AxiosAdapter());

  const project = allProjects.map((Project: IProject) => {
    return { id: Project.id.toString() };
  });

  return project;
}

export default async function Project({ params }: { params: { id: number } }) {
  metadata.title = "Erick Staviasz - Project";
  const { id } = params;
  const [projectRes, allProjects] = await Promise.all([
    getProject(new AxiosAdapter(), id),
    getProjects(new AxiosAdapter()),
  ]);

  const project: IProject = projectRes && {
    id: projectRes.id,
    name: projectRes.name,
    description: projectRes.description,
    linkCode: projectRes.link_code,
    linkDeploy: projectRes.link_deploy,
    imagesUrls: projectRes.images_urls,
    techs: projectRes.techs,
  };

  const { name, description, techs, imagesUrls } = project;

  const firstIdArray = allProjects[0].id;
  const lastIdArray = allProjects[allProjects.length - 1].id;

  const prev = {
    name: Number(id) >= lastIdArray ? "Projects" : "Prev",
    link:
      Number(id) >= lastIdArray ? "/projects" : `/projects/${Number(id) + 1}`,
  };

  const next = {
    name: Number(id) > firstIdArray ? "Next" : "Posts",
    link: Number(id) > firstIdArray ? `/projects/${Number(id) - 1}` : "/posts",
  };

  return (
    <>
      <main className="w-full min-h-screen bg-blueDark text-gray py-20">
        <OpacyTop />
        <ChangePage changePage="prev" link={prev.link}>
          {prev.name}
        </ChangePage>
        <ChangePage changePage="next" link={next.link}>
          {next.name}
        </ChangePage>
        <div className="lg:max-w-3xl sm:max-w-xl max-w-[355px] mx-auto">
          <h1 className="text-4xl font-bold mb-5 capitalize">{name}</h1>
          <p className="mb-5 text-lg">{description}</p>
          {techs && (
            <ul className="mb-8 flex space-x-2 space-y-2 flex-wrap ">
              {techs.map(tag => (
                <li key={tag} className="first:mt-2 first:ml-2">
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
