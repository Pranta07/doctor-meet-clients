import React from "react";

export interface doctorData {
  _id: string;
  name: string;
  email: string;
  img: string;
  specialist: string;
  address: {
    city: string;
    suite: string;
    street: string;
  };
}
type Props = {
  doctorData: doctorData;
};
const Doctor: React.FC<Props> = ({ doctorData }) => {
  const { _id, name, email, img, address, specialist } = doctorData;
  return (
    <div className="col text-center">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{specialist}</p>
          {/* <p>{email}</p> */}
          <p className="card-text">
            {address.suite},{address.street},{address.city}
          </p>

          <button type="button" className="btn btn-primary">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;

// <div>
//   <img src={img} alt="" />
//   <p>{name}</p>
//   <p>{email}</p>
//   <p>
//     {address.suite},{address.street},{address.city}
//   </p>
// </div>
