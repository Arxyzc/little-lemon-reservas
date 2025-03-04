import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

const Home = () => {
    const navigate = useNavigate(); // Hook para navegación

    return (
        <div>
            {/* Sección de introducción con imagen a la derecha */}
            <section className="bg-green-900 text-white py-10 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    {/* Texto */}
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-400">Little Lemon</h1>
                        <h2 className="text-xl mt-2">Chicago</h2>
                        <p className="mt-4 text-gray-300">
                            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                        <button 
                            className="mt-6 px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-600"
                            onClick={() => navigate("/reservas")} // 👈 ¡Debe coincidir con la ruta de App.jsx!
                        >
                            Reserve a table
                        </button>
                    </div>
                    
                    {/* Imagen */}
                    <div className="flex justify-center">
                        <img 
                            src="/images/Foto4.jpg" 
                            alt="Little Lemon Restaurant" 
                            className="rounded-lg shadow-lg w-full md:w-auto md:max-w-xs object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Menú */}
            <Menu />
        </div>
    );
};

export default Home;