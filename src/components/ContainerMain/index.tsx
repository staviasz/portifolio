import { IlistItem } from "@/types/listItem";
import ChangePage from "../ChangePage";
import Head from "../Head";
import ProjectList from "../ProjectsList";

interface IContainerMain {
  description?: string;
  list: Array<IlistItem>;
  route: string;
}

export default function ContainerMain({ list, route }: IContainerMain) {
  return (
    <>
      <Head subTitle="Portifolio" />
      <main className="w-full min-h-screen bg-blueDark text-gray py-20">
        <ChangePage changePage="prev" link="/">
          Home
        </ChangePage>
        <ChangePage changePage="next" link="/about">
          Sobre mim
        </ChangePage>
        <div className="lg:max-w-5xl sm:max-w-xl max-w-64 mx-auto ">
          <h1 className="sm:text-4xl text-2xl font-bold mb-5">
            Developer portifolio
          </h1>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            doloremque inventore ab quos quibusdam fugit quisquam sit deserunt
            corrupti eos natus ut facere porro commodi, sequi repudiandae a unde
            veniam?
          </p>
          <ProjectList list={list} route={route} />
        </div>
      </main>
    </>
  );
}
