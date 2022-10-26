import buscarProducto from "../../acciones/buscarProductos/index.js";

//Esta funcion agrega la funcionalidad de buscar
//textofiltro - cadena de exto - filtro seleccionado
//ordenPor - cadena de texto - orden seleccionado
//textoBuscar - cadena de texto - texto de busqueda
export default (textofiltro, ordenPor, textoBuscar) => {
  const inputBuscar = document.getElementById("inputBuscarProducto");
  const buttonBuscar = document.getElementById("buttonBuscar");

  const changeBuscar = (e) => {
    textoBuscar = e.target.value;
    buscarProducto(e.target.value, textofiltro, ordenPor, 0);
  };

  inputBuscar.addEventListener("change", changeBuscar);
  buttonBuscar.addEventListener("click", () => {
    buscarProducto(inputBuscar.value, textofiltro, ordenPor, 0);
  });
};
