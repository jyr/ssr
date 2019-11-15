import API from "../management"
import client from "../client";

export const getUser = async (id) => {
  try {
    const res = await client.get(`${API.Endpoints.users}${id}`)
    const userContent = res.data

    return userContent
  } catch (e) {
    console.error(e)
  }
}
