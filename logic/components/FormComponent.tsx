import * as React from "react";

type AnyFormValue = Record<string, boolean | string | number>;

const FormComponent: (props: Record<string, unknown>) => React.ReactElement = (
  props: Record<string, unknown>
): React.ReactElement => {
  const [stateInput, setStateInput]: [
    string,
    React.Dispatch<string>
  ] = React.useState("");

  const [stateArea, setStateArea]: [
    string,
    React.Dispatch<string>
  ] = React.useState("");

  const [stateSelect, setStateSelect]: [
    string,
    React.Dispatch<string>
  ] = React.useState("");

  const [stateCheck, setStateCheck]: [
    boolean,
    React.Dispatch<boolean>
  ] = React.useState(false as boolean);

  const [stateRadioValue, setStateRadioValue]: [
    string,
    React.Dispatch<string>
  ] = React.useState("");

  const [stateRadio, setStateRadio]: [
    Record<string, boolean>,
    React.Dispatch<Record<string, boolean>>
  ] = React.useState({ radio1: false, radio2: false } as any);

  const [stateOtroRadioValue, setStateOtroRadioValue]: [
    string,
    React.Dispatch<string>
  ] = React.useState("");

  const [stateOtroRadio, setStateOtroRadio]: [
    Record<string, boolean>,
    React.Dispatch<Record<string, boolean>>
  ] = React.useState({ otroradio_1: false, otroradio_2: false } as any);

  function onChangeInput(event: React.SyntheticEvent): void {
    const theValue: string = (event.target as HTMLInputElement).value;
    //console.info(theValue);
    setStateInput(theValue);
  }

  function onChangeArea(event: React.SyntheticEvent): void {
    const theValue: string = (event.target as HTMLTextAreaElement).value;
    //console.info(theValue);
    setStateArea(theValue);
  }

  function onChangeSelect(event: React.SyntheticEvent): void {
    const theValue: string = (event.target as HTMLSelectElement).value;
    console.info(theValue);
    setStateSelect(theValue);
  }

  function onChangeCheck(event: React.SyntheticEvent): void {
    const theValue: boolean = (event.target as HTMLInputElement).checked;
    console.info(theValue);
    console.info(event.target);
    setStateCheck(theValue);
  }

  const [stateGeneric, setStateGeneric]: [
    AnyFormValue,
    React.Dispatch<AnyFormValue | ((data: AnyFormValue) => AnyFormValue)>
  ] = React.useState({ element1: "", element2: false } as any);

  function commonHandler(event: React.SyntheticEvent): void {
    if ("target" in event && "type" in event.target && "name" in event.target) {
      const name: string = event.target.name;
      let value: AnyFormValue;
      if ("checked" in event.target && event.target.type === "checkbox") {
        value = event.target.checked as boolean;
        console.info(value);
      } else if ("value" in event.target) {
        value = event.target.value;
      } else {
        return;
      }

      setStateGeneric((previous: AnyFormValue) => {
        const newState = JSON.parse(JSON.stringify(previous));
        Reflect.set(newState, name, value);
        return newState;
      });
    }
  }

  function onChangeRadio(event: React.SyntheticEvent): void {
    const theValue: string = (event.target as HTMLInputElement).value;
    setStateRadioValue(theValue);
    switch (theValue) {
      case "theRadio1":
        setStateRadio({ radio1: true, radio2: false });
        break;
      case "theRadio2":
        setStateRadio({ radio1: false, radio2: true });
        break;
      default:
        setStateRadio({ radio1: false, radio2: false });
        break;
    }
  }

  function onChangeOtroRadio(id: string, event: React.SyntheticEvent): void {
    const theValue: string = (event.target as HTMLInputElement).value;
    setStateOtroRadioValue(theValue);

    const newValue: Record<string, boolean> = {
      otroradio_1: false,
      otroradio_2: false
    };
    Reflect.set(newValue, id, true);
    setStateOtroRadio(newValue);
  }

  return (
    <div>
      <label htmlFor="_input_">Input</label>
      <input
        name="_input_"
        type="text"
        value={stateInput}
        onChange={onChangeInput}
      />

      <br />

      <label htmlFor="_area_">Area</label>
      <textarea name="_area_" value={stateArea} onChange={onChangeArea} />

      <br />

      <label htmlFor="_select_">Select</label>
      <select name="_select_" value={stateSelect} onChange={onChangeSelect}>
        <option value="uno">The number 1</option>
        <option value="dos">The number 2</option>
        <option value="tres">The number 3</option>
      </select>

      <br />

      <input
        name="_check_"
        type="checkbox"
        checked={stateCheck}
        onChange={onChangeCheck}
      />
      <label htmlFor="_check_">Un CheckBox</label>

      <div>
        <p>Radio selected is: {stateRadioValue}</p>
        <div>
          <input
            type="radio"
            id="radio_1"
            name="_radio_"
            value="theRadio1"
            checked={stateRadio.radio1}
            onChange={onChangeRadio}
          />
          <label htmlFor="_radio1_">Radio1 {`${stateRadio.radio1}`}</label>
        </div>

        <div>
          <input
            type="radio"
            id="radio_2"
            name="_radio_"
            value="theRadio2"
            checked={stateRadio.radio2}
            onChange={onChangeRadio}
          />
          <label htmlFor="_radio2_">Radio2 {`${stateRadio.radio2}`}</label>
        </div>
      </div>

      <div>
        <p>Radio selected is: {stateOtroRadioValue}</p>
        <div>
          <input
            type="radio"
            id="otroradio_1"
            name="_otroradio_"
            value="theOtroRadio1"
            checked={stateOtroRadio.radio1}
            onChange={onChangeOtroRadio.bind(null, "otroradio_1")}
          />
          <label htmlFor="_otroradio1_">
            OtroRadio1 {`${stateOtroRadio.otroradio_1}`}
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="otroradio_2"
            name="_otroradio_"
            value="theOtroRadio2"
            checked={stateOtroRadio.radio2}
            onChange={onChangeOtroRadio.bind(null, "otroradio_2")}
          />
          <label htmlFor="_otroradio2_">
            OtroRadio2 {`${stateOtroRadio.otroradio_2}`}
          </label>
        </div>
      </div>

      <div>
        <h2> Common handler</h2>
        <input
          name="element1"
          type="text"
          value={stateGeneric.element1 as string}
          onChange={commonHandler}
        />
        <input
          name="element2"
          type="checkbox"
          checked={stateGeneric.element2 as boolean}
          onChange={commonHandler}
        />
        ({`${stateGeneric.element2}`})
      </div>
    </div>
  );
};

export { FormComponent };
