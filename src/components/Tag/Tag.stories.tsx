import Tag, { ITag } from ".";

export default {
  title: "Tag",
  component: Tag,
  args: {
    children: "storybook",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args: ITag) => {
  return (
    <div>
      <Tag {...args} />
    </div>
  );
};
