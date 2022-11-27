import { Jelly } from "@uiball/loaders";
import React from "react";
import "./loader.css";

export default function Loader() {
  return (
    <div className="loaderComponent">
      <Jelly size={90} speed={0.9} color="#3B3486" />
    </div>
  );
}
