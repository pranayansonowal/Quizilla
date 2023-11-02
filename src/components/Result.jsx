import React from 'react'
import ResultTable from './ResultTable'
import { Link } from 'react-router-dom'

export default function Result() {

  function onRestart() {

  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      <div className='result flex-center'>
        
      </div>

      <div className='start'>
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
        <ResultTable></ResultTable>
      </div>
    </div>
  )
}
 