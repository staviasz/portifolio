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
    <div className="flex justify-between mb-4">
      {linkDeploy && linkDeploy !== "None" && (
        <Link
          href={linkDeploy}
          target="_blank"
          className="btnLinkProject deploy"
        >
          Link Deploy
        </Link>
      )}
      <Link href={linkCode} target="_blank" className="btnLinkProject code ">
        Link Code
      </Link>
    </div>
  );
}
