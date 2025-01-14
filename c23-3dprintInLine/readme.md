# Sistema de Gestión de Clientes y Pedidos

Este proyecto es un sistema de gestión de clientes y pedidos desarrollado en Node.js. Permite agregar clientes, crear pedidos, añadir ítems al inventario, y listar clientes, pedidos e inventarios. El sistema presenta un menú interactivo en la consola para navegar entre las diferentes opciones.

## Requisitos

Para ejecutar este proyecto necesitas tener Node.js instalado en tu máquina. Además, asegúrate de tener las siguientes dependencias:

```json
{
  "dependencies": {
    "readline-sync": "^1.4.10"
  }
}
Instalación
Clona este repositorio en tu máquina local.

Navega hasta el directorio del proyecto y ejecuta npm install para instalar las dependencias.

Uso
Para iniciar el sistema, ejecuta el siguiente comando:

sh
node index.js
Una vez iniciado, verás un menú con las siguientes opciones:

Agregar Cliente: Permite agregar un nuevo cliente al sistema.

Agregar Pedido: Permite crear un nuevo pedido.

Agregar Ítem: Permite añadir un nuevo ítem al inventario.

Listar Clientes: Muestra una lista de todos los clientes registrados.

Listar Pedidos: Muestra una lista de todos los pedidos realizados.

Listar Inventario: Muestra una lista de todos los ítems en el inventario.

Salir: Cierra el sistema.

Estructura del Proyecto
index.js: El archivo principal que contiene el menú interactivo y la lógica principal del sistema.

services/services.js: Contiene las funciones que gestionan la adición de clientes, pedidos e ítems, así como la visualización de listas.

Contribuciones
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Realiza un fork del repositorio.

Crea una rama nueva (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').

Envía tus cambios (git push origin feature/nueva-funcionalidad).

Abre un Pull Request.

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
```
