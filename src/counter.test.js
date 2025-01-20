import {fireEvent, render, screen} from '@testing-library/react';
import Counter from './counter';

test('Check first click', () => {
    render (<Counter />);
    fireEvent.click(screen.getByText(/Incrementar/i))
    const contador2 = screen.getByText(/Contador: 1/i)
    expect (contador2).toBeInTheDocument();
});


test('Check initial value is 0', () => {
    render (<Counter />);
    const inicial = screen.getByText(/Contador: 0/i)
    expect (inicial).toBeInTheDocument();
});


test('renders increment button', () => {
    render (<Counter />);
    const buttonElement = screen.getByText(/Incrementar/i)
    expect (buttonElement).toBeInTheDocument();
});