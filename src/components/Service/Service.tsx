import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css';

interface service_if {
  id: number;
  img: string;
  name: string;
  description: string;
  route: string;
}

const Service = (props: { key: number; service: service_if }) => {
  const { service } = props;

  return (
    <div className="col-10">
      <NavLink className="text-d" to={service.route}>
        <div className="card h-100 border-0 p-4">
          <img src={service.img} className="mx-auto mt-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{service.name}</h5>
            <p className="card-text text-muted">
              <small>{service.description}</small>
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Service;
