import API from "../management"
import Client from "../client";

export const getUser = async (id) => {
  try {
    const res = await Client.get(`${API.endPoints.users}${id}`)
    const userContent = res.data

    return userContent
  } catch (e) {
    console.error(e)
  }
}
