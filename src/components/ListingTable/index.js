import React, { useEffect, useState } from "react"
import "./style.css"
import Header from "./header";
import Body from "./body";
import Pagination from "./pagination";

const BASE_URL = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';

const ListingTable = () => {

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

    return <div className="container">
        <table>
            <Header />
            <Body indexOfFirstRecord={indexOfFirstRecord} currentRecordsToDisplay={currentRecordsToDisplay}/>
        </table>
        <Pagination handlePrevPage={handlePrevPage} currentPage={currentPage} totalPages={totalPages} handleNextPage={handleNextPage} />
    </div>

}
export default ListingTable;
