import React from 'react';


const ServiceDetails = () => {

    return (
        <div>
            <h2 className="fw-bold text-success">Service Details</h2>
            <div className="border border-1 border-primary mb-4 service text-center">
                {/* <img className="center mt-2" style={{ height: '210px', borderRadius: '10px' }} src={img} alt="" /> */}
                <p className="fw-bold fs-3">Name: { }</p>
                <p className="fw-bold fs-3">Service Price: { }</p>
                <h5 className="">Details: { }</h5>
            </div>
        </div>
    );
};

export default ServiceDetails;