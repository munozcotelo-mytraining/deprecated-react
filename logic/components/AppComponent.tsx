import * as debug from "debug";
import * as React from "react";
import * as uuid from "uuid";

import { INameDTO } from "./../../dto/INameDTO.class";

import { ConditionalComponent } from "./ConditionalComponent";
import { ListComponent } from "./ListComponent";
import { StateComponent } from "./StateComponent.class";
import { EventsComponent } from "./EventsComponent.class";
import { HooksComponent } from "./HooksComponent";
import { ExerciseHooksComponent } from "./ExerciseHooksComponent";
import { CleanHookComponent } from "./CleanHookComponent";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("AppComponent");

interface IAppComponentProps {
  compiler?: string;
  framework?: string;
}

const AppComponent: (props: IAppComponentProps) => React.ReactElement = (
  props: IAppComponentProps
) => {
  /* Body */

  mainDebugger("AppComponent function");

  const listNames: INameDTO[] = [
    { id: uuid.v4(), name: "Jon" },
    { id: uuid.v4(), name: "Paul" },
    { id: uuid.v4(), name: "Michael" }
  ];

  const [property, setProperty]: [
    string,
    React.Dispatch<string>
  ] = React.useState("A");

  const [hideShow, setHideShow]: [
    number,
    React.Dispatch<number>
  ] = React.useState(0);

  function propertyClickA(): void {
    setProperty("A");
  }

  function propertyClickB(): void {
    setProperty("B");
  }

  function hideShowClick(): void {
    setHideShow(hideShow + 1);
  }

  return (
    <div>
      {/*Hello compiler '{props.compiler}' and framework '{props.framework}' from*/}
      {/*Function Component*/}
      {/*<hr />*/}
      {/*<ConditionalComponent
        name="John"
        showName={true}
        surname="Doe"
        showSurname={true}
        adress="Main Street"
        showAdress={true}
      />*/}
      {/*<hr />*/}
      {/*<ListComponent names={listNames} />*/}
      {/*<hr />*/}
      {/*<StateComponent direction="upa" />*/}
      {/*<hr />*/}
      {/*<EventsComponent />*/}
      {/*<hr />*/}
      {/*<HooksComponent />*/}
      {/*<hr />*/}

      <button onClick={propertyClickA}>Set 'A'</button>
      <button onClick={propertyClickB}>Set 'B'</button>

      <ExerciseHooksComponent theProperty={property} />
      <hr />

      <button onClick={hideShowClick}>Hide/Show</button>
      {hideShow % 2 === 0 ? <CleanHookComponent /> : null}

      <hr />
    </div>
  );
};

export { AppComponent };
