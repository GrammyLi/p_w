import React from "react";
import "./index.less";
import ExampleImport from "./components/ExampleImport";
import ExampleUploadImage from "./components/ExampleUploadImage";

const Example: React.FC = () => {
  return (
    <div className="example-page">
      {/* <ExampleImport /> */}

      <ExampleUploadImage />
    </div>
  );
};

export default Example;
