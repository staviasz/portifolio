import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textColorBody?: boolean;
  changePage: "next" | "prev";
  link: string;
}

export default function ChangePage(props: IButton) {
  const color = props.textColorBody ? "text-blueLigth" : "text-gray";

  const position = props.changePage === "next" ? "right-0" : "-left-10";
  return (
    <button className={`fixed sm:top-1/2 top-[90%] z-20 ${position} `}>
      <Link
        href={props.link}
        className="ms-10 flex items-center cursor-auto text-sm"
      >
        {props.changePage === "next" ? (
          <>
            <span className={`${color} changePageSpan `}>{props.children}</span>
            <IoIosArrowForward
              className={`${color} changePageIcon cursor-pointer`}
            />
          </>
        ) : (
          <>
            <IoIosArrowBack
              className={`${color} changePageIcon cursor-pointer`}
            />
            <span className={`${color}  changePageSpan cursor-pointer`}>
              {props.children}
            </span>
          </>
        )}
      </Link>
    </button>
  );
}
