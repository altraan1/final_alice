import './App.css'
import { useEffect, useState } from 'react'
import Statistics from './components/Statistics'
import StudentItem from './components/StudentItem'
import StudentList from './components/StudentList'

function App() {
  const [count, setCount] = useState(0)
}

useEffect(() => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      setCount(data.length);
    })
    .catch(error => console.error('Error fetching student data:', error));
}, []);

const [student, setStudent] = useState([null]);
const [statisticsData, setStatisticsData] = useState({});
const [studentListData, setStudentListData] = useState([null]);
const data = await fetch('data.json'); 
  if (!data.ok) throw new Error('Network response was not ok');

  const list = studentListData.map(student => student.name);
  
useEffect(() => {
  fetch(data)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setStudent(data);
    setStatisticsData(data);
    setStudentListData(data);
  })
  .catch(error => console.error('Error fetching student data:', error));

if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}

return (
  <div className="App">
    <h1>Student Management System</h1>
    <p>Total Students: {count}</p>
    <Statistics students={students} />
    <StudentList students={students} />
  </div>
)

export default App