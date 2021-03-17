import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("ExerciseExerciseHooksComponent");

interface ExerciseHooksComponentProps {
  theProperty: string;
}

const ExerciseHooksComponent: (
  props: ExerciseHooksComponentProps
) => React.ReactElement = (props: ExerciseHooksComponentProps) => {
  console.info(
    "=======>Esto se repinta cada vez que el renderizado cambia<======="
  );

  const [contador, setContador]: [
    number,
    React.Dispatch<number>
  ] = React.useState<number>(0);

  const [cambioPropiedad, setCambioPropiedad]: [
    boolean,
    React.Dispatch<boolean>
  ] = React.useState<boolean>(false);

  const [cambioAlgo, setCambioAlgo]: [
    boolean,
    React.Dispatch<boolean>
  ] = React.useState<boolean>(false);

  React.useEffect(() => {
    mainDebugger(`Esta la primera vez. La propiedad es ${props.theProperty}`);
  }, []);

  React.useEffect(() => {
    mainDebugger(
      `***** La propiedad ha cambiado ${props.theProperty} *********`
    );
    setCambioPropiedad(true);
    setTimeout(() => {
      setCambioPropiedad(false);
    }, 2500);
  }, [props.theProperty]);

  React.useEffect(() => {
    mainDebugger(`***** La propiedad o el contador han cambiado`);
    setCambioAlgo(true);
    setTimeout(() => {
      setCambioAlgo(false);
    }, 2500);
  }, [props.theProperty, contador]);

  function handleClickContador(): void {
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Hooks Exercise</h1>

      {cambioPropiedad === true ? (
        <div>
          <p>***</p>
          <p>La propiedad ha cambiado {props.theProperty}</p>
          <p>***</p>
        </div>
      ) : null}

      <p>
        Contador: {contador}{" "}
        <button onClick={handleClickContador}>Click contador</button>
      </p>
      <p>Propiedad {props.theProperty}</p>

      {cambioAlgo === true ? (
        <div>
          <p>***</p>
          <p>La propiedad o el contador han cambiado</p>
          <p>***</p>
        </div>
      ) : null}
    </div>
  );
};

export { ExerciseHooksComponent };
