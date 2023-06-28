let row = document.querySelector(".row");

async function getData() {
  return fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.json())
    .then((data) => {
      return data.categories; // Accéder au tableau des catégories
    })
    .catch((error) => {
      console.error("Une erreur s'est produite:", error);
    });
}

async function useData() {
  try {
    const tableData = await getData();

    if (Array.isArray(tableData)) {
      tableData.forEach((item) => {

        row.innerHTML += `
          <div class="col-12 col-sm-6 col-md-auto col-md-4 col-lg-3">
            <div class="food d-flex justify-content-center flex-column align-items-center ">
              <div>
                <img src="${item.strCategoryThumb}" alt="image" class="h-100 w-100" />
              </div>
              <div class="d-flex justify-content-center">
                <h5 class="mx-2">Categorie</h5>:<h5 class="mx-2">${item.strCategory}</h5>
              </div>
              <div class="alert alert-light">
                <div class="form-text text-center p-1 text-dark ">
                  ${item.strCategoryDescription}
                </div>
              </div>
            </div>
          </div>`;
      });
    } else {
      console.log("Les données ne sont pas un tableau.");
    }
  } catch (error) {
    console.log(error);
  }
}

useData();


