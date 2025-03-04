export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 flex items-center justify-between p-4">
            <button className="text-2xl text-gray-600">☰</button> {/* Menú de hamburguesa */}
            <img src="/logo.jpg" alt="Little Lemon" className="h-10" /> {/* Logo centrado */}
            <button className="text-2xl text-gray-600">←</button> {/* Botón de regreso */}
        </nav>
    );
}