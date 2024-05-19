import Link from "next/link";

interface IList {
  listNav: string[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ listNav, setIsOpen }: IList) {
  return (
    <nav className="w-full h-full bg-blueDark flex items-center justify-center px-6">
      <ul className=" max-w-[600px] w-full bg-blueDarkOpacity5 text-center max-h-[600px]  border-[1px] border-blueDarkOpacity3 border-t-0">
        {listNav.map(item => (
          <Link key={item} href={`/${item}`}>
            <li className="navLi" onClick={() => setIsOpen(false)}>
              <div className="navDivFadeDown"></div>

              <span className="absolute z-10 top-[25%] sm:left-[44%] left-[41%]">
                {item}
              </span>

              <div className="navDivFadeUp"></div>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
