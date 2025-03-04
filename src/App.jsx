import Navbar from "./components/Navbar";
import ReservationForm from "./components/ReservationForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="pt-16 p-4">
        <ReservationForm />
      </main>
    </div>
  );
}
