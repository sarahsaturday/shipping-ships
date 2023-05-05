import { getDocks, getHaulers } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  const haulers = getHaulers();

  // Check if a dock was clicked
  if (itemClicked.classList.contains("docks")) {
    const dockId = parseInt(itemClicked.dataset.dockid); // Get the dock ID from the clicked element
    const dockLocation = itemClicked.dataset.docklocation; // Get the dock location from the clicked element

    // Find the haulers currently docked at this dock
    const dockedHaulers = haulers.filter((hauler) => hauler.dockId === (dockId));

    // Build the message to display
    let message = `The ${dockLocation} dock is currently unloading `;
    if (dockedHaulers.length === 0) {
      message += "nothing";
    } else if (dockedHaulers.length === 1) {
      const hauler = dockedHaulers[0];
      message += `${hauler.name}`;
    } else {
      const haulerNames = dockedHaulers.map((h) => h.name).join(", ");
      message += `${haulerNames}`;
    }

    // Show the message to the user
    alert(message);
  }
});
  
export const DockList = () => {
  let docks = getDocks();

  docks = docks.sort((a, b) => {
    if (a.location < b.location) {
      return -1;
    }
    if (a.location > b.location) {
      return 1;
    }
    return 0;
  });

  let docksHTML = "<ul>";

  for (const dock of docks) {
    const dockHTML = `<li class="docks" data-dockid="${dock.id}" data-docklocation="${dock.location}">${dock.location} - Volume: ${dock.volume}</li>`;
    docksHTML += dockHTML;
  }

  docksHTML += "</ul>";

  return docksHTML;
};
