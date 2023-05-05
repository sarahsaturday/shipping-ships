import { getHaulers, getCargos } from "./database.js";

const haulers = getHaulers();
const cargos = getCargos();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  // Was a hauler list item clicked?
  if (itemClicked.matches(".hauler")) {
    // Get the id of the hauler clicked
    const haulerId = parseInt(itemClicked.dataset.id);

    // Start a counter variable at 0
    let shipCount = 0;

    // Iterate all of the shipping ships
    for (const cargo of cargos) {
      // Does the haulerId foreign key match the id?
      if (cargo.haulerId === haulerId) {
        // Increase the counter by 1
        shipCount++;
      }
    }

    alert(`Hauler ${haulerId} has ${shipCount} cargo ships.`);
  }
});

export const HaulersList = () => {
  let haulers = getHaulers();

  haulers = haulers.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  let haulersHTML = "<ul>";

  for (const hauler of haulers) {
    const haulerHTML = `<li class="hauler" data-id="${hauler.id}">${hauler.name}</li>`;
    haulersHTML += haulerHTML;
  }

  haulersHTML += "</ul>";

  return haulersHTML;
};
