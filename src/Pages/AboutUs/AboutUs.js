import React from 'react';
import About1 from '../../images/About/about-1.jpg';
import About2 from '../../images/About/about-6.jpg';
import About3 from '../../images/About/about-3.jpg';
import About4 from '../../images/About/about-4.jpg';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                    <div className="mb-4">
                        <p className="fw-bold fs-2 text-success">About Youth Eye Hospital </p>
                        <p className="container fs-5"><strong>Youth Eye Hospital Ltd. (YEH)</strong> was incorporated on 18th September, 2005.
                            As the eye care sector was growing rapidly in Bangladesh, a specialized hospital for the treatment of eye
                            related diseases was much needed. It is the best eye care institute of the country and coordinates the provision
                            of specialized ophthalmological services with emphasis on quality & affordability.</p>
                        <p className="container fs-5"><strong>Youth Eye Hospital Ltd. (YEH)</strong> also has a Pharmacy and a Spectacles shop
                            to provide high quality spectacles and medicine to our valued patients.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <p className="fs-3 fw-bold text-success mt-4">Our Chairman</p>
                <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                    <div>
                        <img className="center mt-2 mb-4" style={{ height: '400px', borderRadius: '10px' }} src={About1} alt="" />
                        <p className="fs-3"><strong>Dr. Kazi Shabbir Anwar</strong></p>
                        <p>Chairman</p>
                        <p className="fw-bold">Youth Eye Hospital and Institute Ltd.</p>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <p className="fs-3 fw-bold text-success mt-4 mb-4">Founder Members</p>
                <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                    <div className="mb-4">
                        <img className="center mt-2 mb-4" style={{ height: '400px', borderRadius: '10px' }} src={About2} alt="" />
                        <p className="fs-3"><strong>Dr. Niaz Abdur-Rahman</strong></p>
                        <p className="fw-bold">Youth Eye Hospital and Institute Ltd.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                    <div className="mb-4">
                        <img className="center mt-2 mb-4" style={{ height: '400px', borderRadius: '10px' }} src={About3} alt="" />
                        <p className="fs-3"><strong>Dr. Md. Ali Akbar</strong></p>
                        <p className="fw-bold">Youth Eye Hospital and Institute Ltd.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                    <div className="mb-4">
                        <img className="center mt-2 mb-4" style={{ height: '400px', borderRadius: '10px' }} src={About4} alt="" />
                        <p className="fs-3"><strong>Dr. Kamal Haider Khan</strong></p>
                        <p className="fw-bold">Youth Eye Hospital and Institute Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;