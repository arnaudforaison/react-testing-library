import { render } from "@testing-library/react"
import Button from "../Button"

test('Button should render coucou text', () => {
    const {getByRole} = render(<Button>coucou</Button>);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveTextContent('coucou');
});

test('Button match snapshot', () => {
    const {asFragment} = render (<Button>Snapshot</Button>);
    expect(asFragment()).toMatchSnapshot();
})