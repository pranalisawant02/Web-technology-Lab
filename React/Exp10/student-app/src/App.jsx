import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Studentlist from './Studentlist'

function App() {
  const [count, setCount] = useState(0)

  const students = [
    {name:'Pranali',age: 22, course: '.Net'},
    {name:'Sanika',age: 22, course: 'MERN'},
    {name:'Prachi',age: 22, course: 'GenAI'},
    {name:'Ankita',age: 22, course: 'CyberSecurity'},
    {name:'Samiksha',age: 22, course: 'DataScience'},
    {name:'Gouri',age: 22, course: 'MachineLearning'},
    {name:'Swikruti',age: 22, course: 'CloudComputing'},
    {name:'Pratiksha',age: 22, course: 'AI'},
    {name:'Tanvi',age: 22, course: 'Python'},
    {name:'Arya',age: 22, course: 'Java'},
  ];

  const showMessage = () => {
    alert("Button Clicked!");
  };
  return (
    <>
    <h1>Student List  </h1>
    <button onClick={showMessage}>Click Me</button>
    <Studentlist students={students} />
    </>
  );
}

export default App
