import ChangePage from "@/components/ChangePage";
import { Datasheet } from "@/components/Datasheet";
import Tag from "@/components/Tag";
import ImageCarousel from "@/components/carousel";
import img2 from "../../../../public/BlogdeReceitasCriacaoDeUsuario.png";
import img1 from "../../../../public/BlogdeReceitasCriacaoReceita.png";
const slide = [img1, img2, img1, img2, img1, img2, img1, img2];
const tags = [
  "nextjs",
  "typescript",
  "tailwindcss",
  "react",
  "nextjs",
  "typescript",
  "tailwindcss",
  "react",
  "nextjs",
  "typescript",
  "tailwindcss",
  "react",
];

export default function Project() {
  return (
    <main className="w-full min-h-screen bg-blueDark text-gray py-20">
      <ChangePage changePage="prev" link="/">
        Home
      </ChangePage>
      <ChangePage changePage="next" link="/">
        Home
      </ChangePage>
      <div className="lg:max-w-3xl sm:max-w-xl max-w-64 mx-auto">
        <h1 className="text-4xl font-bold mb-5 capitalize">titulo</h1>
        <p className="mb-5 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          quaerat. Velit ratione eveniet debitis. Placeat magnam est voluptas
          voluptates amet saepe ut, ipsa asperiores quos reprehenderit corporis
          dicta deserunt iste.
        </p>
        <ul className="mb-8 flex space-x-4 space-y-2 flex-wrap ">
          {tags.map(tag => (
            <li key={tag} className="first:ml-4 first:mt-2">
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
        <button className="btnLinkProject mb-4">btn link project</button>
        <ImageCarousel images={slide} />
        <Datasheet />
      </div>
    </main>
  );
}
