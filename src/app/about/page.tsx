import ChangePage from "@/components/ChangePage";
import Image from "next/image";
import img from "../../../public/WhatsApp_Image_2024-02-02_at_9.35-Photoroom__1_-removebg-preview.png";

export default function About() {
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
            src={img}
            className="w-full h-screen object-contain"
            alt="Erick Staviasz"
          />
          <div className="absolute top-0 w-full h-full z-10 bg-shadow"></div>
        </div>
        <div className="absolute top-80 w-full h-full z-10">
          <div className="lg:max-w-3xl mx-auto space-y-4 sm:max-w-xl max-w-72">
            <h1 className="sm:text-4xl text-2xl font-bold">Sobre mim</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum aliquam mollitia saepe vel explicabo cumque pariatur
              eligendi dolores ipsam illo, quisquam distinctio aliquid
              temporibus voluptatem quam possimus laboriosam laborum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum aliquam mollitia saepe vel explicabo cumque pariatur
              eligendi dolores ipsam illo, quisquam distinctio aliquid
              temporibus voluptatem quam possimus laboriosam laborum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum aliquam mollitia saepe vel explicabo cumque pariatur
              eligendi dolores ipsam illo, quisquam distinctio aliquid
              temporibus voluptatem quam possimus laboriosam laborum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum aliquam mollitia saepe vel explicabo cumque pariatur
              eligendi dolores ipsam illo, quisquam distinctio aliquid
              temporibus voluptatem quam possimus laboriosam laborum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum aliquam mollitia saepe vel explicabo cumque pariatur
              eligendi dolores ipsam illo, quisquam distinctio aliquid
              temporibus voluptatem quam possimus laboriosam laborum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum aliquam mollitia saepe vel explicabo cumque pariatur
              eligendi dolores ipsam illo, quisquam distinctio aliquid
              temporibus voluptatem quam possimus laboriosam laborum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum aliquam mollitia saepe vel explicabo cumque pariatur
              eligendi dolores ipsam illo, quisquam distinctio aliquid
              temporibus voluptatem quam possimus laboriosam laborum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum aliquam mollitia saepe vel explicabo cumque pariatur
              eligendi dolores ipsam illo, quisquam distinctio aliquid
              temporibus voluptatem quam possimus laboriosam laborum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum aliquam mollitia saepe vel explicabo cumque pariatur
              eligendi dolores ipsam illo, quisquam distinctio aliquid
              temporibus voluptatem quam possimus laboriosam laborum!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
