import * as Si from "react-icons/si";

interface IconType {
  [key: string]: React.ComponentType<{ size?: string; className?: string }>;
}

export default function RenderIcon({ nomeIcone }: { nomeIcone: string }) {
  nomeIcone = nomeIcone.replace(/\./g, "dot");
  nomeIcone = nomeIcone.replace(/\s/g, "");
  const adapter = `Si${nomeIcone[0].toUpperCase()}${nomeIcone.slice(1)}`;

  const Icone = (Si as IconType)[adapter];

  if (!Icone) {
    return null;
  }

  return <Icone />;
}
