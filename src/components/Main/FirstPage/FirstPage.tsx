import css from './FirstPage.module.css'
import { Title } from './Title/Title'
import { Context } from 'Providers/ContextProvider'
import { useContext } from 'react'

export const FirstPage = () => {
  const { users } = useContext(Context)

  return (
    <>
      {users}
      <h1 className={css.para}>Titles:</h1>
      <Title />
    </>
  )
}
