import { memo } from "react"

export const Small = memo(({ value }) => {

  console.log('Me dibujo');

  return (
    <small>{ value }</small>
  )
})
