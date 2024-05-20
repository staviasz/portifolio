import RenderHtml from ".";

export default {
  title: "RenderHtml",
  component: RenderHtml,
  args: {
    html: "<body><p>Este é um parágrafo de exemplo que descreve o conteúdo da página.</p><img src='https://via.placeholder.com/150' alt='Imagem de exemplo'><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul></body>",
  },
  argTypes: {
    html: { type: "string" },
  },
};

export const Template = (args: any) => {
  return (
    <div>
      <RenderHtml {...args} />
    </div>
  );
};
