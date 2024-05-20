import RenderIcon from ".";

export default {
  title: "RenderIcon",
  component: RenderIcon,
  args: {
    nomeIcone: "React",
  },
  argTypes: {
    nomeIcone: { type: "string" },
  },
  parameters: {
    layout: "centered",
  },
};

export const Template = (args: any) => {
  return (
    <div>
      <RenderIcon {...args} />
    </div>
  );
};
