import api from "./serviceConfig";

export async function getContacts() {
  try {
    const result = await api.get("/user");
    return result.data;
  } catch (error) {
    throw new Error("Error fetching contact information: " + error.message);
  }
}

export async function createContact(data) {
    try{
        const result = await api.post("/user", data)
        return result.data
    } catch (error) {
        console.error("Error with adding a contact", error)
    }
}


