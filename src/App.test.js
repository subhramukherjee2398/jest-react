import { render, screen } from '@testing-library/react';
import App from './App';

test('Header render testing.', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Testing/i);
  expect(linkElement).toBeInTheDocument();
});

test('render login component in the document',()=>{
  render (<App/>);
  const childcomponent =screen.getByText("Email")
  expect(childcomponent).toBeInTheDocument();
})