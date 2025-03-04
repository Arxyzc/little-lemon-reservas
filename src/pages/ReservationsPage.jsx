import React from "react";
import ReservationForm from "../components/ReservationForm";

const ReservationsPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold mb-4">Haz tu reservación</h2>
        <ReservationForm />
        </div>
    );
};

export default ReservationsPage;
