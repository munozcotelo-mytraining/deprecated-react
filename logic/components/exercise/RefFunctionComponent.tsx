import * as React from "react";

import { RefClassComponent } from "./RefClassComponent.class";

const RefFunctionComponent: (props: {}) => React.ReactElement = (props: {}): React.ReactElement => {
  let theRef: React.MutableRefObject<RefClassComponent> = React.useRef<
    RefClassComponent
  >(null);

  function scrollUp(): void {
    theRef.current.scrollUp();
  }

  function scrollDown(): void {
    theRef.current.scrollDown();
  }

  return (
    <div>
      <button onClick={scrollUp}>Up desde el padre</button>
      <button onClick={scrollDown}>Down desde el padre</button>
      <hr />
      <RefClassComponent ref={theRef} />
    </div>
  );
};

export { RefFunctionComponent };
