"use client";
import { useState } from "react";
import Close from "../Close";
import Hamburguer from "../Hamburguer";
import Nav from "../Nav";

export interface IHeader {
  isOpen?: boolean;
}
export default function Header({ isOpen: open }: IHeader) {
  const [isOpen, setIsOpen] = useState<boolean>(open || false);
  const heigth = isOpen ? "h-screen" : "h-20";
  const listNav = ["about", "projects", "posts", "skills", "contact"];

  return (
    <header
      className={`${heigth} flex flex-col items-end w-full justify-end fixed top-0 left-0 z-30 `}
    >
      {isOpen ? (
        <>
          <Close onClick={() => setIsOpen(false)} />
          <Nav listNav={listNav} setIsOpen={setIsOpen} />
        </>
      ) : (
        <Hamburguer onClick={() => setIsOpen(true)} />
      )}
    </header>
  );
}
