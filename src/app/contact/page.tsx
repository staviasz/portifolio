import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

export default function Contact() {
  return (
    <>
      <main className="w-full min-h-screen bg-blueDark mx-auto py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-5">Contato</h1>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            excepturi natus voluptatum minus explicabo sit, voluptate beatae!
            Quam, quas, architecto facilis laborum suscipit ipsum, ex sequi
            tempore provident dolorum repudiandae!
          </p>
          <form className="flex flex-col space-y-6 max-w-xl">
            <Input placeholder="Nome" type="text" />
            <Input placeholder="Email" type="email" />
            <Textarea
              className="h-40 resize-none"
              placeholder="Mensagem"
              maxLength={1024}
            />
            <button className="btnLinkProject max-w-40">Enviar</button>
          </form>
        </div>
      </main>
    </>
  );
}
