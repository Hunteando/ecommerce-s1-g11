
import React, {useState} from 'react';
import '../Counter/counter.css'



const Counter = () => {


    const [counter,setCounter] = useState(1)

const handlerSumar = ()=>{
    
        setCounter(counter + 1)
    
    

}

const handlerRestar = ()=>{
   if(counter > 0 ){
    setCounter(counter - 1)
   }
}


  return (
    <div className='contenedorCounter'>
        <button onClick={handlerSumar}>+</button>
        <p>{counter}</p>
        <button onClick={handlerRestar}>-</button>
      
    </div>
  )
}

export default Counter
