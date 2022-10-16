import cargarProductos from "./acciones/cargarProductos/index.js";
import buscarProducto from "./buscador/buscarTexto/index.js";
import ordenarPor from "./buscador/ordenarPor/index.js";
import filtro from "./buscador/filtro/index.js";

const App = () => {
  //valores iniciales
    let textofiltro = "Todo",
    ordenPor = "Nombre",
    textoBuscar = "";

  buscarProducto(textofiltro, ordenPor,textoBuscar);

  //funciones iniciales con interacción en ordenar por y filtro
  cargarProductos( textoBuscar, textofiltro, ordenPor);
  ordenarPor(ordenPor);
  filtro(textofiltro);

};

App();
