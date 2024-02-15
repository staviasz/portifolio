import ChangePage from "@/components/ChangePage";
import { Datasheet } from "@/components/Datasheet";
import ImageCarousel from "@/components/carousel";
import img2 from "../../../../public/BlogdeReceitasCriacaoDeUsuario.png";
import img1 from "../../../../public/BlogdeReceitasCriacaoReceita.png";
const slide = [img1, img2, img1, img2, img1, img2, img1, img2];

export default function Project() {
  return (
    <main className="w-full min-h-screen bg-blueDark text-gray py-20">
      <ChangePage changePage="prev" link="/">
        Home
      </ChangePage>
      <ChangePage changePage="next" link="/">
        Home
      </ChangePage>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-5 capitalize">titulo</h1>
        <p className="mb-10 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          quaerat. Velit ratione eveniet debitis. Placeat magnam est voluptas
          voluptates amet saepe ut, ipsa asperiores quos reprehenderit corporis
          dicta deserunt iste.
        </p>
        <button className="btnLinkProject mb-4">btn link project</button>
        <ImageCarousel images={slide} />
        <Datasheet />
      </div>
    </main>
  );
}
