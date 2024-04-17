import { AxiosAdapter } from "@/adapter/axiosResponse";
import ChangePage from "@/components/ChangePage";
import RenderHtml from "@/components/RenderHtml";
import Image from "next/image";
import getUser from "../service/getUser";

interface User {
  id: number;
  name: string;
  email: string;
  description: string;
  imageUrl: string;
  skills: Array<string>;
  contactDescription: string;
}

export default async function About() {
  const response = await getUser(new AxiosAdapter());
  const user: User = { ...response };
  user.imageUrl = response.image_url;
  user.contactDescription = response.contact_description;

  return (
    <>
      <main className="py-20 relative mx-auto">
        <ChangePage changePage="prev" link="/">
          Home
        </ChangePage>
        <ChangePage changePage="next" link="/projects">
          Projetos
        </ChangePage>
        <div className="fixed top-0 w-full h-full bg-black  ">
          <Image
            src={user.imageUrl}
            className="w-full h-screen object-contain"
            alt="Image profile"
            width={300}
            height={300}
          />
          <div className="absolute top-0 w-full h-full z-10 bg-shadow"></div>
        </div>
        <div className="absolute top-80 w-full h-full z-10">
          <div className="lg:max-w-3xl mx-auto space-y-4 sm:max-w-xl max-w-72 divRenderHtml pb-10">
            <RenderHtml html={user.description} />
          </div>
        </div>
      </main>
    </>
  );
}
