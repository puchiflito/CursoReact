// importo la logica osea un customhook
import useFetch from "./CustomHook/useFetch";

export default function FetchConHook() {
  // destructuro los datos del customhook para usar, y envio por parametro la url para solicitar datos
  const { data, isLoading, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      {
        // una logica usando ternario que mientras este buscando lo pedido, muestra cargando, si hay error muestra el error. Sino muestra la tabla con el pedido exitoso
        // hago un mapeo para mostrar todos los datos
      }
      FetchConHook
      <h2>Lista de Usuarios</h2>
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : errors ? (
        <p>Hay un error: {errors}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>webSite</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <th>{user.name}</th>
                  <th>{user.email}</th>
                  <th>{user.website}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
