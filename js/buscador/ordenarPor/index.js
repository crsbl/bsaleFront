export default (textoOrdenarPor) => {
  let estadoOrdenarPor = false;

  //funcion interaccion boton ordenar por
  const ordenarPor = (e) => {
    const containerDatosOpcionesOrdenarPor = document.getElementById(
      "containerOpcionesOrdenarPor"
    );
    const inpOrdenarPor = document.getElementById("inputOrdenarPor");

    switch (estadoOrdenarPor) {
      case false:
        containerDatosOpcionesOrdenarPor.style.display = "block";
        estadoOrdenarPor = true;
        break;

      case true:
        if (e.target.id === "inputOrdenarPor") {
          return;
        }
        containerDatosOpcionesOrdenarPor.style.display = "none";
        estadoOrdenarPor = false;
        inpOrdenarPor.value = e.target.innerText;
        textoOrdenarPor = e.target.innerText;
        inpOrdenarPor.setAttribute(
          "name",
          `nameInputOrdenarPor${e.target.id.slice(18)}`
        );
        break;

      default:
        break;
    }
  };

  document
    .getElementById("inputOrdenarPor")
    .addEventListener("click", ordenarPor);

  //agregando opciones ordenar por
  const cargarOrdenarPor = () => {
    const opcionesOrdenarPor = [
      { id: 0, name: "Nombre" },
      { id: 1, name: "Menor Precio" },
      { id: 2, name: "Mayor Precio" },
    ];

    const containerOpcionesOrdenarPor = document.getElementById(
      "containerOpcionesOrdenarPor"
    );

    opcionesOrdenarPor
      .map((datosOpcion) => {
        let H4OpcionesOrdenarPor = document.createElement("h4");
        H4OpcionesOrdenarPor.setAttribute(
          "id",
          `h4opcionFiltro${datosOpcion.id}`
        );
        H4OpcionesOrdenarPor.innerText = datosOpcion.name;
        H4OpcionesOrdenarPor.addEventListener("click", ordenarPor);
        H4OpcionesOrdenarPor.setAttribute(
          "id",
          `h4opcionOrdenarPor${datosOpcion.id}`
        );
        containerOpcionesOrdenarPor.appendChild(H4OpcionesOrdenarPor);
      })
      .join("");
  };

  cargarOrdenarPor();
};
