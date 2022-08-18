import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Title = () => {
  const [titles, setTitles] = useState<any>()

  const getTitles = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/')
      .then((res) => {
        setTitles(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    console.log('aaa')
    getTitles()
  }, [])

  useEffect(() => {
    if (titles) {
      console.log('here')
    }
  }, [titles])

  return (
    <>
      <h1>asdasdase</h1>
    </>
  )
}
