import { AxiosAdapter } from "@/adapter/axiosResponse";
import ChangePage from "@/components/ChangePage";
import OpacyTop from "@/components/OpacyTop";
import RenderHtml from "@/components/RenderHtml";
import getUser from "@/service/getUser";
import { metadata } from "../layout";

export interface User {
  id: number;
  name: string;
  email: string;
  description: string;
  imageUrl: string;
  skills: Array<string>;
  contactDescription: string;
}

export default async function About() {
  metadata.title = "Erick Staviasz - About";
  const response = await getUser(new AxiosAdapter());

  const user: User = { ...response };
  user.imageUrl = response.image_url;
  user.contactDescription = response.contact_description;

  return (
    <>
      {user && (
        <main className="py-20 relative mx-auto">
          <OpacyTop bgColor="bg-black" />
          <ChangePage changePage="prev" link="/">
            Home
          </ChangePage>
          <ChangePage changePage="next" link="/projects">
            Projetos
          </ChangePage>
          <div className="fixed sm:top-0 top-auto bottom-0 w-full h-full bg-black ">
            <img
              src={user.imageUrl}
              className="w-[500px] m-auto h-screen object-contain sm:block hidden"
              alt="Image profile"
            />
            <div className="absolute top-0 w-full h-full z-10 bg-shadow"></div>
          </div>
          <div className="absolute sm:top-80 top-28 w-full h-full z-10 px-3">
            <div className="lg:max-w-3xl mx-auto space-y-4 sm:max-w-xl max-w-full divRenderHtml pb-10 pl-2 ">
              <RenderHtml html={user.description} />
            </div>
          </div>
        </main>
      )}
    </>
  );
}
