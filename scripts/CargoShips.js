import { getCargos } from "./database.js";

// export const CargosList = () => {
//     const cargos = getCargos();

//     let cargosHTML = "<ul>";

//     for (const cargo of cargos) {
//         cargosHTML += `<li>${cargo.name}</li>`;
//     }

//     cargosHTML += "</ul>";

//     return cargosHTML;
// }

export const CargosList = () => {
    let cargos = getCargos();
  
    cargos = cargos.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  
    let cargosHTML = "<ul>";
  
    for (const cargo of cargos) {
        cargosHTML += `<li>${cargo.name}</li>`;
    }

    cargosHTML += "</ul>";

    return cargosHTML;
}