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
import { AdvancedHooksComponent } from "./AdvancedHooksComponent";
import { RefComponent } from "./RefComponent.class";
import { UseRefComponent } from "./UseRefComponent";
import { RefsCallback } from "./RefsCallback.class";
import { ForwardRef } from "./ForwardRef";
import { FormComponent } from "./FormComponent";
import { FragmentComponent } from "./FragmentComponent";
import { LinksComponent } from "./routes/LinksComponent";
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
      <p>Hello compiler '{props.compiler}' and framework '{props.framework}' from Function Component</p>
      <p>Para ejemplo de uso de <strong>Context</strong> utilizar AppComponent.class.tsx (desde index.tsx)</p>


      <div>
        <h2>Links</h2>
        <ul>
        <li><Link to="/ruta1/bla">ruta1/bla (enruta)</Link></li>
        <li><Link to="/ruta1/:aParam">ruta1/hi (enruta)</Link></li>
        <li><Link to="/ruta1">ruta1 (enruta)</Link></li>
        <li><Link to="/ruta2/bla">ruta2/bla (no enruta)</Link></li>
        <li><Link to="/ruta2">ruta2 (enruta)</Link></li>
        </ul>
      
        <h2>Real Links</h2>
        <ul>
        <li><Link to="/conditional">Conditional</Link></li>
        <li><Link to="/listas">Listas</Link></li>
        <li><Link to="/estado">Estado</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/hooks">Hooks</Link></li>
        <li><Link to="/refs">Referencias</Link></li>
        <li><Link to="/exposerefs">Exposición de Referencias</Link></li>
        <li><Link to="/forms">Formularios</Link></li>
        <li><Link to="/fragmentos">Fragmentos</Link></li>
        <li><Link to="/router">React router</Link></li>
        <li><Link to="/advanced-hooks">Advanced Hooks</Link></li>
        </ul>

      </div>

      <Switch>

          <Route path="/ruta1">
            <LinksComponent/>
            <Ruta1Component/>
          </Route>
          <Route exact path="/ruta2">
            <LinksComponent/>
            <Ruta2Component/>
          </Route>

          <Route exact path="/conditional">
            <ConditionalComponent 
              name="John"
              showName={true}
              surname="Doe"
              showSurname={true}
              adress="Main Street"
              showAdress={true}
            />
          </Route>
          <Route exact path="/listas">
            <ListComponent names={listNames} />
          </Route>
          <Route exact path="/estado">
            <StateComponent direction="upa" />
          </Route>
          <Route exact path="/eventos" component={EventsComponent} />
          <Route exact path="/hooks" component={HooksComponent} />
          <Route exact path="/refs">
            <button onClick={() => setContador(contador + 1)}>
            Count Click!! {contador}
          </button>
            <RefComponent />
            <hr />
            <UseRefComponent />
          </Route>
          <Route exact path="/exposerefs">            
            <RefsCallback />
            <hr />
            <ForwardRef />
          </Route>
          <Route exact path="/forms" component={FormComponent} />
          <Route exact path="/fragmentos" component={FragmentComponent} />
          <Route exact path="/router" component={LinksComponent} />
          <Route exact path="/advanced-hooks" component={AdvancedHooksComponent} />

      </Switch>

    </div>
  );
};

export { AppComponent };
