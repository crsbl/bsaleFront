import cargarPaginas from '../../paginas/index.js';


export default async () => {
  const contenedorProductos = document.getElementById("contenedorProductos");
  contenedorProductos.innerHTML = '';
  const res = await fetch("http://localhost:5000/productosDatos");
  const datos = JSON.parse(await res.text());

  datos[0]
    .map((datos) => {
      contenedorProductos.innerHTML += `<div id='contenedorProducto' class='divContenedorProducto flexColumn'>
    <img class="img_datos00" src="${datos.url_image}"></img>
    <h3>${datos.name}</h3>
    <h3>${datos.discount}</h3>
    <h3>${datos.price}</h3>
    </div>`;
    })
    .join();

    cargarPaginas(datos[1]);
};
