import * as React from "react";

const TrComponent: (props: Record<string, unknown>) => React.ReactElement = (
  props: Record<string, unknown>
): React.ReactElement => {
  return (
    <React.Fragment>
    <tr>
        <td>Hello</td>
        <td>World</td>
    </tr>
    </React.Fragment>
  );
};

const FragmentComponent: (
  props: Record<string, unknown>
) => React.ReactElement = (
  props: Record<string, unknown>
): React.ReactElement => {
  /*
  const elementB : React.ReactElement =
  <div>
    <p>Parrafo 1</p>
  </div>
  <div>
    <p>Parrafo 2</p>
  </div>
  */

  const elementB: React.ReactElement = (
    <div>
      <p>Parrafo 1</p>
      <p>Parrafo 2</p>
    </div>
  );

  const element: React.ReactElement = (
    <React.Fragment>
      <div>
        <p>Parrafo 1</p>
      </div>
      <div>
        <p>Parrafo 2</p>
      </div>
      <table>
          <tbody>
              <TrComponent />
          </tbody>
      </table>
    </React.Fragment>
  );

  return element;
};

export { FragmentComponent };
