import React from 'react'

const addRefToObjectsInArray = (array) => {
  return array.map(arr => {
    return {
      ...arr,
      ref: React.createRef()
    }
  })
}

export default addRefToObjectsInArray