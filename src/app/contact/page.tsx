import ChangePage from "@/components/ChangePage";
import FormContact from "@/components/FormContact";
import getUser from "@/service/getUser";
import executeService from "@/utils/functions/executeService";
import { metadata } from "../layout";

export default async function Contact() {
  metadata.title = "Erick Staviasz - Contact";
  const response = await executeService(getUser);

  return (
    <>
      <main className="w-full min-h-screen bg-blueDark mx-auto py-20">
        <ChangePage changePage="prev" link="/skills">
          Skills
        </ChangePage>
        <div className="lg:max-w-4xl sm:max-w-xl max-w-64 mx-auto">
          <h1 className="sm:text-4xl text-2xl font-bold mb-5">Contato</h1>
          <p className="mb-10">{response.contact_description}</p>
          <FormContact />
        </div>
      </main>
    </>
  );
}
