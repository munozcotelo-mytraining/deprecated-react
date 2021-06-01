import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("AdvancedHooksComponent");

enum ArithmeticEnum {
  ADD = "ADD",
  SUB = "SUB"
}

interface MyStateDTO {
  contador : number;
}

const myState : MyStateDTO = {
  contador : 0,
};

const AdvancedHooksComponent: (props: {}) => React.ReactElement = (props: {}) => {
  
  function arithmethicReducer( state : MyStateDTO, operation : ArithmeticEnum ) : MyStateDTO {    
    
    if ( operation === ArithmeticEnum.ADD ) {
      return { contador : state.contador + 1 };
    } else {
      return { contador : state.contador - 1 };
    }

  }

  const [ theState, theStateReducer ] : [ MyStateDTO, React.Dispatch<ArithmeticEnum>] = React.useReducer( arithmethicReducer, myState );

  /* ---- */

  function granCalculo1( a: number, b: number ) : number {
    console.info( "granCalculo1");
    return a + b;
  }

  function granCalculo2( a: number, b: number ) : number {
    console.info( "granCalculo2");
    return a + b;
  }

  const noMemorizado : number = granCalculo1( 1, 2 );
  const memorizado : number = React.useMemo( () => granCalculo2(1, 2), []);

  /* ---- */

  const [dato1, setDato1]: [number, React.Dispatch<number | ( ( data : number ) => number )>] = React.useState<number>(0);
  const [dato2, setDato2]: [number, React.Dispatch<number | ( ( data : number ) => number )>] = React.useState<number>(0);

  const methodNoMemorizado : () => number = () => {
    return setDato1( ( count : number ) => count + 1 );
  };

  const methodMemorizado : ( ) => number = React.useCallback( () => {
    return setDato2( ( count : number ) => count + 1 );
  }, []);

  React.useEffect( () => {
    /* OJO -> bucle infinito. El renderizado hace cambiar dato1. Como dato1 cambia el componente se renderiza. Cuando el componente se renderiza crea
     * un nuevo "methodNoMemorizado". Como "methodNoMemorizado" ha cambiado se ejecuta el hook, que cambia el valor de "dato1"... y vuelva a empezar
     * setDato1( ( count : number ) => count + 1 );
     */
    console.info( "Todo el rato");
  }, [ methodNoMemorizado]);

  React.useEffect( () => {
    console.info( "Solo una vez");
  }, [ methodMemorizado]);

  return (
    <div>
      
      <h1>Advanced Hooks</h1>
      
        <div>
          <h2>useReducer</h2>
          <p>Contador: {theState.contador}</p>
          <br />
          <button onClick={ () => theStateReducer( ArithmeticEnum.ADD) }>Addition</button>
          <br />
          <button onClick={ () => theStateReducer( ArithmeticEnum.SUB) }>Substraction</button>
          
          <h2>useMemo</h2>
          <p>En cada renderizado la funcion granCalculo1 se ejecuta para recalcular el valor de "noMemorizado"</p>
          <p>Sin embargo granCalculo2 <strong>sólo se ejecuta la primera vez</strong></p>
          <p>Sin memoria {noMemorizado}</p>
          <p>Con memoria {memorizado}</p>

          <h2>useCallback</h2>
          <p>En cada renderizado las funciones, asiganciones... se crean cada vez</p>
          <p>En este ejemplo añadiendo un hook de efecto sobre las funciones se puede ver que:</p>
          <p>Cuando el hook de efecto depende del método no memorizdo, <strong>se escribe por consola cada vez</strong></p>
          <p>Cuando el hook de efecto depende del método Memorizado, <strong>se escribe por consola UNA SOLA vez</strong></p>
          <p>¡¡OJO con esto. Si en el hook que depende del método "no memorizado" cambiamos el valor de "dato1" <strong>entrariamos en un bucle infinito</strong></p>
          <p>dato1 {dato1} <button onClick={ () => methodNoMemorizado() }>Increment dato1</button> </p>
          <p>dato2 {dato2} <button onClick={ () => methodMemorizado() }>Increment dato2</button></p>

      </div>

    </div>
  );
};

export { AdvancedHooksComponent };