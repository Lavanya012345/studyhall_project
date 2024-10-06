import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataTable = ({ ownerId }) => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (ownerId) {
            const fetchBookings = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/data/${ownerId}`);
                    console.log('Fetched booking data:', response.data); // Debugging line
                    setBookings(response.data);
                } catch (error) {
                    console.error("Error fetching booking data", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchBookings();
        }
    }, [ownerId]);

    if (loading) {
        return <div>Loading booking details...</div>;
    }

    return (
        <div>
            <h2>Booked Seats Details</h2>
            {bookings.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Study Hall Name</th>
                            <th>Booked Seat Index</th>
                            <th>Booking Start Date</th>
                            <th>Booking End Date</th>
                            <th>Booking Amount</th>
                            <th>Available Seats</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.study_hall_name}</td>
                                <td>{booking.booked_seat_index}</td>
                                <td>{new Date(booking.booking_start_date).toLocaleDateString()}</td>
                                <td>{new Date(booking.booking_end_date).toLocaleDateString()}</td>
                                <td>{booking.booking_amount}</td>
                                <td>{booking.available_seats}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No booking details available.</p>
            )}
        </div>
    );
};

export default DataTable;
