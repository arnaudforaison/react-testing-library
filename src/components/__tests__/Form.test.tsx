import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import Form from "../Form";

const wrapper = ({ children }: { children?: ReactNode }) => (
  <MemoryRouter initialEntries={['/vm?pattern=other']}>{children}</MemoryRouter>
);

test("Form should have label pattern", () => {
  render(<Form />, {wrapper});

  expect(screen.getByLabelText(/pattern/i)).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toHaveValue('other');
});
