import { IlistItem } from "@/types/listItem";
import ChangePage from "../ChangePage";
import OpacyTop from "../OpacyTop";
import ProjectList from "../ProjectsList";

interface IContainerMain {
  description: string;
  list: Array<IlistItem>;
  route: string;
  pathPrev: string;
  namePathPrev: string;
  pathNext: string;
  namePathNext: string;
}

export default function ContainerMain({
  list,
  route,
  pathPrev,
  namePathPrev,
  pathNext,
  namePathNext,
  description,
}: IContainerMain) {
  return (
    <>
      <main className="w-full min-h-screen bg-blueDark text-gray py-20">
        <OpacyTop />
        <ChangePage changePage="prev" link={pathPrev}>
          {namePathPrev}
        </ChangePage>
        <ChangePage changePage="next" link={pathNext}>
          {namePathNext}
        </ChangePage>
        <div className="lg:max-w-5xl sm:max-w-xl max-w-full mx-auto px-3">
          <h1 className="sm:text-4xl text-2xl font-bold mb-5">
            Developer portifolio
          </h1>
          <p className="mb-10">{description}</p>
          <ProjectList list={list} route={route} />
        </div>
      </main>
    </>
  );
}
