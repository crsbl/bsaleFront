import peticionFech from "../../peticiones/index.js";

export default (textoFiltro) => {
  let estadoFiltro = false;

  //interacciones con el filtro
  const filtro = (e) => {
    const containerDatosOpciones = document.getElementById(
      "containerOpcionesFiltro"
    );
    const inpFiltro = document.getElementById("inputFiltro");

    switch (estadoFiltro) {
      case false:
        containerDatosOpciones.style.display = "block";
        estadoFiltro = true;
        break;

      case true:
        if (e.target.id === "inputFiltro") {
          return;
        }
        containerDatosOpciones.style.display = "none";
        estadoFiltro = false;
        inpFiltro.value = e.target.innerText;
        inpFiltro.setAttribute(
          "name",
          `nameInputFiltro${e.target.id.slice(14)}`
        );
        textoFiltro = e.target.innerText;

        break;

      default:
        break;
    }
  };

  document.getElementById("inputFiltro").addEventListener("click", filtro);
  document
    .getElementById("h4opcionFiltroTodo")
    .addEventListener("click", filtro);

  //funcion rellenar filtro
  const cargarFiltros = async () => {
    const containerOpcionesFiltro = document.getElementById(
      "containerOpcionesFiltro"
    );
    const datosOpcion = await peticionFech(
      "https://bsaleback-production.up.railway.app/filtroDatos",
      "GET"
    );

    datosOpcion
      .map((datosOpcion) => {
        let H4OpcionesFiltro = document.createElement("h4");
        H4OpcionesFiltro.setAttribute("id", `h4opcionFiltro${datosOpcion.id}`);
        H4OpcionesFiltro.innerText = datosOpcion.name;
        H4OpcionesFiltro.addEventListener("click", filtro);
        containerOpcionesFiltro.appendChild(H4OpcionesFiltro);
      })
      .join("");
  };

  cargarFiltros();
};
