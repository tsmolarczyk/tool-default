import css from './FirstPage.module.css'
import { Title } from './Title/Title'

export const FirstPage = () => {
  return (
    <>
      <p className={css.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Title />
    </>
  )
}
