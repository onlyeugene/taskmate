// import {useState} from 'react'
// import { TaskCard } from './TaskCard';
// import BoxCard from './BoxCard';


// export default function TaskList({info}) {

//     const [tasks, setTasks] = useState([
//         {id:1, name: "Record React lectures", completed: true},
//         {id:2, name: "Edit React lectures", completed: false}, 
//         {id:3, name: "Watch React lectures", completed: false}
//        ]);
       
       
//        const [show, setShow] = useState(false)
       
//        function handleDelete (id){
//          setTasks(tasks.filter (task => task.id !== id))
//        }
       
//   return (
//     <div>
//         <>
//             <h1>Task List</h1>
//             <ul>
//                 <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
//                 { show  && tasks.map ((task) => (
//                     <TaskCard key={task.id} info={info}  task = {task} handleDelete= {handleDelete}/>
//                 ))}
//             </ul>
//             <BoxCard result='success'>
//                 <p className='title'>Lorem ipsum dolor sit amet.</p>
//                 <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, maxime?</p>
//             </BoxCard>
//             <BoxCard result='warning'>
//                 <p className='title'>Lorem ipsum dolor sit amet.</p>
//                 <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, maxime?</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestiae animi soluta, error similique nihil! Ullam libero molestiae temporibus, amet id illum sed maiores praesentium hic ipsa ut consequatur doloremque a officia dicta, quam accusantium alias quae possimus repellat illo nihil. Vel, labore officia corrupti totam sed odio quia aliquid?</p>
//             </BoxCard>

//         </>
//     </div>
//   )
// }


import { useState } from 'react';
import { TaskCard } from './TaskCard';
import "./TaskList.css";
import "./AddTask.css";

export const TaskList = ( {tasks, setTasks }) => {
    
    const [show, setShow] = useState(true);

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <section className='tasklist'>
        <ul>
            <div className='header'>
                <h1>TaskList</h1>
                <button className='trigger' onClick={() => setShow(!show)}>{ show ? "Hide Tasks" : "Show Tasks"}</button>
            </div>
            { show && tasks.map((task) => (
                <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
            )) }
        </ul>
    </section>
  )
}
