// src/components/ReservationForm.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("El nombre es obligatorio"),
    email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
    date: yup.date().required("La fecha es obligatoria"),
    time: yup.string().required("La hora es obligatoria"),
    guests: yup
        .number()
        .min(1, "Debe haber al menos 1 invitado")
        .max(10, "Máximo 10 invitados")
        .required("El número de invitados es obligatorio"),
});

export default function ReservationForm() {
    const [reservationConfirmed, setReservationConfirmed] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
    });

    const onSubmit = (data) => {
        setReservationConfirmed(true);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-green-700">Reserva tu Mesa</h2>

        {/* Imagen antes del formulario */}
        <img src="/Foto3.jpg" alt="Restaurante" className="w-full h-48 object-cover rounded-lg mb-4 shadow-md" />

        {reservationConfirmed ? (
            <div className="text-green-600 font-semibold text-center p-4 bg-green-100 rounded-md">
            🎉 ¡Tu reserva ha sido confirmada! 🎉
            </div>
        ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
                <label htmlFor="name" className="block font-semibold text-gray-700">Nombre</label>
                <input id="name" {...register("name")} className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500" />
                <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>

            <div>
                <label htmlFor="email" className="block font-semibold text-gray-700">Correo Electrónico</label>
                <input id="email" type="email" {...register("email")} className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500" />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div>
                <label htmlFor="date" className="block font-semibold text-gray-700">Fecha</label>
                <input id="date" type="date" {...register("date")} className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500" />
                <p className="text-red-500 text-sm">{errors.date?.message}</p>
            </div>

            <div>
                <label htmlFor="time" className="block font-semibold text-gray-700">Hora</label>
                <input id="time" type="time" {...register("time")} className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500" />
                <p className="text-red-500 text-sm">{errors.time?.message}</p>
            </div>

            <div>
                <label htmlFor="guests" className="block font-semibold text-gray-700">Número de Invitados</label>
                <input id="guests" type="number" {...register("guests")} className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500" />
                <p className="text-red-500 text-sm">{errors.guests?.message}</p>
            </div>

            <button type="submit" className={`bg-green-600 text-white p-2 rounded ${isValid ? "hover:bg-green-700" : "opacity-50 cursor-not-allowed"}`} disabled={!isValid}>
                Reservar
            </button>
            </form>
        )}
        </div>
    );
}