import React, { Fragment, useRef } from "react";
import "./Button.css";
import addSvg from "../../assets/add.svg";
import closeSvg from "../../assets/cross.svg";
import { useState } from "react";
const Button = ({ typeOfBoard, board }) => {
  const [openAdd, setOpenAdd] = useState(false);
  const textarea = useRef(null);
  function create() {
    setOpenAdd(false);
  }
  return (
    <Fragment>
      {openAdd ? (
        <div className="add-card">
          <div className="card">
            <textarea
              className="textarea"
              rows="3"
              placeholder={`Введите название ${typeOfBoard[0]}и`}
              ref={textarea}
            ></textarea>
          </div>
          <div className="bottom">
            <button
              className="green-btn"
              onClick={() => {
                typeOfBoard[1](textarea.current.value, board, create);
              }}
            >
              Добавить {typeOfBoard[0]}у
            </button>
            <img
              src={closeSvg}
              alt="Картинка крестик"
              className="close"
              onClick={() => setOpenAdd(false)}
            />
          </div>
        </div>
      ) : (
        <div className="button-div" onClick={() => setOpenAdd(true)}>
          <img src={addSvg} alt="Добавить карточку" />
          <span>{`Добавить еще одну ${typeOfBoard[0]}у`}</span>
        </div>
      )}
    </Fragment>
  );
};

export default Button;
