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

const [students, setStudents] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setStudents(data);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
}, []);

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