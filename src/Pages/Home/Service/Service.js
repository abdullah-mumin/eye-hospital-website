import React from 'react';
import './Service.css';

const Service = (props) => {
    // console.log(props);
    const { name, img, description } = props.service;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <div className="border border-1 border-primary mb-4 service">
                <img className="center mt-2" style={{ height: '210px', borderRadius: '10px' }} src={img} alt="" />
                <p className="fw-bold fs-3">Name: {name}</p>
                <h5 className="text-">Details: {description.substr(0, 90)}</h5>
                <button type="button" className="btn btn-primary mb-2 opacity-75">See More Details</button>
            </div>
        </div>
    );
};

export default Service;