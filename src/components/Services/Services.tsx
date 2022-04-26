import React from "react";
import { Container } from "react-bootstrap";
import blood from "../../assets/services/blood.jpg";
import consultation from "../../assets/services/consultation.png";
import covid from "../../assets/services/covid.jpg";
import emergency from "../../assets/services/emergency.png";
import info from "../../assets/services/info.png";
import medicine from "../../assets/services/medicine.png";
import reports from "../../assets/services/reports.png";
import search from "../../assets/services/search.png";
import Service from "./Service";
import "./Services.css";
//
interface service_if {
  id: number;
  img: string;
  name: string;
  description: string;
  route: string;
}

const services: service_if[] = [
  {
    id: 1,
    img: search,
    name: "Search Doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals.",
    route: "",
  },
  {
    id: 2,
    img: consultation,
    name: "Free Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations.",
    route: "",
  },
  {
    id: 3,
    img: reports,
    name: "Reports Feedback",
    description: "Get reports feedback from doctors with prescribed medicine.",
    route: "",
  },
  {
    id: 4,
    img: covid,
    name: "COVID-19 Update",
    description:
      "Get update about covid information everyday. Consult Covid Specialist from available doctors.",
    route: "/CovidPortal",
  },
  {
    id: 5,
    img: blood,
    name: "Find Blood Donors",
    description:
      "No need to worry for your patients. We will manage blood donors for you.",
    route: "/FindDonors",
  },
  {
    id: 6,
    img: medicine,
    name: "Online Pharmacy",
    description:
      "Buy  your medicines with our mobile application with a simple delivery system",
    route: "",
  },
  {
    id: 7,
    img: info,
    name: "Tracking",
    description: "Track and save your medical history and health data ",
    route: "",
  },
  {
    id: 8,
    img: emergency,
    name: "Emergency Care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family.",
    route: "",
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <Container className="my-4 text-center service-dot">
        <h1 className="fw-bold">Our Services</h1>
        <hr className="hr-w mx-auto" />
        <p className="text-secondary w-75 mx-auto pt-2 pb-4">
          <small>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health.
          </small>
        </p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 justify-content-center p-4 ">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
