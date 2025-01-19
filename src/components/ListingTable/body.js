import React from "react"

const Body = (props) => {

    return (
        <tbody>
        {props.currentRecordsToDisplay.map((record, index) => (
          <tr key={record.id}>
            <td>{props.indexOfFirstRecord + index }</td>
            <td>{record["percentage.funded"]}</td>
            <td>{record["amt.pledged"]}</td>
          </tr>
        ))}
      </tbody>
    )
}
export default Body;
