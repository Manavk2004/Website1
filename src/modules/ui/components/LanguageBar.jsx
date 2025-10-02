import React from 'react'
import python from "/python.svg"
import js from "/js.svg"
import ts from "/ts.svg"
import html from "/html.svg"
import tailwind from "/tailwind.svg"
import go from "/go.svg"
import LanguageCard from '../side-components/LanguageCard'

function LanguageBar() {
  return (
    <>
      <LanguageCard image={python} name={"Python"} col={"col-start-2 col-end-4"} row={"row-start-2 row-end-5"} />
    </>
  )
}

export default LanguageBar
