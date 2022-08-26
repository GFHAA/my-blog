import React from "react";
import propTypes from "prop-types";
import "./Card.css";
const Card = ({ children, board, element, DragStart, DragOver, Drop}) => {
  return (
    <div
      className="card"
      draggable={true}
      onDragStart={() => {
        DragStart(board, element);
      }}
      onDragOver={(e) => {
        DragOver(e);
      }}
      onDrop={(e) => {
        Drop(e, board, element);
      }}
    >
      {children}
    </div>
  );
};
Card.propTypes = {
  children: propTypes.string.isRequired,
};
export default Card;
