import * as React from "react";

/* Se define como propiedad una funcion que recibe un elemento, en este caso, HTMLInputElement */

interface CustomTextInputProps {
  inputRef: (element: HTMLInputElement) => void;
}

const CustomTextInput: (props: CustomTextInputProps) => React.ReactElement = (
  props: CustomTextInputProps
) => {
  let inputHandledByMe: HTMLInputElement;
  const anotherMethod: (element: HTMLInputElement) => void = (
    element: HTMLInputElement
  ): void => {
    inputHandledByMe = element;
  };

  function click(): void {
    inputHandledByMe.value = "value from myself";
  }

  return (
    <div>
      <h3>CustomTextInput</h3>
      {/* la funcion es ejecutada aqui */}
      <label>Input controlled by parent</label>
      <input ref={props.inputRef} />
      <br />
      <br />
      <label>Input controlled by myself</label>
      <input ref={anotherMethod} />
      <button onClick={click}>Button in "Child"</button>
    </div>
  );
};

class RefsCallback extends React.Component {
  /* una "referencia" */

  private theRefToTheDomElement: HTMLInputElement;

  private theFunction(element: HTMLInputElement): void {
    const me: RefsCallback = this;

    /* cuando la funcion es ejecutada desde el componente hijo
     * asignamos el elemento de entrada a "nuestra" propiedad.
     * De esta manera ya podemos hacer uso de ese elemento del DOM
     */
    me.theRefToTheDomElement = element;
  }

  private handleClick(): void {
    const me: RefsCallback = this;
    me.theRefToTheDomElement.focus();
    me.theRefToTheDomElement.value = "hola mundo - wrote from parent";
  }

  public render() {
    const me: RefsCallback = this;
    return (
      <div
        style={{ border: "2px solid green", padding: "15px", margin: "5px" }}
      >
        <h1>Reference callback</h1>
        {/* la funcion se pasa como propiedad */}
        <button onClick={me.handleClick.bind(me)}>Button in "Parent"</button>
        <hr />
        <CustomTextInput inputRef={me.theFunction.bind(me)} />
      </div>
    );
  }
}

export { RefsCallback };
