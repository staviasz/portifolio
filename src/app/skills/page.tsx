import ContainerSkillsIcons from "@/components/ContainerSkillsIcons";

// separa esse componente de transformação em icom pasra outro arquivo
// interface IconType {
//   [key: string]: React.ComponentType<{ size?: string; className?: string }>;
// }

// const TestComponent = ({ nomeIcone }: { nomeIcone: string }) => {
//   const adapter = `Si${nomeIcone}`;
//   const Icone = (Si as IconType)[adapter];

//   if (!Icone) {
//     console.error(`Ícone '${nomeIcone}' não encontrado.`);
//     return null; // ou algum componente alternativo
//   }

//   return <Icone />;
// };

export default function Skills() {
  return (
    <main className="w-full min-h-screen bg-blueDark py-20 relative">
      <div className="lg:max-w-4xl sm:max-w-xl max-w-72  mx-auto bg-black rounded min-h-[400px]">
        {/* <TestComponent nomeIcone="Python" /> */}

        <h1 className="text-center sm:text-4xl text-2xl font-bold py-5">
          Skills
        </h1>
        <div className="sm:py-0 py-10">
          <ContainerSkillsIcons />
        </div>
      </div>
    </main>
  );
}
