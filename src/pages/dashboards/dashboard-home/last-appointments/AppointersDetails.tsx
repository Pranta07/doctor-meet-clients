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
  appointerData: apointerData;
};

const AppointersDetails: React.FC<Props> = ({ appointerData }) => {
  const { id, name, email, username, address } = appointerData;

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
