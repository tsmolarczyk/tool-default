import { useState, useMemo } from 'react'

export const User = () => {
  const [users, setUsers] = useState()

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }

  const userToDisplay = useMemo(() => {
    if (users) {
      return users.map((user: any) => <h2>{user}</h2>)
    }
    return <h3>wczytywanie..........</h3>
  }, [users])

  return (
    <div>
      <h3>users</h3>
      {userToDisplay}
    </div>
  )
}
