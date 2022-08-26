import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import QuestionOption from "../../components/QuestionOption";
import "./Quiz.css";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionCount, setCurrentQuestionCount] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState(null); //Тут содержится именно текущий ОТВЕТ
  const [currentAnswers, setCurrentAnswers] = useState([]); //А тут - массив из всех ответов, который потом отправится на сервер
  const [currentNickname, setCurrentNickname] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://poshtet.ru/server/getquestion.php?currentQuestionCount=0`)
      .then((response) => response.json())
      .then((json) => {
        setCurrentQuestion(json);
        setIsLoading(false);
      });
  }, []);
  const currentAnswerHandler = (text) => {
    let obj;
    if (currentQuestion.type === "radio") {
      const answersArray = text.split(",").map(Number);
      obj = {
        type: "radio",
        id: answersArray[0],
        idQuestionsTable: answersArray[1],
        nickname: currentNickname,
      };
    } else {
      obj = {
        name: text,
        type: "input",
      };
      setCurrentNickname(text);
    }
    setCurrentAnswer(obj);
  };
  const updateAnswers = (answer) => {
    if (answer) {
      currentAnswers.push(answer);
      setCurrentAnswers(currentAnswers);
      setCurrentAnswer(null);
      const current = currentQuestionCount + 1;
      setCurrentQuestionCount(current); //Непонятно почему, но он возвращает значение, меньшее на единичку
      if (currentQuestion.last) {
        fetch("https://poshtet.ru/server/putquestion.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(currentAnswers),
        });
      }
      fetch(
        `https://poshtet.ru/server/getquestion.php?currentQuestionCount=${currentQuestionCount}`
      )
        .then((response) => response.json())
        .then((json) => {
          setCurrentQuestion(json);
        });
    }
  };
  return (
    <div className="quiz">
      <div className="question-block">
        <h1>
          {currentQuestion?.questions.length > 0
            ? `Вопрос ${currentQuestionCount}`
            : "Конец)"}
        </h1>
        <div className="main-question-block">
          <span className="question-title">
            {isLoading ? "Загрузка" : currentQuestion.title}
          </span>
          <div className="question-options">
            <form
              action="/"
              onChange={(e) => currentAnswerHandler(e.target.value)}
            >
              {isLoading ? (
                "Загрузка"
              ) : currentQuestion.questions.length > 0 ? (
                currentQuestion.type === "radio" ? (
                  currentQuestion.questions.map((question) => {
                    return (
                      <QuestionOption props={question} key={question.id} />
                    );
                  })
                ) : (
                  <input type="text" placeholder="Введите имя..." />
                )
              ) : (
                "Опрос окончен. Большое спасибо за потраченные 15 секунд, мне приятно.Также, в соответствии с Политикой Конфиденциальности я заявляю, что Ваши данные могут быть отправлены третьим лицам(таким как Пентагон, Госдепартамент США и проч.)"
              )}
            </form>
          </div>
        </div>
        <div className="bottom">
          <button onClick={() => updateAnswers(currentAnswer)} className="quiz-btn">Ответить</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
