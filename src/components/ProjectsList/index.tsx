import { IlistItem } from "@/types/listItem";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag";
import HeaderProjectImg from "../headerProjectImg";

export interface IProjectList {
  list: Array<IlistItem>;
  route: string;
}

export default function ProjectList({ list, route }: IProjectList) {
  return (
    <ul className="w-full sm:grid grid-cols-2 lg:gap-24 gap-10 space-y-6">
      {list.map(item => (
        <li
          key={item.id}
          className="relative listProjectsItem cursor-pointer first:mt-6"
        >
          <Link href={`${route}/${item.id}`}>
            <HeaderProjectImg title={item.name} />
            <Image
              src={item.imagesUrls[0]}
              alt=""
              className="lg:h-72 h-60 object-cover border-t-2 border-red-400"
              width={500}
              height={500}
            />
            {item.techs && (
              <div className="absolute top-[26px] listProjectsSecondaryImg">
                <Image
                  src={item.imagesUrls[1]}
                  alt=""
                  className="h-0 object-cover img"
                  width={500}
                  height={500}
                />
                <div className="absolute top-0 w-full h-full z-10 bg-shadow"></div>
                <div className="opacity-0 absolute top-0 w-full div">
                  <ul className="ul">
                    {item.techs.slice(0, 5).map(tag => (
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
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
