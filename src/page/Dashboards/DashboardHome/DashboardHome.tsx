import React from 'react';
import './DashboardHome.css';
import Survey from './Survey/Survey';

const DashboardHome = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-3">
                    <div className='dashboarCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center'>
                        <i className="fas commonIconStyle fa-briefcase-medical"></i>
                        <div>
                            <h5>Appoinment</h5>
                            <h5 className='text-primary'>256</h5>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3">
                    <div className='dashboarCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center'>
                        <i className="fas  commonIconStyle fa-bed"></i>
                        <div>
                            <h5>New Patients</h5>
                            <h5 className='text-primary'>250</h5>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3">
                    <div className='dashboarCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center'>
                        <i className="fas  commonIconStyle fa-bed"></i>
                        <div>
                            <h5>Operations</h5>
                            <h5 className='text-primary'>25</h5>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3">
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

        </div>
    );
};

export default DashboardHome;