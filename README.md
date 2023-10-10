**TEORIA DE REACT**

_Para crear un proyecto de react_

Para crear un proyecto en react se usa Vite (hay muchos mas), se coloca:
**npm create vite**, despues te pide el nombre del proyecto, te pide elegir si usar react
u o otro framework, si usar javascript o typesript

_Componentes_
Los componentes son reutilizables, _todo en react es un componente_, hay dos maneras de crear un componente

Componente de Clase, no se usa tanto como antes

```javascript
class Greeting extends PureComponent {
  render() {
    return <h1>¡Hola Mundo!</h1>;
  }
}
```

Componente Funcional

```javascript
function MiComponenteFuncional() {
  return (
    <div>
      <h1>Hola, soy un componente funcional de React</h1>
    </div>
  );
}
```

Dentro de los componente se puede mezclar codigo javascript con html, el codigo javascript tiene que ir entre llaves, para que react lo identifique

**PROPS**
Las props son propiedades que se pasan de componentes padre a hijos, la idea es que sean lo mas preciso, se puede mandar todas las props que uno quiera, mientras que el componente hijo lo necesite !OJO A ESO¡

```javascript
//se pasa la propiedad del componente padre al hijo
<PrimerComponente titulo="viene por props" />;

// recibe las propiedades del padre, se ocupa props o se puede usar destructuracion
export default function PrimerComponente(props) {
  console.log(props);
  return <div>Props: {props}</div>;
}
```

_EVENTOS EN REACT_
Es para darle interractividad a tus paginas
Esto seria un evento en react una funcion que hace algo al hacer click, obvio hay muchisimos eventos.
Tambien se puede mandar algun argumento, para que sea mas dinamico

```javascript
const Buton = () => {
  return (
    <button
      onClick={() => {
        console.log("soy un boton");
      }}
    >
      Boton
    </button>
  );
};
```

esto seria pasando argumentos al evento

```javascript
export default function Contador({ valor }) {
  const handleClick = () => {
    valor += 1;
    console.log(valor);
  };
  return (
    <div>
      Contador
      <p>{valor}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
```

Si solo hay que pasar un solo argumento se coloca el nombre de la funcion o argumento

```javascript
onClick = { handleClick };
```

Si lleva mas argumentos se debe colocar de la otra forma, un ejemplo

```javascript
onClick={(event, e) => {
        handleClick(event, e);
      }}
```

**USESTATE LOS ESTADOS (MUYIMPORTANTE)**
Sirve para re renderizar un componente el ejemplo mas comun es el contador
lo que hay que tener en cuenta es usar la funcion que va a ir actualizando el estado, en este caso es el setContador

```javacript
import { useState } from "react";

export default function Contador({ valor }) {
  const [contador, setContador] = useState(valor);
  const handleClick = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      Contador
      <p>{contador}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
```

**CONDICIONALES O TERNARIOS**
Son una condicion que dado su analisis evalua si es true o false la instruccion a evaluar. Los ternarios es una manera de escribir mas corta, tienen el mismo fin.
visto ? "✔" : "❌": esto quiere decir que si existe "visto" se muestra la tilde, caso contrario se muestra la equis

```javascript
const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre} {visto ? "✔" : "❌"}
    </li>
  );
};
export default function ListadoApp() {
  return (
    <div>
      <h2>Lista</h2>
      <ol>
        <Items nombre="Instalaciones necesarias" visto={true} />
        <Items nombre="Uso de vite" visto={false} />
      </ol>
    </div>
  );
}
```

**FORMULARIOS**
Es bastente importe esto, se usa todo el tiempo, validaciones, llenar formulario de registro, filtrar por busqueda, todo

Este ejemplo es basico

```javascript
import { useState } from "react";

function AgregarTarea() {
  const [inputValue, setInputValue] = useState(""); //inicia vacio
  // funcion que captura lo que se escribe en el input
  const inputChange = (evento) => {
    //se captura lo del input, y se actualiza el estado del componente
    setInputValue(evento.target.value);
    console.log(inputValue);
  };
  //envia el formulario
  const onSubmit = (evento) => {
    evento.preventDefault();
    console.log(inputValue);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="ingrese tarea nueva"
          //lo que uno ingresa
          value={inputValue}
          //toma el valor ingresado
          onChange={inputChange}
        />
      </form>
    </div>
  );
}
```

**COMUNICACION ENTRE COMPONENTES (HIJO A PADRE)**
Aca es donde el hijo recibe infomacion del padre y el hijo devuelve al padre con informacion

```javascript
// el componente padre le envia info al hijo
<AgregarTarea agregarTarea={onAgregarTarea} />
```

ESTA FUNCION ES DEL COMPONENTE PADRE

```javascript
// Recibe el input del hijo por parametro
const onAgregarTarea = (val) => {
  //validemos que no este vacio, o que no se repita
  if (!val) {
    return alert("Campo vacio ");
  }
  //configuramos el envio
  const envio = {
    nombre: val,
    visto: false,
  };
  // ocupamos la funcion que actualiza el esto
  setArreglo([...arreglo, envio]);
  console.log(val);
};
```

El hijo recibe por parametro la info del padre, ocpamos la info recibida del padre para enviar la info del hijo al padre

