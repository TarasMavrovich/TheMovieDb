import style from "./style.module.css";

const Loader = () => {
  return (
    <div className={style.loader}>
      <span className={style.dot1}>.</span>
      <span className={style.dot2}>.</span>
      <span className={style.dot3}>.</span>
    </div>
  );
};

export default Loader;
