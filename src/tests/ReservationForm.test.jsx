// src/tests/ReservationForm.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from "../components/ReservationForm";

test("renderiza el formulario correctamente", () => {
    render(<ReservationForm />);
    expect(screen.getByLabelText("Formulario de reserva")).toBeInTheDocument();
});

test("muestra errores si los campos están vacíos", async () => {
    render(<ReservationForm />);
    fireEvent.click(screen.getByText("Reservar"));
    expect(await screen.findByText("El nombre es obligatorio")).toBeInTheDocument();
});
