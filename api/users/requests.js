import client from "../../utils/api/client";

export const getUser = async (id) => {
  try {
    const res = await client.get(`/users/${id}`)
    const userContent = res.data

    return userContent
  } catch (e) {
    console.error(e)
  }
}
