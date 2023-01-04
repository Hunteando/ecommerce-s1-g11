export default function functionOrdernarProductos(
  columna,
  ordenColumnas,
  listadoOrdenar
) {
  if (columna === "id") {
    if (ordenColumnas.id === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        }
        if (b.id < a.id) {
          return -1;
        }
        return 0;
      });
      return {
        productosOrdenados: listadoOrdenar,
        ordenProductos: {
          id: "des",
          name: null,
          price: null,
        },
      };
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (b.id > a.id) {
          return -1;
        }
        return 0;
      });
      return {
        productosOrdenados: listadoOrdenar,
        ordenProductos: {
          id: "asc",
          name: null,
          price: null,
        },
      };
    }
  } else if (columna === "name") {
    if (ordenColumnas.name === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (b.name < a.name) {
          return -1;
        }
        return 0;
      });
      return {
        productosOrdenados: listadoOrdenar,
        ordenProductos: {
          id: null,
          name: "des",
          price: null,
        },
      };
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      });
      return {
        productosOrdenados: listadoOrdenar,
        ordenProductos: {
          id: null,
          name: "asc",
          price: null,
        },
      };
    }
  } else if (columna === "price") {
    if (ordenColumnas.price === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (b.price < a.price) {
          return -1;
        }
        return 0;
      });
      return {
        productosOrdenados: listadoOrdenar,
        ordenProductos: {
          id: null,
          name: null,
          price: "des",
        },
      };
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (b.price > a.price) {
          return -1;
        }
        return 0;
      });
      return {
        productosOrdenados: listadoOrdenar,
        ordenProductos: {
          id: null,
          name: null,
          price: "asc",
        },
      };
    }
  }
}
