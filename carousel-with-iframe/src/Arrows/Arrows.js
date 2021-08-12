import style from "./style.module.css";
import { useState } from "react";

export default function Arrows({
  setActiveElement,
  list,
  propActiveElement,
  ...props
}) {
  const [preActiveElement, setPreActiveElement] = useState({});

  const [postActiveElement, setPostActiveElement] = useState({});

  function findActiveElementInList(action) {
    let elementBeforeTheActiveOne;
    let elementAfterTheActiveOne;
    let activeElement = undefined;

    if (action === "see previous") {
      let newActiveElement;
      let newPreviousElement;
      let newNextElement;

      for (let listItem of list) {
        if (isTheActiveElement(listItem)) {
          console.log(
            "não há previous pois o elemento já é o primeiro. para aqui"
          );
          break;
        }

        let firstAtLeft = listItem;
        let secondAtLeft;

        if (listItem.children) {
          for (let child of listItem.children) {
            //impede a iteração de continuar
            if (activeElement) {
              setPreActiveElement(secondAtLeft);
              break;
            } else if (isTheActiveElement(child)) {
              elementBeforeTheActiveOne = secondAtLeft;
              activeElement = firstAtLeft;
              elementAfterTheActiveOne = child;
            } else {
              secondAtLeft = firstAtLeft;
              firstAtLeft = child;
            }
          }
        }
        //impede a iteração de continuar
        if (!activeElement) {
          for (let listItem of list) {
            if (activeElement) {
              setPreActiveElement(secondAtLeft);
              break;
            } else if (isTheActiveElement(listItem)) {
              elementBeforeTheActiveOne = secondAtLeft;
              activeElement = firstAtLeft;
              elementAfterTheActiveOne = listItem;
            } else {
              secondAtLeft = firstAtLeft;
              firstAtLeft = listItem;
            }
          }
        }

        setPreActiveElement(elementBeforeTheActiveOne);
        setPostActiveElement(elementAfterTheActiveOne);
        setActiveElement(activeElement);
      }
    }
  }

  function isTheActiveElement(element) {
    if (
      propActiveElement.label == element.label &&
      propActiveElement.link == element.link &&
      propActiveElement.value == element.value
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <div className={style.arrowContainer}>
        <span onClick={() => findActiveElementInList("see previous")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40.208"
            height="73.872"
            viewBox="0 0 40.208 73.872"
          >
            <path
              id="left-slide"
              d="M28.561,77.464,58.047,110.34a3.382,3.382,0,0,0,5.15,0l3.439-3.834a4.4,4.4,0,0,0,.006-5.735L43.273,74.593,66.642,48.416a4.4,4.4,0,0,0-.006-5.735L63.2,38.846a3.382,3.382,0,0,0-5.15,0L28.561,71.722A4.4,4.4,0,0,0,28.561,77.464Z"
              transform="translate(-27.494 -37.657)"
              fill="#07f"
            />
          </svg>
        </span>
      </div>
      {props.children}
      <div className={style.arrowContainer}>
        <span onClick={findActiveElementInList}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40.208"
            height="73.872"
            viewBox="0 0 40.208 73.872"
          >
            <path
              id="left-slide"
              d="M66.636,77.464,37.15,110.34a3.382,3.382,0,0,1-5.15,0l-3.439-3.834a4.4,4.4,0,0,1-.006-5.735L51.923,74.593,28.555,48.416a4.4,4.4,0,0,1,.006-5.735L32,38.846a3.382,3.382,0,0,1,5.15,0L66.635,71.722A4.4,4.4,0,0,1,66.636,77.464Z"
              transform="translate(-27.494 -37.657)"
              fill="#07f"
            />
          </svg>
        </span>
      </div>
    </>
  );
}
