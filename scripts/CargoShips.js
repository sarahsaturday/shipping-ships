import { getCargos, getHaulers } from "./database.js";

export const CargosList = () => {
    const cargos = getCargos();

    let cargosHTML = "<ul>";

    for (const cargo of cargos) {
        let cargosHTML = `<li>Cargo ${cargo.id}: ${cargo.name}</li>`;
        cargosHTML += cargosHTML;
    }

    cargosHTML += "</ul>";

    return cargosHTML
}