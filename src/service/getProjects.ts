import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getProjects(
  httpClient: HttpClientContract,
  authorization: string,
) {
  try {
    const response = await httpClient.request({
      route: "/project",
      method: "get",
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    });
    return response.body;
  } catch (error) {
    throw error;
  }
}
