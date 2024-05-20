import Header, { IHeader } from ".";

export default {
  title: "Header",
  component: Header,
};

export const Template = (args: IHeader) => {
  return (
    <div>
      <Header {...args} isOpen={true} />
    </div>
  );
};
