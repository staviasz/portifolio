import Input, { IInputProps } from ".";

export default {
  title: "Input",
  component: Input,
  args: {
    messageError: "error message",
    showError: false,
    placeholder: "StoryBook",
  },
  argTypes: {
    messageError: { type: "string" },
    showError: { type: "boolean" },
  },
};

export const Template = (args: IInputProps) => {
  return (
    <div>
      <Input {...args} />
    </div>
  );
};
