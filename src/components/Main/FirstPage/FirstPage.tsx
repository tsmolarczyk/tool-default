import css from "./FirstPage.module.css";
import { Title } from "./Title/Title";

export const FirstPage = () => {
  return (
    <>
      <h1 className={css.para}>Titles:</h1>
      <Title />
    </>
  );
};
