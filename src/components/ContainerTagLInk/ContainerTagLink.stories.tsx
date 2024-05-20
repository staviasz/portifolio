import ContainerTagLink from ".";

export default {
  title: "ContainerTagLink",
  component: ContainerTagLink,
  args: {
    children: "nao sei",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args: any) => {
  return (
    <div>
      <ContainerTagLink {...args} />
    </div>
  );
};
