import { HaulersList } from "./HaulerShips.js";
import { DockList } from "./Docks.js";
import { CargosList } from "./CargoShips.js";

const applicationHTML = () => {
  return `
    <h1>Shipping Ships n' Ships</h1>
    <article class="details">
      <section class="docks">
        <h2>Docks</h2>
        ${DockList()}
      </section>
      <section class="haulers">
        <h2>Haulers</h2>
        ${HaulersList()}
      </section>
      <section class="detail--column list details__ships">
        <h2>Cargos</h2>
        ${CargosList()}
      </section>
    </article>
  `;
};

const container = document.querySelector("#container");
container.innerHTML = applicationHTML()
