import React from "react";

const Statistics = ({ statisticsData }) => {
  const totalStudents = students.length;
  const averageMarks =
    students.reduce((acc, student) => acc + student.marks, 0) / totalStudents;
  const highestMarks = Math.max(...students.map((student) => student.marks));
  const lowestMarks = Math.min(...students.map((student) => student.marks));

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>Highest marks: {highestMarks}</p>
      <p>Lowest marks: {lowestMarks}</p>
      <p>Average marks: {averageMarks.toFixed(2)}</p>
    </div>
  );
};

export default Statistics;
