import React from 'react';
import PageNotFound from '../../images/404/404.png';

const NotFound = () => {
    return (
        <div>
            <img className="center" src={PageNotFound} alt="" />
        </div>
    );
};

export default NotFound;