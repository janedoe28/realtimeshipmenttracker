import React, { useState, useEffect } from 'react';

export const ShipmentTracker = ({ shipmentId }) => {
    const [shipmentStatus, setShipmentStatus] = useState('');

    useEffect(() => {
        // Fetch real-time shipment status from AWS Lambda endpoint
        const fetchShipmentStatus = async () => {
            const response = await fetch(`AWS_LAMBDA_ENDPOINT/${shipmentId}`);
            const data = await response.json();
            setShipmentStatus(data.status);
        };

        // Call the function to fetch shipment status
        fetchShipmentStatus();

        // Cleanup on component unmount (no need to unsubscribe from SNS)
        return () => {
            // Clean up any necessary resources
        };
    }, [shipmentId]);

    return (
        <div className="container">
            <div className="box">
                <h2>Shipment Status: {shipmentStatus}</h2>
                {/* Additional shipment details and notifications */}
            </div>
        </div>
    );
};
