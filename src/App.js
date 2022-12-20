import Date from './components/Date';
import './styles/style.css';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Upload 1099-R to TurboTax",
      category: "Finance",
      completed: false,
    },
    {
      id: 2,
      text: "Print parking passes",
      category: "Finance",
      completed: false,
    },
    {
      id: 3,
      text: "Submit 2019 tax return",
      category: "Wedding",
      completed: false,
    },
    {
      id: 4,
      text: "Sign contract, send back",
      category: "Freelance",
      completed: false,
    },
    {
      id: 5,
      text: "Hand sanitizer",
      category: "Shopping List",
      completed: false,
    },
    {
      id: 6,
      text: "Check on FedEx Order",
      category: "Freelance",
      completed: true,
    },
    {
      id: 7,
      text: "Look at new plugins",
      category: "Freelance",
      completed: true,
    },
    {
      id: 8,
      text: "Respond to catering company",
      category: "Freelance",
      completed: true,
    },
    {
      id: 9,
      text: "Reschedule morning coffee",
      category: "Freelance",
      completed: true,
    },
    {
      id: 10,
      text: "Check the latest on Community",
      category: "Freelance",
      completed: true,
    },
  ]);

  return (
    <div className="App">
      <Date />
    </div>
  );
}

export default App;


// Helenas försök till kod
// export const DateTime = () => {
//   const [date,setDate] = useState(new Date());
    
//     useEffect(() => {
//     let timer = setInterval(()=>setDate(new Date()), 1000 )
// });

// return(
//     <div class="container">
//         <h2>Current Time</h2>
//         <p> Time : {date.toLocaleTimeString()}</p>
//         <p> Date : {date.toLocaleDateString()}</p>

//     </div>
// )
// }