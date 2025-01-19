import React, { useEffect, useState } from "react"
import './App.css';

const BASE_URL = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json'; 

function App() {
  const [assignmentData, setAssignmentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
      const fetchRecords = async () => {
        try {
          const response = await fetch(BASE_URL);
          const data = await response.json();
          setAssignmentData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchRecords();
    }, []);


    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecordsToDisplay = assignmentData.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(assignmentData.length / recordsPerPage);

    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

  return (
  <div className="container">
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {currentRecordsToDisplay.map((record, index) => (
          <tr key={record.id}>
            <td>{indexOfFirstRecord + index }</td>
            <td>{record["percentage.funded"]}</td>
            <td>{record["amt.pledged"]}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="pagination">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="pagination-btn"
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="pagination-btn"
      >
        Next
      </button>
    </div>
  </div>
);
}

export default App;
