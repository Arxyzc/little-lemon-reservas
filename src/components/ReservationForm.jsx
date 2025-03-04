import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); // Nuevo estado para ocultar el formulario después de enviar

    // Horario permitido (solo intervalos de 30 minutos)
    const availableTimes = [
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
        "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
        "21:00", "21:30", "22:00"
    ];

    // Función para validar el formulario
    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Correo inválido.";
        if (!formData.date) newErrors.date = "Selecciona una fecha.";
        
        // Validación de hora dentro de las opciones disponibles
        if (!formData.time) {
            newErrors.time = "Selecciona una hora.";
        } else if (!availableTimes.includes(formData.time)) {
            newErrors.time = "Selecciona un horario válido.";
        }

        // Validación de invitados entre 1 y 10
        const guestsNumber = parseInt(formData.guests, 10);
        if (!formData.guests || isNaN(guestsNumber) || guestsNumber < 1 || guestsNumber > 10) {
            newErrors.guests = "Número de invitados debe ser entre 1 y 10.";
        }

        setErrors(newErrors);

        // Mostrar alertas con toast
        if (Object.keys(newErrors).length > 0) {
            Object.values(newErrors).forEach((error) => toast.error(error));
        }

        return Object.keys(newErrors).length === 0;
    };

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true); // Oculta el formulario
            toast.success("¡Reserva realizada con éxito!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {!isSubmitted ? (
                <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-semibold">Nombre</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className={`w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded`}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold">Correo Electrónico</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded`}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold">Fecha</label>
                        <input 
                            type="date" 
                            name="date" 
                            value={formData.date} 
                            onChange={handleChange} 
                            className={`w-full p-2 border ${errors.date ? "border-red-500" : "border-gray-300"} rounded`}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold">Hora</label>
                        <select 
                            name="time" 
                            value={formData.time} 
                            onChange={handleChange} 
                            className={`w-full p-2 border ${errors.time ? "border-red-500" : "border-gray-300"} rounded`}
                        >
                            <option value="">Selecciona una hora</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold">Número de invitados (1 - 10)</label>
                        <input 
                            type="number" 
                            name="guests" 
                            value={formData.guests} 
                            onChange={handleChange} 
                            className={`w-full p-2 border ${errors.guests ? "border-red-500" : "border-gray-300"} rounded`}
                            min="1"
                            max="10"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className={`w-full p-3 rounded-lg text-white font-semibold shadow-md ${Object.keys(errors).length === 0 && formData.name && formData.email && formData.date && formData.time && formData.guests ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}`}
                        disabled={Object.keys(errors).length > 0 || !formData.name || !formData.email || !formData.date || !formData.time || !formData.guests}
                    >
                        Reservar
                    </button>
                </form>
            ) : (
                <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-bold text-green-700">¡Reserva Confirmada! ✅</h2>
                    <p className="mt-2 text-gray-700">Te esperamos el {formData.date} a las {formData.time}.</p>
                </div>
            )}
        </div>
    );
};

export default ReservationForm;