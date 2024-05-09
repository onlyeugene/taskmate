// import './App.css';
// import Header from './components/Header';
// import TaskList from './components/TaskList';


// function App() {
//     // const info = "Random";
// //    const [count, setCount] = useState(0)

// //     const handleAdd = () => {
// //        //  setCount(count + 1) // to add just 1 

// //        setCount(count => count +1 )
// //        setCount(count => count +1 )
// //        setCount(count => count +1 )

// //        // This allows the count to be updated plus 3
// //     }

// //     function handleSub (){
// //         setCount(count - 1)
// //     }
// //     function handleReset (){
// //         setCount(0)
// //     }

//   return (
//     <div className='App'>
//         {/* <div className="box button">
//             <p>{count}</p>
//             <button onClick ={handleAdd} className='add' >ADD</button>
//             <button onClick={handleSub} className='sub' >SUB</button>
//             <button onClick={handleReset}>RESET</button>
//         </div> */}
//         {/* <Header/>
//         <TaskList info= {info} /> */}
//         <Header />
//         <TaskList />
//     </div>
//   );
// }

// export default App;


import { useState } from 'react'
import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

function App() {

    const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask  tasks={tasks} setTasks={setTasks}/>
      <TaskList  tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
