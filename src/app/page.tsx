import { AxiosAdapter } from "@/adapter/axiosResponse";
import ChangePage from "@/components/ChangePage";
import getUser from "@/service/getUser";
import { User } from "./about/page";

export default async function Home() {
  const response = await getUser(new AxiosAdapter());

  const user: User = { ...response };
  user.imageUrl = response.image_url;
  return (
    <>
      {response && (
        <main className="px-20 flex relative items-center justify-center h-screen bg-black text-gray font-bold max-h-screen overflow-hidden">
          <div className="">
            <h1 className="sm:text-8xl sm:mt-16 sm:max-w-sm max-w-36 text-5xl">
              Hello I am Erick
            </h1>
          </div>
          <div className="w-1/2 h-full relative lg:flex items-end justify-center hidden">
            <img
              src={user.imageUrl}
              width={300}
              height={300}
              alt="foto de Erick Staviasz"
              className="relative max-w-md w-full bottom-0 object-contain"
            />
            <div className="absolute top-0 w-full h-full z-10 bg-shadow"></div>
          </div>

          <ChangePage changePage="next" link="/about">
            Sobre mim
          </ChangePage>
        </main>
      )}
    </>
  );
}
