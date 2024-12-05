import api from "./serviceConfig";

async function getContacts() {
  try {
    const result = await api.get("/user");
    return result.data;
  } catch (error) {
    throw new Error("Error fetching contact information: " + error.message);
  }
}

export default getContacts;
