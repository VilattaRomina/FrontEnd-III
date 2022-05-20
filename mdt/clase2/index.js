const enStock = ["Manzana", "Pera", "Naranja", "Banana", "Kiwi"];

      const enFalta = ["Durazno", "Cereza", "Anana"];

      let Stock = () => {
        return (document.getElementById("root").innerHTML = (
          <ul>
            {enStock.map((producto) => (
              <li>{producto}</li>
            ))}
          </ul>
        ));
      };
      
      let Faltantes = () => {
        return (document.getElementById("root").innerHTML = (
          <ul>
            {enFalta.map((producto) => (
              <li>{producto}</li>
            ))}
          </ul>
        ));
      };

      ReactDOM.render(
        <div>
          <h1>Lista de Productos en stock:</h1>
          <Stock />
          <h2>Productos en falta:</h2>
          <Faltantes />
        </div>,
        document.getElementById("root")
      );