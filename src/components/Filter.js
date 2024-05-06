import React from 'react'

function Filter({onCategoryChange}) {
  return (
    <>
      <select onChange={(e) => onCategoryChange(e.target.value)}></select>
    </>
  )
}
export default Filter;