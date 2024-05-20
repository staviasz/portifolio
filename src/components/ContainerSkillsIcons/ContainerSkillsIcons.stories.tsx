import ContainerSkillIcons, { IContainerSkillsIcons } from ".";

export default {
  title: "ContainerSkillIcons",
  component: ContainerSkillIcons,
  argTypes: {
    namesIcon: { type: "array" },
  },
  args: {
    namesIcon: ["Javascript", "Typescript", "React", "Next.js", "Nodedotjs"],
  },
};

export const Template = (args: IContainerSkillsIcons) => {
  return (
    <div className="bg-black h-52 p-5">
      <ContainerSkillIcons {...args} />
    </div>
  );
};
