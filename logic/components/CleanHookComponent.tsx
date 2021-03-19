import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("CleanHookComponent");

const CleanHookComponent: (props: {}) => React.ReactElement = (props: {}) => {
  const [contadorInterval, setContadorInterval]: [
    number,
    React.Dispatch<number | ((data: number) => number)>
  ] = React.useState<number>(0);

  React.useEffect(() => {
    const theInterval: number = setInterval(() => {
      setContadorInterval((previous: number) => {
        return previous + 1;
      });
    }, 2000);

    return () => {
      clearInterval(theInterval);
    };
  }, []);

  return (
    <div>
      <h1>Clean Hooks</h1>

      <p>contadorInterval: {contadorInterval}</p>
    </div>
  );
};

export { CleanHookComponent };
