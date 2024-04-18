import Link from "next/link";

interface IContainerButtonLinksProjects {
  linkCode: string;
  linkDeploy?: string;
}

export default function ContainerButtonLinksProjects({
  linkCode,
  linkDeploy,
}: IContainerButtonLinksProjects) {
  return (
    <div className="flex justify-between">
      {linkDeploy && linkDeploy !== "None" && (
        <Link href={linkDeploy} target="_blank">
          <button className="btnLinkProject deploy mb-4">Link Deploy</button>
        </Link>
      )}
      <Link href={linkCode} target="_blank">
        <button className="btnLinkProject code mb-4">Link Code</button>
      </Link>
    </div>
  );
}