```javascript
const onSubmit = (evento) => {
  evento.preventDefault();
  agregarTarea(inputValue);
};
```

La logica siempre va en el padre, ¿POR QUE? Porque el hijo manda la info y el padre se encarga de que es lo que tiene que hacer con esa info que recibe del hijo

**USEEFFECT**
Un useEffect en React es una función que te permite realizar acciones después de que un componente se haya renderizado en la pantalla y también te permite manejar la actualización del componente cuando sus datos cambian

```javascript
import React, { useState, useEffect } from "react";

function Contador() {
  // Estado para almacenar el valor del contador
  const [contador, setContador] = useState(0);

  // useEffect se ejecutará después del montaje inicial y cada vez que contador cambie
  useEffect(() => {
    // Mostrar un mensaje en la consola cada vez que contador cambie
    console.log(`El contador se actualizó a: ${contador}`);
  }, [contador]);

  // Función para aumentar el contador
  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={aumentarContador}>Aumentar</button>
    </div>
  );
}
```

**FETCH**
Es para hacer solicitudes HTTP( GET, POST, DELETE, PUT, etc), desde un navegador a un servidor

```javascript
// URL de la API a la que vamos a hacer la solicitud
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

// Haciendo la solicitud GET usando fetch
fetch(apiUrl)
  .then((response) => {
    // Verificar si la solicitud fue exitosa (código de respuesta 200)
    if (!response.ok) {
      throw new Error(`La solicitud falló con código ${response.status}`);
    }
    // Parsear la respuesta como JSON
    return response.json();
  })
  .then((data) => {
    // Hacer algo con los datos obtenidos
    console.log("Datos recibidos:", data);
  })
  .catch((error) => {
    // Manejar errores en caso de que la solicitud falle
    console.error("Error:", error);
  });
```

**CUSTOMHOOK**
Con esto podemos crear nuestros propios hook, nada mas. Ayuda a reutilizar codigo, la idea es hacer en un archivo js la logica y que en un archivo jsx se importe esa logica

**FORMULARIOS CON HOOKS**
Esto seria el codigo sin mucha logica de un formulario con CustomHook. La idea de los CustoomHook es apartar la logica de los componentes, para que no sea tan largo el codigo

```javascript
import useFormHook from "./CustomHook/useFormHook";

export default function FormularioConHooks() {
  // esto mando al customHook, para iniciarlo vacio, o tambien reutilizar en otro proyecto
  const formInitial = {
    user: "",
    email: "",
    password: "",
  };
  // customHook. Osea la logica esta fuera del componente
  const { form, onChange } = useFormHook(formInitial);
  //destructuring de lo que recibo de form
  const { user, email, password } = form;
  // esto envia los datos ingresados del form
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="user">User</label>
          <input type="text" name="user" value={user} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
```

Codigo de la logica del formulario

```javascript
import { useState } from "react";
// recibo por parametro los input del formulario
function useFormHook(formInitial = {}) {
  //lo coloco en un estado
  const [form, setForm] = useState(formInitial);

  // esto camptura los cambios del input
  //en vez de poner event u otra cosa, destructuro y ocupo el target, para ser mas corto nada mas
  const onChange = ({ target }) => {
    // por medio del destructuring, capturo de la propiedad name de todos los input y obvio el valor
    const { name, value } = target;
    //actualizo el estado del formulario, agarrando todo lo anterior y a la propiedad name del input con su respectivo valor
    setForm({
      ...form,
      [name]: value,
    });
  };
  // retorno en un objeto el estado del formulario y el evento que captura los cambios del input
  return {
    form,
    onChange,
  };
}

export default useFormHook;
```

**FETCH CON HOOK**

Esto seria la logica

```javascript
import { useEffect } from "react";
import { useState } from "react";

// recibo la url por parametro
export default function useFetch(url) {
  // creo un estado donde voy a almacenar los datos pedidos por una peticion HTTP
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });
  // lo destructuro para poder usar
  const { data, isLoading, errors } = state;
  //creo la peticion asincrona (si es asincrona va dentro de un useEffect)
  const getFetch = async () => {
    if (!url) return "No hay url";
    // si sale todo bien, se muestra lo pedido
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data,
        isLoading: false,
        errors: null,
      });
      // si sale mal me muestra el error
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: "El error: " + error,
      });
    }
  };
  // para ejecutar la peticion
  useEffect(
    () => {
      getFetch();
    },
    [url] //escucha el cambio de la url
  );
  // retorno un objeto, de los datos, el cargando y el error
  return {
    data,
    isLoading,
    errors,
  };
}
```

Esto seria el componente

```javascript
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
```

**USEREF**
Sirve para hacer referencia de un archivo jsx a una parte de la logica o elemento del DOM
En fin no le encontre funcionalidad asi que no uso

**UseMemo**
Sirve para mostrar y ocultar codigo cuando es necesario, simplemente para que la pagina no quede tan pesada al cargar

```javascript
(listaDeNumeros) =>
  useMemo(() => {
    console.log("Calculando");
    return listaDeNumeros.reduce((a, b) => a * b);
  }, [listaDeNumeros]);
```

**UseCallBack**
