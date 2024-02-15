import ChangePage from "../ChangePage";
import Head from "../Head";
import ProjectList from "../ProjectsList";

export default function ContainerMain() {
  return (
    <>
      <Head subTitle="Portifolio" />
      <main className="w-full h-screen bg-blueDark text-gray pt-20">
        <ChangePage changePage="prev" link="/">
          Home
        </ChangePage>
        <ChangePage changePage="next" link="/about">
          Sobre mim
        </ChangePage>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-5">Developer portifolio</h1>
          <p className="mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            doloremque inventore ab quos quibusdam fugit quisquam sit deserunt
            corrupti eos natus ut facere porro commodi, sequi repudiandae a unde
            veniam?
          </p>
          <ProjectList />
        </div>
      </main>
    </>
  );
}
