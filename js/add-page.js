import { addProduct } from "./request-post.js";

document.getElementById("addButton").addEventListener("click", async () => {
  const name = document.getElementById("nameCreate").value.trim();
  const description = document.getElementById("descriptionCreate").value.trim();
  const price = document.getElementById("priceCreate").value.trim();

  if (!name || !description || !price) {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
    return;
  }

  const newProduct = { name, description, price };

  try {
    // API orqali serverga jo‘natish
    const createdProduct = await addProduct(newProduct);
    console.log("Yangi product serverga yuborildi:", createdProduct);
    localStorage.setItem("goToIndex", Date.now()); // har doim yangi qiymat
    // Shu oynani ham index.html ga yuboramiz
    window.location.href = "index.html";

    // Sahifani o‘zgartirish
    window.location.href = "index.html";
  } catch (error) {
    alert("Serverga ma'lumot yuborishda xatolik yuz berdi.");
  }
});

window.addEventListener("storage", (e) => {
  if (e.key === "goToIndex") {
    window.location.href = "index.html";
  }
});
