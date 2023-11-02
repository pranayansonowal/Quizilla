import React from 'react'
import { useEffect } from 'react'
import Questions from './Questions'

export default function Quiz() {

    useEffect(() => {

    })

    function onNext() {

    }
    function onPrev() {

    }

  return (
    <div className='conatiner'>
        <h1 className='title text-light'></h1>

        <Questions />

        <div className="grid">
            <button className='btn prev' onClick={onPrev}>Previous</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}
