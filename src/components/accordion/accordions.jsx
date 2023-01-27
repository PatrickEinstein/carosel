import React from "react";
import ReactDOM from "react-dom";
import { accordionData } from "./accordionData";
import Accordion from "./accordion";

export const Accordions = () => {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
};
