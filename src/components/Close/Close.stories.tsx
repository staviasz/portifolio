import Close from ".";

interface ArgTypes {
  children: string | React.ReactNode;
}

export default {
  title: "Close",
  component: Close,
  args: {
    children: "nao sei",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <Close {...args} />
    </div>
  );
};
