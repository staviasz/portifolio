import Image from "next/image";
import img1 from "../../../public/BlogdeReceitasCriacaoDeUsuario.png";
import img2 from "../../../public/BlogdeReceitasCriacaoReceita.png";
import Tag from "../Tag";
import HeaderProjectImg from "../headerProjectImg";
export default function ProjectList() {
  const tags = ["nextjs", "typescript", "tailwindcss", "react"];
  return (
    <ul className="w-full grid grid-cols-2 gap-24 ">
      <li className="relative listProjectsItem cursor-pointer">
        <HeaderProjectImg />
        <Image
          src={img1}
          alt=""
          className="h-72 object-cover border-t-2 border-red-400"
        />
        <div className="absolute top-[26px] listProjectsSecondaryImg">
          <Image src={img2} alt="" className="h-0 object-cover img" />
          <div className="absolute top-0 w-full h-full z-10 bg-shadow"></div>
          <div className="opacity-0 absolute top-0 w-full div">
            <ul className="ul">
              {tags.map(tag => (
                <li key={tag} className="li">
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
            <div className=" absolute top-[150%] w-full flex justify-center">
              <Tag className="max-w-max">more...</Tag>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
