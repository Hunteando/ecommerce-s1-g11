export default function functionOrdernarVentas(
  columna,
  ordenColumnas,
  setordenColumnas,
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
      setordenColumnas((ant) => {
        return {
          id: "des",
          date: null,
          total: null,
          idUser: null,
          mailUser: null,
          status: null,
          statusDelivery: null,
        };
      });
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
      setordenColumnas((ant) => {
        return {
          id: "asc",
          date: null,
          total: null,
          idUser: null,
          mailUser: null,
          status: null,
          statusDelivery: null,
        };
      });
    }
  } else if (columna === "date") {
    if (ordenColumnas.date === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (b.date < a.date) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: "des",
          total: null,
          idUser: null,
          mailUser: null,
          status: null,
          statusDelivery: null,
        };
      });
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.date > b.date) {
          return 1;
        }
        if (b.date > a.date) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: "asc",
          total: null,
          idUser: null,
          mailUser: null,
          status: null,
          statusDelivery: null,
          role: null,
        };
      });
    }
  } else if (columna === "total") {
    if (ordenColumnas.total === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.total < b.total) {
          return 1;
        }
        if (b.total < a.total) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: null,
          total: "des",
          idUser: null,
          mailUser: null,
          status: null,
          statusDelivery: null,
        };
      });
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.total > b.total) {
          return 1;
        }
        if (b.total > a.total) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: null,
          total: "asc",
          idUser: null,
          mailUser: null,
          status: null,
          statusDelivery: null,
        };
      });
    }
  } else if (columna === "idUser") {
    if (ordenColumnas.idUser === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.idUser < b.idUser) {
          return 1;
        }
        if (b.idUser < a.idUser) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: null,
          total: null,
          idUser: "des",
          mailUser: null,
          status: null,
          statusDelivery: null,
        };
      });
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.idUser > b.idUser) {
          return 1;
        }
        if (b.idUser > a.idUser) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: null,
          total: null,
          idUser: "asc",
          mailUser: null,
          status: null,
          statusDelivery: null,
        };
      });
    }
  } else if (columna === "mailUser") {
    if (ordenColumnas.mailUser === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.mailUser < b.mailUser) {
          return 1;
        }
        if (b.mailUser < a.mailUser) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: null,
          total: null,
          idUser: null,
          mailUser: "des",
          status: null,
          statusDelivery: null,
        };
      });
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.mailUser > b.mailUser) {
          return 1;
        }
        if (b.mailUser > a.mailUser) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: null,
          total: null,
          idUser: null,
          mailUser: "asc",
          status: null,
          statusDelivery: null,
        };
      });
    }
  } else if (columna === "status") {
    if (ordenColumnas.status === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.status < b.status) {
          return 1;
        }
        if (b.status < a.status) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: null,
          total: null,
          idUser: null,
          mailUser: null,
          status: "des",
          statusDelivery: null,
        };
      });
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.status > b.status) {
          return 1;
        }
        if (b.status > a.status) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: null,
          total: null,
          idUser: null,
          mailUser: null,
          status: "asc",
          statusDelivery: null,
        };
      });
    }
  } else if (columna === "statusDelivery") {
    if (ordenColumnas.statusDelivery === "asc") {
      listadoOrdenar.sort((a, b) => {
        if (a.statusDelivery < b.statusDelivery) {
          return 1;
        }
        if (b.statusDelivery < a.statusDelivery) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: null,
          total: null,
          idUser: null,
          mailUser: null,
          status: null,
          statusDelivery: "des",
        };
      });
    } else {
      listadoOrdenar.sort(function (a, b) {
        if (a.statusDelivery > b.statusDelivery) {
          return 1;
        }
        if (b.statusDelivery > a.statusDelivery) {
          return -1;
        }
        return 0;
      });
      setordenColumnas((ant) => {
        return {
          id: null,
          date: null,
          total: null,
          idUser: null,
          mailUser: null,
          status: null,
          statusDelivery: "asc",
        };
      });
    }
  }
}