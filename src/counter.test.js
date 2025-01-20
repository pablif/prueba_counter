import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders learn react link', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Incrementar/i);
  expect(buttonElement).toBeInTheDocument();
});
test("shows initial count value of 0", () => {
  render(<Counter />);
  const countText = screen.getByText(/Contador: 0/i);
  expect(countText).toBeInTheDocument();
});
test("increments count by 1 when button is clicked", () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Incrementar/i);
  const countText = screen.getByText(/Contador: 0/i);

//Simula hacer click 
fireEvent.click(buttonElement);
//Comprobar si incrementa
expect(countText).toHaveTextContent('Contador: 1');
});