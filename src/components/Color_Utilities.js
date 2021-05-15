/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Color_Gradient from "./Color_Gradient";
import Color_Grayscale from "./Color_Grayscale";
import Color_Text from "./Color_Text";
export default function Color_Utilities() {
  return (
    <>
      <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
      <p className="mb-4">
        Bootstrap's default utility classes can be found on the official{" "}
        <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </p>
      <div className="row">
        <div className="col-lg-4">
          <Color_Text></Color_Text>
        </div>
        <div className="col-lg-4">
          <Color_Gradient></Color_Gradient>
        </div>
        <div className="col-lg-4">
          <Color_Grayscale></Color_Grayscale>
        </div>
      </div>
    </>
  );
}
