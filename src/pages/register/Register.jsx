import React, { useContext, useState } from "react";
import Form from "../../components/form/Form";
import { useCookies } from "react-cookie";
import { Context } from "../../components/Context";
const Register = () => {
  const [status, setStatus] = useState(3);
  const [errors, setErrors] = useState(null);
  const [cookies, setCookie] = useCookies(["user"]);
  const {setToken} = useContext(Context);
  function sendForm(e, nickname, password) {
    e.preventDefault();
    const nicknameForm = nickname.current.value.trim();
    const passwordForm = password.current.value;
    if (nicknameForm.length > 0 && passwordForm.length > 4) {
      fetch(`https://poshtet.ru/server/register.php`, {
        method: "post",
        body: JSON.stringify({
          nickname: nicknameForm,
          password: passwordForm,
        }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setStatus(1);
          setErrors(json.comment);
          if (json.status === 200) {
            setCookie("token", json.answer, {
              path: "/",
            });
            setToken(json.answer)
          }
        });
    }
  }
  return (
    <div className="index-div">
      <div className="container pt-5 d-flex">
        {status === 3 ? (
          <Form onSubmit={sendForm} />
        ) : status === 200 ? (
          errors
        ) : (
          <p>
            {errors} <a onClick={() => setStatus(3)}>Попробовать еще раз</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
