import React, { useState } from 'react'
import data from '../database/data.jsx'

export default function Questions() {

    const [checked, setChecked ] = useState(undefined);

    const question = data[0];

    function onSelect(){
        setChecked(true);
    }
  return (
    <div className='questions'>
        <h2 className='text-light'>{question.question}</h2>

        <ul key={question.id}>
            {
                question.options.map((q,i) => (
                    <li key={i}>
                <input type="radio" value={false} name='options' id={'q${i}-option'} onChange={onSelect}/>

                <label className='text-primary'  htmlFor={'q${i}-option'}>{q}</label>
                <div className='check checked'></div>

                </li>
                ))
            }
        </ul>
    </div>
  )
}
