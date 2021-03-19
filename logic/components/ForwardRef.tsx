import * as React from "react";

interface CustomButtonProps {
  inputRef: React.MutableRefObject<HTMLButtonElement>;
}

const CustomButton: (props: CustomButtonProps) => React.ReactElement = (
  props: CustomButtonProps
) => {
  const [contador, setContador]: [
    number,
    React.Dispatch<number>
  ] = React.useState<number>(0);

  function click() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Contador en Hijo: {contador}</p>
      <button onClick={click} ref={props.inputRef}>
        Click en Hijo
      </button>
    </div>
  );
};

const ForwardRef: (props: {}) => React.ReactElement = (props: {}) => {
  const [contador, setContador]: [
    number,
    React.Dispatch<number | ((data: number) => number)>
  ] = React.useState<number>(0);

  const myReference: React.MutableRefObject<HTMLButtonElement> = React.useRef<HTMLButtonElement>(
    null
  );

  React.useEffect(() => {}, [contador]);

  function click() {
    setContador((previous: number) => {
      setTimeout(() => {
        if ((previous + 1) % 5 === 0) {
          myReference.current.click();
        }
      });
      return previous + 1;
    });
  }

  return (
    <div style={{ border: "2px solid orange", padding: "15px", margin: "5px" }}>
      <p>Contador en padre: {contador}</p>
      <button onClick={click}>Click en Padre</button>
      <hr />
      <CustomButton inputRef={myReference} />
    </div>
  );
};

export { ForwardRef };
