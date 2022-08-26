import React from "react";

const QuestionOptions = ({props}) => {
  return (
    <div className="option">
      <input type="radio" name="select-answer" id={props.id} className="radio-input" value={[props.id, props.idQuestionsTable, props.type]}/>
      <label htmlFor={props.id} className="checked-label"></label>
      <label htmlFor={props.id} className="text-label">
        {props.title}
      </label>
    </div>
  );
};

export default QuestionOptions;
