import React from "react";
import Button from "../button/Button";
import Card from "../Card/Card";
import "./Board.css";
const Board = ({
  items,
  typeOfBoard,
  boards,
  DragStart,
  DragOver,
  Drop,
  DropBoard,
}) => {
  return (
    <div
      className="board"
      onDragOver={(e) => {
        DragOver(e);
      }}
      onDrop={() => {
        DropBoard(items);
      }}
    >
      <span className="title-board">{items && items.title}</span>

      <div>
        {items &&
          items.todoItems.map((el) => {
            return (
              <Card
                board={items}
                key={el.id}
                element={el}
                boards={boards[0]}
                setBoards={boards[1]}
                DragStart={DragStart}
                DragOver={DragOver}
                Drop={Drop}
              >
                {el.title}
              </Card>
            );
          })}
        <Button typeOfBoard={typeOfBoard} board={items} />
      </div>
    </div>
  );
};

export default Board;
