import Textarea, { ITextareaProps } from ".";

export default {
  title: "Textarea",
  component: Textarea,
  args: {
    messageError: "error message",
    showError: false,
    placeholder: "Message",
  },
  argTypes: {
    messageError: { type: "string" },
    showError: { type: "boolean" },
    placeholder: { type: "string" },
  },
};

export const Template = (args: ITextareaProps) => {
  return (
    <div>
      <Textarea {...args} />
    </div>
  );
};
