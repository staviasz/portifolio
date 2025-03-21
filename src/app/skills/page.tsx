import { AxiosAdapter } from "@/adapter/axiosResponse";
import ChangePage from "@/components/ChangePage";
import ContainerSkillsIcons from "@/components/ContainerSkillsIcons";
import OpacyTop from "@/components/OpacyTop";
import getUser from "@/service/getUser";
import { metadata } from "../layout";

export default async function Skills() {
  metadata.title = "Erick Staviasz - Skills";
  const response = await getUser(new AxiosAdapter());

  const { techs } = response;

  return (
    <>
      {techs && (
        <main className="w-full min-h-screen bg-blueDark py-20 relative px-3">
          <OpacyTop />
          <ChangePage changePage="prev" link="/posts">
            Posts
          </ChangePage>
          <ChangePage changePage="next" link="/contact">
            Contato
          </ChangePage>
          <div className="lg:max-w-4xl sm:max-w-xl max-w-full mx-auto bg-black rounded min-h-[400px]">
            <h1 className="text-center sm:text-4xl text-2xl font-bold py-5">
              Skills
            </h1>
            <div className="sm:py-0 py-10">
              <ContainerSkillsIcons namesIcon={techs} />
            </div>
          </div>
        </main>
      )}
    </>
  );
}
