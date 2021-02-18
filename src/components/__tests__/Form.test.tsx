import { render } from "@testing-library/react";
import { ReactNode } from "react";
import Form from "../Form";
import { MemoryRouter } from "react-router-dom";

const wrapper = ({children}: {children: ReactNode}) => (
    <MemoryRouter initialEntries={["/vm?pattern=nickel"]}>{children}</MemoryRouter>
)

test("Form should render input with value of pattern", () => {
    const {getByRole} = render(<Form />, {wrapper});
    expect(getByRole('textbox')).toHaveValue('nickel');
});
