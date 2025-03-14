import { IlistItem } from "@/types/listItem";
import Link from "next/link";
import HeaderProjectImg from "../HeaderProjectImg";

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
            <img
              src={item.imagesUrls[0]}
              alt=""
              className="lg:h-72 h-60 object-cover border-t-2 border-red-400 rounded-b-md w-full"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
