import style from "./ActivityBox.module.css";

const ActivityBox = ({ title, children }) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default ActivityBox;
