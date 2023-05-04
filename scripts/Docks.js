import { getDocks, getHaulers } from "./database.js";

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
  
    // Was a dock list item clicked?
    if (itemClicked.matches(".docks")) {
      // Get the id of the dock clicked
      const dockId = parseInt(itemClicked.dataset.dockid);
      const dockLocation = itemClicked.dataset.location
  
      // Get the haulers and docks from the database
      const haulers = getHaulers();
    //   const docks = getDocks();
  
      // Find the dock with the matching ID
    //   const dock = docks.find(d => d.id === dockId);
  
      // Find the haulers currently docked at the dock
      const dockedHaulers = haulers.filter(h => h.dockId === dockId);
  
      // Construct the message to show to the user
      let message = `The ${dockLocation} dock is currently unloading `;
      if (dockedHaulers.length === 0) {
        message += "nothing";
      } else if (dockedHaulers.length === 1) {
        const hauler = dockedHaulers[0];
        //check breakpoint in browser
        const cargo = hauler.cargo.find(c => c.dockId === dockId);
        message += `${cargo.name} from ${hauler.name}`;
      } else {
        const haulerNames = dockedHaulers.map(h => h.name).join(", ");
        message += `cargos from ${haulerNames}`;
      }
  
      // Show the message to the user
      alert(message);
    }
  });

  
export const DockList = () => {
  const docks = getDocks();

  let docksHTML = "<ul>";

  for (const dock of docks) {
    const dockHTML = `<li class="docks" data-dockid=${dock.id} data-location=${dock.location}>${dock.location} - Volume: ${dock.volume}</li>`;
    docksHTML += dockHTML;
  }

  docksHTML += "</ul>";

  return docksHTML;
};