import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {

    const { user } = useAuth();

    return (
        <div className="mt-5">
            <div className="user-info">
                <img className="img-fluid border" src={user?.photoURL} alt="" />
                <h1>Welcome <span className="text-primary">{user?.displayName}</span></h1>
                <h5>{user?.email}</h5>
            </div>
            <div>
                <img className="img-fluid" src="https://image.freepik.com/free-vector/office-workers-analyzing-researching-business-data_74855-4445.jpg" alt="dashboard" />
            </div>
        </div>
    );
};

export default DashboardHome;