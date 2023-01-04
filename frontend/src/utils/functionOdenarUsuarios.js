export default function functionOrdernarUsuarios(
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
        ordenColumnas: {
          id: "des",
          username: null,
          email: null,
          role: null,
        },
        listadoOrdenar: listadoOrdenar,
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
        ordenColumnas: {
          id: "asc",
          username: null,
          email: null,
          role: null,
        },
        listadoOrdenar: listadoOrdenar,
      };
    }
  } else if (columna === "username") {
    if (ordenColumnas.username === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.username < b.username) {
          return 1;
        }
        if (b.username < a.username) {
          return -1;
        }
        return 0;
      });
      return {
        ordenColumnas: {
          id: null,
          username: "des",
          email: null,
          role: null,
        },
        listadoOrdenar: listadoOrdenar,
      };
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.username > b.username) {
          return 1;
        }
        if (b.username > a.username) {
          return -1;
        }
        return 0;
      });
      return {
        ordenColumnas: {
          id: null,
          username: "asc",
          email: null,
          role: null,
        },
        listadoOrdenar: listadoOrdenar,
      };
    }
  } else if (columna === "email") {
    if (ordenColumnas.email === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.email < b.email) {
          return 1;
        }
        if (b.email < a.email) {
          return -1;
        }
        return 0;
      });
      return {
        ordenColumnas: {
          id: null,
          username: null,
          email: "des",
          role: null,
        },
        listadoOrdenar: listadoOrdenar,
      };
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.email > b.email) {
          return 1;
        }
        if (b.email > a.email) {
          return -1;
        }
        return 0;
      });
      return {
        ordenColumnas: {
          id: null,
          username: null,
          email: "asc",
          role: null,
        },
        listadoOrdenar: listadoOrdenar,
      };
    }
  } else if (columna === "role") {
    if (ordenColumnas.rol === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.role < b.role) {
          return 1;
        }
        if (b.role < a.role) {
          return -1;
        }
        return 0;
      });
      return {
        ordenColumnas: {
          id: null,
          username: null,
          email: null,
          role: "des",
        },
        listadoOrdenar: listadoOrdenar,
      };
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.role > b.role) {
          return 1;
        }
        if (b.role > a.role) {
          return -1;
        }
        return 0;
      });
      return {
        ordenColumnas: {
          id: null,
          username: null,
          email: null,
          role: "asc",
        },
        listadoOrdenar: listadoOrdenar,
      };
    }
  }
}
