import React from "react";

export interface apointerData {
  id: string;
  name: string;
  email: string;
  username: string;
  address: {
    city: string;
  };
}
type Props = {
  index: number;
  apointerData: apointerData;
};

const AppointersDetails: React.FC<Props> = ({ apointerData }) => {
  const { id, name, email, username, address } = apointerData;

  return (
    <tr style={{ textAlign: "start" }}>
      <td> {id}</td>
      <td> {name}</td>
      <td> {username}</td>
      <td> {email}</td>
      <td> {address.city}</td>
    </tr>
  );
};

export default AppointersDetails;
