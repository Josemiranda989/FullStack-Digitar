const readline = require("readline-sync");
const {
  addClient,
  addOrder,
  addItem,
  clientList,
  orderList,
  inventoryList,
  menuDetail,
} = require("./services/services");

const mainMenu = () => {
  menuDetail();
  const choice = readline.question("Ingrese una opción: \n");
  switch (choice) {
    case "1":
      addClient();
      break;
    case "2":
      addOrder();
      break;
    case "3":
      addItem();
      break;
    case "4":
      clientList();
      break;
    case "5":
      orderList();
      break;
    case "6":
      inventoryList();
      break;
    case "7":
      console.log("Saliendo...");
      process.exit();
    default:
      console.log("La opcion ingresada no es valida, intente nuevamente.");
      break;
  }
};

while (true) {
  mainMenu();
}
