import Hamburguer from ".";

export default {
  title: "Hamburguer",
  component: Hamburguer,
};

export const Template = (args: any) => {
  return (
    <div className="bg-blueDark h-52 p-14">
      <Hamburguer {...args} />
    </div>
  );
};
