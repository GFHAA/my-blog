import { useState } from "react";
import Board from "../../components/board/Board";
import "./todo.css";

function Todo() {
  const [currentCard, setCurrentCard] = useState(null);
  const [currentBoard, setCurrentBoard] = useState(null);
  const todoItems = [
    { title: "Пройти курс по React", id: 1 },
    { title: "Отметить день рождения", id: 2 },
    {
      title:
        "Записаться на курсы английского языка, чтобы уехать жить в Лондон",
      id: 3,
    },
    { title: "Сделать бекенд своего сайта на node.js", id: 4 },
  ];
  const [boards, setBoards] = useState(
    [
      { title: "План на месяц", todoItems, id: 1 },
      { title: "План на день", todoItems: [], id: 2 },
      null,
    ],
    []
  );
  function addBoard(title, board, callbackFun) {
    if (title.trim()) {
      boards.pop();
      boards.push({ title, todoItems: [], id: Date.now() }, null);
      setBoards([...boards]);
      callbackFun();
      console.log(...boards);
    }
  }
  function addCard(title, board, callbackFun) {
    setBoards(
      boards.map((el) => {
        if (el && el.id === board.id) {
          el.todoItems.push({ title, id: Date.now() });
          callbackFun();
          return el;
        } else {
          return el;
        }
      })
    );
  }

  function DragStart(board, card) {
    setCurrentBoard(board);
    setCurrentCard(card);
  }
  function DragOver(e) {
    e.preventDefault();
  }
  function Drop(e, board, card) {
    e.preventDefault();
    const currentCardIndex = currentBoard.todoItems.indexOf(currentCard);
    currentBoard.todoItems.splice(currentCardIndex, 1);
    const oldCardIndex = board.todoItems.indexOf(card);
    board.todoItems.splice(oldCardIndex + 1, 0, currentCard);
    setBoards(
      boards.map((el) => {
        if (el) {
          if (el.id === board.id) {
            return board;
          }
          if (el.id === currentBoard.id) {
            return currentBoard;
          }
        }
        return el;
      })
    );
  }
  function DropBoard(board) {
    if (board && !board.todoItems.length) {
      board.todoItems.push(currentCard);
      const currentCardIndex = currentBoard.todoItems.indexOf(currentCard);
      currentBoard.todoItems.splice(currentCardIndex, 1);
      setBoards(
        boards.map((el) => {
          if (el) {
            if (el.id === board.id) {
              return board;
            }
            if (el.id === currentBoard.id) {
              return currentBoard;
            }
          }
          return el;
        })
      );
    }
  }
  return (
    <div className="todo-div">
      <div className="todo-children">
        {boards.map((board, index) => {
          return (
            <Board
              items={board}
              boards={[boards, setBoards]}
              DragStart={DragStart}
              DragOver={DragOver}
              Drop={Drop}
              DropBoard={DropBoard}
              typeOfBoard={board ? ["карточк", addCard] : ["колонк", addBoard]}
              key={board ? board.id : Date.now()}
            />
          ); // ключ массива использовать в качестве аргумента для key не рекомендуется
        })}
      </div>
    </div>
  );
}

export default Todo;
