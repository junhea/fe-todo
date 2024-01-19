import { addCardHandler } from "../handler/addCardHandler.js";
import { closeCardFormHandler, closeEditCardFormHandler } from "../handler/closeCardFormHandler.js";
import { deleteCardHandler } from "../handler/deleteCardHandler.js";
import { editCardHandler } from "../handler/editCardHandler.js";
import { closeHistory, showHistory } from "../handler/historyHandler.js";
import { inputCardHandler } from "../handler/inputCardHandler.js";
import { submitAddCardFormHandler } from "../handler/submitAddCardFormHandler.js";
import { submitEditCardFormHandler } from "../handler/submitEditCardFormHandler.js";

const clickHandlerMap = {
  "js-addCardBtn": addCardHandler,
  "js-editCardBtn": editCardHandler,
  "js-addFormCancel": closeCardFormHandler,
  "js-editFormCancel": closeEditCardFormHandler,
  "js-closeHistory": closeHistory,
  "js-openHistory": showHistory,
  "js-deleteCardBtn": deleteCardHandler,
};

const onClick = ({ target }) => {
  const executeHandler = clickHandlerMap[target.classList[0]];
  if (executeHandler) {
    executeHandler(target);
  }
};

//FixIt
const submitHandlerMap = {
  "js-addForm": submitAddCardFormHandler,
  "js-editForm": submitEditCardFormHandler,
};

const onSubmit = (event) => {
  event.preventDefault();
  const { target } = event;
  const executeHandler = submitHandlerMap[target.classList[0]];
  if (executeHandler) {
    executeHandler(target);
  }
};

export const initEventListener = () => {
  const app = document.querySelector("#app");
  app.addEventListener("click", onClick);
  app.addEventListener("submit", onSubmit);
  app.addEventListener("input", inputCardHandler);
};
