import style from "./style.module.css";

function LeftArrow() {
  return (
    <div className={style.arrowContainer}>
      <span>
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
  );
}

function RightArrow() {
  return (
    <div className={style.arrowContainer}>
      <span>
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
  );
}

export { LeftArrow, RightArrow };
