import { AxiosAdapter } from "@/adapter/axiosResponse";
import ChangePage from "@/components/ChangePage";
import getUser from "@/service/getUser";
import Image from "next/image";
import { User } from "./about/page";

export default async function Home() {
  const response = await getUser(new AxiosAdapter());
  const user: User = { ...response };
  user.imageUrl = response.image_url;
  return (
    <>
      <main className="px-20 flex relative items-center justify-center h-screen bg-black text-blueLigth font-bold max-h-screen overflow-hidden">
        <div className="">
          <h1 className="sm:text-8xl sm:max-w-sm max-w-36 text-5xl">
            Hello I am Erick
          </h1>
        </div>
        <div className="w-1/2 relative sm:block hidden">
          <Image
            src={user.imageUrl}
            width={300}
            height={300}
            alt="foto de Erick Staviasz"
            className="w-full"
          />
          <div className="absolute top-0 w-full h-full z-10 bg-shadow"></div>
        </div>

        <ChangePage changePage="next" link="/about">
          Sobre mim
        </ChangePage>
      </main>
    </>
  );
}
