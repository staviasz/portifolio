import ContainerSkillsIcons from "@/components/ContainerSkillsIcons";

export default function Skills() {
  return (
    <main className="w-full h-screen bg-blueDark py-20 relative">
      <div className="max-w-4xl  mx-auto bg-black rounded min-h-[400px]">
        <h1 className="text-center text-4xl font-bold mb-5">Skills</h1>
        <div>
          <ContainerSkillsIcons />
        </div>
      </div>
    </main>
  );
}
