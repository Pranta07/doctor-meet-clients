import React, { useEffect, useState } from "react";
import AppointersDetails from "./AppointersDetails";
type Props = {};
const LastAppoinments: React.FC<Props> = () => {
  const [appointers, setAppoinets] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAppoinets(data));
  }, []);

  return (
    <div>
      <h3 className="text-center my-4">Last Appoinments</h3>
      <table className="table" id="table-to-xls">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">UserName</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
        </tr>

        <tbody>
          {appointers.length === 0 ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            appointers.map((apointerData, index) => (
              <AppointersDetails
                index={index}
                apointerData={apointerData}
              ></AppointersDetails>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LastAppoinments;
