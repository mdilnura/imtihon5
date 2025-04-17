window.addEventListener("load", function () {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    console.log(window.location.href);
    window.location.href = "../pages/login.html";
  }
});

const elProducts = document.querySelectorAll(".js-products");
const skeleton = document.getElementById("skeleton");
const loading = document.getElementById("loading");

fetch("https://json-api.uz/api/project/fn37/cars")
  .then((res) => {
    const req = res.json();
    return req;
  })
  .then((req) => {
    skeleton.innerHTML = "";
    req.data.forEach((item) => {
      const { name, description, price } = item;
      skeleton.innerHTML += `
                <div class="card bg-base-100 w-70 shadow-md shadow-gray-700">
                    <div class="card-body">
                      <h2 class="card-title font-bold">${name}</h2>
                      <p>${description}</p>
                      <button class="btn btn-primary btn-block mt-4">${price} $</button>
                    </div>
                </div>`;
    });

    // localStorage.setItem("goToIndex", Date.now());
    // window.location.href = "add-page.html";
  });
// window.addEventListener("storage", (e) => {
//   if (e.key === "goToIndex") {
//     window.location.href = "add-page.html";
//   }
// });
//   addproduct
