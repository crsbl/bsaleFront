import cargarProductos from "./acciones/cargarProductos/index.js";
import buscarProducto from "./buscador/buscarTexto/index.js";
import ordenarPor from "./buscador/ordenarPor/index.js";
import filtro from "./buscador/filtro/index.js";

const App = () => {
  //valores iniciales
  let textofiltro = "Todo",
    ordenPor = "Nombre",
    textoBuscar = "";

  //Esta funcion agrega la funcionalidad de buscar
  //textofiltro - cadena de exto - filtro seleccionado
  //ordenPor - cadena de texto - orden seleccionado
  //textoBuscar - cadena de texto - texto de busqueda
  buscarProducto(textofiltro, ordenPor, textoBuscar);

  //esta funcion carga los productos iniciales
  //textofiltro - cadena de exto - filtro seleccionado
  //ordenPor - cadena de texto - orden seleccionado
  //textoBuscar - cadena de texto - texto de busqueda
  cargarProductos(textoBuscar, textofiltro, ordenPor);

  //esta funcion inicia los ordenar por 
  //ordenPor - cadena de texto - orden seleccionado
  ordenarPor(ordenPor);

  //esta funcion inicia los filtros 
  //ordenPor - cadena de texto - orden seleccionado
  filtro(textofiltro);
};

App();
