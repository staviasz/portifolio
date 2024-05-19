import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getProject(
  httpClient: HttpClientContract,
  id?: number,
) {
  if (!id) {
    return "Id required";
  }
  try {
    const response = await httpClient.request({
      route: `/project/${id}`,
      method: "get",
    });
    return response.body;
  } catch (error) {
    throw error;
  }
}
