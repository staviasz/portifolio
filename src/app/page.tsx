import ChangePage from "@/components/ChangePage";
import Image from "next/image";
import profile from "../../public/WhatsApp_Image_2024-02-02_at_9.35-Photoroom__1_-removebg-preview.png";

export default function Home() {
  return (
    <>
      <main className="flex relative items-center justify-center h-screen bg-black text-blueLigth font-bold max-h-screen overflow-hidden">
        <div className="">
          <h1 className="text-8xl max-w-sm">Hello I am Erick</h1>
        </div>
        <div className="w-1/2 relative">
          <Image
            src={profile}
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
