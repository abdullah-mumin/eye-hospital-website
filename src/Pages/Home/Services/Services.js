import React, { useEffect, useState } from 'react';
import ServiceDetails from '../../ServicesDetails/ServiceDetails';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [totalService, setTotalService] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleService = (service) => {
        const newTotalService = [...totalService, service];
        setTotalService(newTotalService);
    }

    return (
        <div>
            <div className="container">
                <h2 className="fw-bold text-success my-4">Our Services</h2>
                <div className="row">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                            handleService={handleService}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;