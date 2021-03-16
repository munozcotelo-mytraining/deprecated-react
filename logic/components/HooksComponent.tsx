import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("HooksComponent");

const HooksComponent: (props: {}) => React.ReactElement = (props: {}) => {
  const incremento: number = 10;

  const [contador, setContador]: [
    number,
    React.Dispatch<number>
  ] = React.useState<number>(100);

  const [suma, setSuma]: [number, React.Dispatch<number>] = React.useState<
    number
  >(0);

  const [clickEn, setClickEn]: [
    string,
    React.Dispatch<string>
  ] = React.useState<string>("nada");

  React.useEffect(() => {
    mainDebugger("Me renderizo por cualquier cosa");
  });

  React.useEffect(() => {
    mainDebugger("Me renderizo SOLO la primera vez");
  }, []);

  React.useEffect(() => {
    mainDebugger("Me renderizo cuando cambia la 'suma'");
    setClickEn("suma");
  }, [suma]);

  React.useEffect(() => {
    mainDebugger("Me renderizo cuando cambia la 'contador'");
    setClickEn("contador");
  }, [contador]);

  React.useEffect(() => {
    mainDebugger("Me renderizo cuando cambia el 'contador' o la 'suma'");
  }, [contador, suma]);

  function handleClickContador() {
    setContador(contador + 1);
  }

  function handleClickSuma() {
    setSuma(suma + incremento);
  }

  return (
    <div>
      <h1>Hooks</h1>

      <p>Contador: {contador}</p>
      <p>Suma: {suma}</p>
      <p>Has hecho click en... {clickEn}</p>

      <br />
      <button onClick={handleClickContador}>Click contador</button>
      <br />
      <button onClick={handleClickSuma}>Click suma</button>
    </div>
  );
};

export { HooksComponent };
