import React from 'react'

const Statistics = ({ students }) => {
    const totalStudents = students.length
    const averageGrade = students.reduce((acc, student) => acc + student.grade, 0) / totalStudents
    const highestGrade = Math.max(...students.map(student => student.grade))
    const lowestGrade = Math.min(...students.map(student => student.grade))

    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <p>Total Students: {totalStudents}</p>
            <p>Average Grade: {averageGrade.toFixed(2)}</p>
            <p>Highest Grade: {highestGrade}</p>
            <p>Lowest Grade: {lowestGrade}</p>
        </div>
    )
}

export default Statistics