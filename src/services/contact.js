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

export async function deleteContact(id){
    try{
        const result = await api.delete(`/user/${id}`, id)
        return result.data
    } catch (error) {
        console.error("Error deleting a contact", error)
    }
}

export async function updateContact(id, name, lastName, category, email, number) {
    try {
      const result = await api.put(`/user/${id}`, {
        id,
        name,
        lastName,
        category,
        email,
        number,
      });
        return result.data
    } catch(error) {
        console.error("Error updating a contact", error)
    }
}


