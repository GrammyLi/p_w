import React from "react";
import "./index.less";
import ExampleImport from "./components/ExampleImport";

const Example: React.FC = () => {
  return (
    <div className="example-page">
      <ExampleImport />
    </div>
  );
};

export default Example;
