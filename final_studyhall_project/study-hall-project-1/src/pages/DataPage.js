import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable'; // The component you created

const DataPage = () => {
    const [loggedInOwnerId, setLoggedInOwnerId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate fetching logged-in owner_id from authentication/session
    useEffect(() => {
        // Fetch ownerId from localStorage
        const ownerId = localStorage.getItem('owner_id');
        console.log('Owner ID from localStorage:', ownerId); // Debug line

        if (ownerId) {
            setLoggedInOwnerId(ownerId);
        } else {
            console.error("Owner ID not found");
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div>Loading owner details...</div>;
    }

    if (loggedInOwnerId) {
        return <div>Owner ID not found. Please ensure you're logged in.</div>;
    }

    return (
        <div>
            <h1>Booking Details for Owner {loggedInOwnerId}</h1>
            <DataTable ownerId={loggedInOwnerId} />
        </div>
    );
};

export default DataPage;
