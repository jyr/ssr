import client from "../../utils/api/client";
import * as API from "../../constants/api/management"

export const getUser = async (id) => {
  try {
    const res = await client.get(`${API.Endpoints.users}${id}`)
    const userContent = res.data

    return userContent
  } catch (e) {
    console.error(e)
  }
}
