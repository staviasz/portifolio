import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getProject(
  httpClient: HttpClientContract,
  projectId: number,
) {
  try {
    const response = await httpClient.request({
      route: `/project/${projectId}`,
      method: "get",
    });
    return response.body;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
