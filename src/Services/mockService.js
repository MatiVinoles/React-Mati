import products from "../products";

function getItems(CategoryId) {
  return new Promise((resolve) => {
    if (CategoryId === undefined) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      setTimeout(() => {
        let itemSolicitado = products.filter(
          (item) => item.category === CategoryId
        );
        resolve(itemSolicitado);
      }, 2000);
    }
  });
}

export function getOneItem(idParam) {
  return new Promise((resolve, reject) => {
    let itemSolicitado = products.find((item) => item.id === Number(idParam));
    if (itemSolicitado === undefined) reject("Item no encontrado");

    setTimeout(() => {
      resolve(itemSolicitado);
    }, 2000);
  });
}

export default getItems;
