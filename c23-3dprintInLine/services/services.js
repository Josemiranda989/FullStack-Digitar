const readline = require("readline-sync");
const fs = require("fs");
const path = require("path");

const loadData = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

const saveData = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, " "));
};

const clientsPath = path.join(__dirname, "..", "data", "clients.json");
const ordersPath = path.join(__dirname, "..", "data", "orders.json");
const inventoryPath = path.join(__dirname, "..", "data", "inventory.json");

const clients = loadData(clientsPath);
const orders = loadData(ordersPath);
const inventory = loadData(inventoryPath);

const addClient = () => {
  const name = readline.question("Ingrese el nombre del cliente: \n");
  const email = readline.question("Ingrese el email del cliente: \n");
  const newClient = {
    id: clients.length + 1,
    name: name,
    email: email,
  };
  clients.push(newClient);
  saveData(clientsPath, clients);
  console.log("El cliente se agrego correctamente");
};

const clientList = () => {
  console.log("Clientes");
  console.table(clients);
  /*   clients.forEach((client) => {
    console.log(
      `Id: ${client.id}, nombre: ${client.name}, email: ${client.email}`
    );
  }); */
};

const addOrder = () => {
  const clienteId = readline.questionInt(" Ingrese el id del cliente");
  if (!clients.find((client) => client.id == clienteId)) {
    return console.log("El cliente no existe");
  }
  const descripcion = readline.question("Ingrese descripcion del pedido");
  const material = readline.question("Ingrese el material de construccion");
  const cantidad = readline.questionInt("Ingrese la cantidad");
  const estado = "pendiente";
  const newOrder = {
    id: orders.length + 1,
    clienteId,
    descripcion,
    material,
    cantidad,
    estado,
  };
  orders.push(newOrder);
  saveData(ordersPath, orders);
  console.log("Se agrego un nuevo pedido a la lista");
};

const orderList = () => {
  console.log("Pedidos");
  orders.forEach((order) => {
    console.log(
      `Id: ${order.id}, descripcion: ${order.descripcion}, cantidadl: ${order.cantidad}, estado: ${order.estado}`
    );
  });
};

const addItem = () => {
  const color = readline.question("Ingrese el color ");
  const tipo = readline.question("Ingrese el tipo");
  const stock = readline.questionInt("Ingrese la cantidad");

  const newItem = {
    id: inventory.length + 1,
    color,
    tipo,
    stock,
  };
  inventory.push(newItem);
  saveData(inventoryPath, inventory);
  console.log("Se agrego un nuevo item a la lista");
};

const inventoryList = () => {
  console.log("Inventario");
  inventory.forEach((item) => {
    console.log(
      `Id: ${item.id}, color: ${item.color}, tipo: ${item.tipo}, stock: ${item.stock}`
    );
  });
};

const menuDetail = () => {
  console.log("--3dPrintInLine--");
  console.log("1- Agregar cliente");
  console.log("2- Agregar un pedido");
  console.log("3- Agregar item al inventario");
  console.log("4- Listar cliente");
  console.log("5- Listar pedidos");
  console.log("6- Listar inventario");
  console.log("7- Salir");
  console.log("\n");
};

module.exports = {
  addClient,
  addOrder,
  addItem,
  clientList,
  orderList,
  inventoryList,
  menuDetail,
};
