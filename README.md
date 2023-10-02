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
