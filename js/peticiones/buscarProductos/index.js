export default async (textoBuscar) => {
  const inputFiltro = document.getElementById("inputFiltro");
  const contenedorProductos = document.getElementById("contenedorProductos");
  contenedorProductos.innerHTML = '';
  const res = await fetch("https://bsaleback-production.up.railway.app/buscarProducto", {
    method: "POST",
    body: JSON.stringify({ buscar: textoBuscar, filtro: inputFiltro.value }),
 
  });
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
};
