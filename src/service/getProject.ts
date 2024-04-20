import { HttpClientContract } from "@/adapter/axiosResponse";

export default async function getProject(
  httpClient: HttpClientContract,
  authorization: string,
  id?: number,
) {
  if (!id) {
    return "Id required";
  }
  try {
    const response = await httpClient.request({
      route: `/project/${id}`,
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
