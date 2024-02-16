import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textColorBody?: boolean;
  changePage: "next" | "prev";
  link: string;
}

export default function ChangePage(props: IButton) {
  const color = !props.textColorBody ? "" : "text-gray";
  const position = props.changePage === "next" ? "right-0" : "-left-10";
  return (
    <button className={`fixed top-1/2 z-20 ${position}`}>
      <Link
        href={props.link}
        className="ms-10 flex items-center cursor-auto text-sm"
      >
        {props.changePage === "next" ? (
          <>
            <span className={`${color} changePageSpan`}>{props.children}</span>
            <IoIosArrowForward className="changePageIcon" />
          </>
        ) : (
          <>
            <IoIosArrowBack className="changePageIcon" />
            <span className={`${color} changePageSpan`}>{props.children}</span>
          </>
        )}
      </Link>
    </button>
  );
}
