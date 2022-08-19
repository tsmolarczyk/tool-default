import { useState, useMemo, useEffect } from 'react'

export const ThirdPage = () => {
  const [persons, setPersons] = useState<any>()

  let people = [
    {
      name: 'Marek',
      surname: 'Nowak',
    },
    {
      name: 'Karol',
      surname: 'Hill',
    },
  ]

  const getPersons = () => {
    setPersons(people)
    console.log(persons)
  }

  useEffect(() => {
    getPersons()
  }, [])

  const personsToDisplay = useMemo(() => {
    if (persons) {
      return persons.map((p: any) => (
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <p style={{ fontSize: '20px' }}>{p.name}</p>
          <button
            style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }}
            // onClick={deletePerson()}
          >
            delete
          </button>
        </div>
      ))
    }
    return <h3>Musisz troche poczekac</h3>
  }, [persons])

  return (
    <div>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>NAMES</h1>
      {personsToDisplay}
    </div>
  )
}
