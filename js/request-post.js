const urlCard = "https://json-api.uz/api/project/fn37";

export async function addProduct(product) {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token || user?.access_token;

    const res = await fetch(`${urlCard}/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    });

    if (!res.ok) {
      throw new Error("Serverga yuborishda xatolik yuz berdi");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("addProduct xatolik:", error);
    throw error;
  }
}
