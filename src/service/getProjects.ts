import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getProjects(httpClient: HttpClientContract) {
  try {
    const response = await httpClient.request({
      route: "/project",
      method: "get",
    });
    return response.body;
  } catch (error) {
    throw error;
  }
}
