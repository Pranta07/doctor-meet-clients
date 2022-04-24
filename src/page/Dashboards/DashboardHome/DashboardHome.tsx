import React from 'react';
import './DashboardHome.css';
import LastAppoinments from './LastAppoinments/LastAppoinments';
import PatientAgeDemoGraphic from './PatientDemoGraphic/PatientAgeDemoGraphic';
import PateintGenderDemoGraphic from './PatientDemoGraphic/PateintGenderDemoGraphic';
import Survey from './Survey/Survey';

const DashboardHome = () => {
    return (
        <div className='DashboardHome'>
            <div className="row mx-auto ps-2">
                <div className="col-lg-3 col-12 col-md-6">
                    <div className='dashboarCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center'>
                        <i className="fas commonIconStyle fa-briefcase-medical"></i>
                        <div>
                            <h5>Appoinment</h5>
                            <h5 className='text-primary'>256</h5>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-12 col-md-6">
                    <div className='dashboarCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center'>
                        <i className="fas  commonIconStyle fa-bed"></i>
                        <div>
                            <h5>New Patients</h5>
                            <h5 className='text-primary'>250</h5>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-12 col-md-6">
                    <div className='dashboarCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center'>
                        <i className="fas  commonIconStyle fa-bed"></i>
                        <div>
                            <h5>Operations</h5>
                            <h5 className='text-primary'>25</h5>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-12 col-md-6">
                    <div className='dashboarCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center'>

                        <i className="fas commonIconStyle  fa-dollar-sign"></i>
                        <div>
                            <h5>Earnings</h5>
                            <h5 className='text-primary'>$5238</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                {/* chart section */}
                <Survey></Survey>
            </div>

            <div className='px-4'>
                {/* Last Appoinments Section */}
                <LastAppoinments></LastAppoinments>

            </div>

            <div className='row'>
                {/* Patient Demographic */}
                <div className="col-lg-6">
                    <PatientAgeDemoGraphic></PatientAgeDemoGraphic>
                </div>
                <div className="col-lg-6">
                    <PateintGenderDemoGraphic></PateintGenderDemoGraphic>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;