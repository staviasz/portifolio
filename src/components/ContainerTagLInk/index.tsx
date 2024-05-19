import Link from "next/link";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function ContainerTagLinks() {
  return (
    <div className="fixed sm:top-20 left-0 z-50 sm:block flex">
      <a href="https://www.linkedin.com/in/erick-staviasz/" target="_blank">
        <div className="w-12 h-11  bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-2 sm:text-right text-center sm:rounded-e rounded-b sm:rounded-bl-none transition-all duration-500 ease-in-out sm:hover:w-16 sm:hover:h-11 hover:h-12 ">
          <SiLinkedin className="text-white text-2xl inline-block"></SiLinkedin>
        </div>
      </a>
      <a href="https://github.com/staviasz" target="_blank">
        <div className="w-12 h-11 bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-600 p-2 sm:text-right text-center sm:rounded-e rounded-b sm:rounded-bl-none transition-all duration-500 ease-in-out sm:hover:w-16 sm:hover:h-11 hover:h-12 :smmy-[1px]">
          <SiGithub className="text-white text-2xl inline-block" />
        </div>
      </a>
      <Link href="/contact">
        <div className="w-12 h-11  bg-gradient-to-r from-purple-500   via-indigo-500 to-blue-500 p-2 sm:text-right text-center sm:rounded-e rounded-b sm:rounded-bl-none transition-all duration-500 ease-in-out sm:hover:w-16 sm:hover:h-11 hover:h-12">
          <HiOutlineMailOpen className="text-white text-2xl inline-block"></HiOutlineMailOpen>
        </div>
      </Link>
    </div>
  );
}
