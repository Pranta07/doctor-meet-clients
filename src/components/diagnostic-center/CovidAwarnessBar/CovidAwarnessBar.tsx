import { Container, Grid } from '@mui/material';
import React from 'react';
import './CovidAwarnessBar.css';
const CovidAwarnessBar = () => {
    return (
        <div className='covid-awarness-bar py-5 mb-5'>
            <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <div className='d-lg-flex d-md-flex justify-content-between align-items-center'>
                        <div className="awarness-logo-container d-flex justify-content-center align-items-center flex-column">
                        <img src="https://cdn-icons.flaticon.com/png/512/5948/premium/5948902.png?token=exp=1651236147~hmac=619568bf69f8d3356ed2900b6402e11a" alt="" />
                      
                        </div>
                        <div className="awarness-content-container ms-5">
                            <h4 className="text-white font-hind">Sanitized Equipment</h4>
                            <p className="font-catamaran text-white">In every one hour wash your hand atleast 20 secs</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <div className='d-flex justify-content-between align-items-center'>
                        <div className="awarness-logo-container d-flex justify-content-center align-items-center flex-column">
                        <img src="https://cdn-icons.flaticon.com/png/512/3341/premium/3341426.png?token=exp=1651237675~hmac=93a5dbbc5e6762d4758e777c74bc8f86" alt="" />
                      
                        </div>
                        <div className="awarness-content-container ms-5">
                            <h4 className="text-white font-hind">Social Distancing</h4>
                            <p className="font-catamaran text-white">keep atleast 3 feet of distance from each other</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <div className='d-flex justify-content-between align-items-center'>
                        <div className="awarness-logo-container d-flex justify-content-center align-items-center flex-column">
                        <img src="https://cdn-icons-png.flaticon.com/512/2877/2877627.png" alt="" />
                      
                        </div>
                        <div className="awarness-content-container ms-5">
                            <h4 className="text-white font-hind">Temperature Checks</h4>
                            <p className="font-catamaran text-white">Available Temperature checks in every sector</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default CovidAwarnessBar;