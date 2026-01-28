import React from 'react'

export default function Products({nombre, precio}) {
  return (
    <li>{nombre} - ${precio}</li>
  )
}
