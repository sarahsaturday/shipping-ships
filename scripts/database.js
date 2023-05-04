const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Pioneering Spirit", dockId: 1 },
        { id: 2, name: "Boaty McBoatface", dockId: 3 },
        { id: 3, name: "Seawise Giant", dockId: 4 }
    ],
    cargos: [
        {id: 1, name: "Esso Atlantic", haulerId: 2},
        {id: 2, name: "Prairial", haulerId: 2},
        {id: 3, name: "Palais Royal", haulerId: 1},
        {id: 4, name: "Rivoli", haulerId: 2},
        {id: 5, name: "Champs Élysée", haulerId: 2},
        {id: 6, name: "Ever Ace", haulerId: 1},
        {id: 7, name: "Nissei Maru", haulerId: 2},
        {id: 8, name: "MSC Gülsün", haulerId: 3},
        {id: 9, name: "HMM Rotterdam", haulerId: 3},
        {id: 10, name: "CMA CGM Trocadero", haulerId: 3}
    ]
}

export const getDocks = () => {
    const docksCopy = [...database.docks];
    return docksCopy
    // You write the code for copying the array and returning it
}

export const getHaulers = () => {
    const haulersCopy = [...database.haulers];
    return haulersCopy
    // You write the code for copying the array and returning it
}

export const getCargos = () => {
    const cargosCopy = [...database.cargos];
    return cargosCopy
    // You write the code for copying the array and returning it
}