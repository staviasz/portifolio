import { IlistItem } from "./listItem";

export interface IProject extends IlistItem {
  description: string;
  linkDeploy: string;
  linkCode: string;
}
