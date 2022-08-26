import React , { useRef } from "react";

const Form = ({ onSubmit }) => {
  const nickname = useRef(null);
  const password = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        onSubmit(e, nickname, password)
      }}
      method="POST"
    >
      <h1>Просто страничка регистрации</h1>
      <p>
        <input
          type="text"
          placeholder="Никнейм"
          className="p-1"
          maxLength="40"
          ref={nickname}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Пароль"
          className="p-1"
          maxLength="20"
          ref={password}
        />
      </p>
      <p>
        <button type="submit" className="green-btn">
          Регистрация
        </button>
      </p>
    </form>
  );
};

export default Form;
