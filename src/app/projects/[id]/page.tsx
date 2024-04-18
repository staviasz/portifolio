import { AxiosAdapter } from "@/adapter/axiosResponse";
import ChangePage from "@/components/ChangePage";
import ContainerButtonLinksProjects from "@/components/ContainerButtonLinksProjects";
import Tag from "@/components/Tag";
import ImageCarousel from "@/components/carousel";
import getProject from "@/service/getProject";
import { IProject } from "@/types/project";

export default async function Project({ params }: { params: { id: number } }) {
  const { id } = params;
  const response = await getProject(new AxiosAdapter(), id);

  const project: IProject = {
    id: response.id,
    name: response.name,
    description: response.description,
    linkCode: response.link_code,
    linkDeploy: response.link_deploy,
    imagesUrls: response.images_urls,
    techs: response.techs,
  };

  const { name, description, techs, imagesUrls } = project;
  const nexttId: number = Number(id) + 1;
  const prevId: number = Number(id) - 1;

  return (
    <main className="w-full min-h-screen bg-blueDark text-gray py-20">
      {id <= 1 ? (
        <ChangePage changePage="prev" link={`/projects`}>
          Projects
        </ChangePage>
      ) : (
        <ChangePage changePage="prev" link={`/projects/${prevId}`}>
          Prev
        </ChangePage>
      )}
      <ChangePage changePage="next" link={`/projects/${nexttId}`}>
        Next
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
  );
}
