import {useState} from 'react'

export default function BoxCard({result, children}) {
    const [show, setShow] =useState(true)

  return (
    <div className={show ? " " : "hidden"}>
        <div className={`box ${result}`}>
            {children}
            <button onClick={ () => setShow(!show)} className="trigger">Hide</button>
        </div>
    </div>
  )
}
