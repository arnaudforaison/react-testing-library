import { fireEvent, getByText, screen, render } from "@testing-library/react"
import FormReducer from "../Calculatrice"

test('FormReducer should render a total of 1', () => {
    const {container, getByRole} = render(<FormReducer />);

    expect(getByRole('heading', {level: 1})).toHaveTextContent(/calculatrice/i)
    expect(getByText(container, 'Le total est de 0')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);

    fireEvent.click(getByRole('button', {name: '+'}));

    expect(screen.getByLabelText('count')).toHaveTextContent(/est de 1/)
})

test('FormReducer should render a total of 3', () => {
    const {container, getByRole} = render(<FormReducer initial={4} />);

    expect(getByText(container, 'Le total est de 4')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);

    fireEvent.click(getByRole('button', {name: '-'}));

    expect(screen.getByLabelText('count')).toHaveTextContent(/est de 3/)
})