import * as debug from "debug";
import * as React from "react";
import * as uuid from "uuid";

import { Switch }    from "react-router-dom";
import { Route }     from "react-router-dom";
import { Link }     from "react-router-dom";


import { INameDTO } from "./../../dto/INameDTO.class";

import { ConditionalComponent } from "./ConditionalComponent";
import { ListComponent } from "./ListComponent";
import { StateComponent } from "./StateComponent.class";
import { EventsComponent } from "./EventsComponent.class";
import { HooksComponent } from "./HooksComponent";
import { RefComponent } from "./RefComponent.class";
import { UseRefComponent } from "./UseRefComponent";
import { RefsCallback } from "./RefsCallback.class";
import { ForwardRef } from "./ForwardRef";
import { FormComponent } from "./FormComponent";
import { FragmentComponent } from "./FragmentComponent";

import { Ruta1Component } from "./routes/Ruta1Component";
import { Ruta2Component } from "./routes/Ruta2Component";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("AppComponent");

interface IAppComponentProps {
  compiler?: string;
  framework?: string;
}

interface IDynContextDTO {
  user : string;
  userToggle : () => {};
}

const AppComponent: (props: IAppComponentProps) => React.ReactElement = (
  props: IAppComponentProps
) => {
  /* Body */

  const [contador, setContador]: [
    number,
    React.Dispatch<number>
  ] = React.useState<number>(100);

  function alvaro() {
    if ( dynContext === "first user value") {

        setDynContext
    }else {
    
    }
  }

  const [dynContext, setDynContext]: [
    IDynContextDTO,
    React.Dispatch<IDynContextDTO>
  ] = React.useState<IDynContextDTO>({
    user: "firt user value",
    userToggle: () => { console.info("aalsj"); return "another value" },
    });

  mainDebugger("AppComponent function");

  const listNames: INameDTO[] = [
    { id: uuid.v4(), name: "Jon" },
    { id: uuid.v4(), name: "Paul" },
    { id: uuid.v4(), name: "Michael" }
  ];

  return (
    <div>
      {/*Hello compiler '{props.compiler}' and framework '{props.framework}' from
      Function Component
      <hr />
      <ConditionalComponent
        name="John"
        showName={true}
        surname="Doe"
        showSurname={true}
        adress="Main Street"
        showAdress={true}
      />
      <hr />
      <ListComponent names={listNames} />
      <hr />
      <StateComponent direction="upa" />
      <hr />
      <EventsComponent />
      <hr />
      <HooksComponent />
      <hr />
      <button onClick={() => setContador(contador + 1)}>
        Count Click!! {contador}
      </button>
      <RefComponent />
      <hr />
      <UseRefComponent />
      <hr />
      <RefsCallback />
      <hr />
      <ForwardRef />
      <hr />
      <FormComponent />      
      <FragmentComponent />      
      */}


      <div>
        <h2>Links</h2>
        <ul>
        <li><Link to="/ruta1/bla">ruta1/bla (enruta)</Link></li>
        <li><Link to="/ruta1/:aParam">ruta1/hi (enruta)</Link></li>
        <li><Link to="/ruta1">ruta1 (enruta)</Link></li>
        <li><Link to="/ruta2/bla">ruta2/bla (no enruta)</Link></li>
        <li><Link to="/ruta2">ruta2 (enruta)</Link></li>
        </ul>

      </div>

      <Switch>

          <Route path="/ruta1">
            <Ruta1Component/>
          </Route>

          <Route exact path="/ruta2" component={Ruta2Component} />

      </Switch>

    </div>
  );
};

export { AppComponent };
