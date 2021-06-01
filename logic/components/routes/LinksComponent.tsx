import * as React from "react";
import { Link }   from "react-router-dom";

const LinksComponent: (props: {}) => React.ReactElement = (
  props: {}
) => {

  return (
    <div>
      
        <h2>Links</h2>
        <ul>
        <li><Link to="/ruta1/bla">ruta1/bla (enruta)</Link></li>
        <li><Link to="/ruta1/:aParam">ruta1/hi (enruta)</Link></li>
        <li><Link to="/ruta1">ruta1 (enruta)</Link></li>        
        <li><Link to="/ruta2">ruta2 (enruta)</Link></li>
        <li><Link to="/ruta2/bla">ruta2/bla (no enruta)</Link></li>
        </ul> 

    </div>

  );
};

export { LinksComponent };