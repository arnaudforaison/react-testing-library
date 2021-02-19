import { getByText, render, screen } from "@testing-library/react"
import FormComplexe from "../FormComplex"

test('FormComplexe should render copyright into footer', () => {
    const {getByRole} = render(<FormComplexe />);
    const footer = getByRole('contentinfo');

    expect(getByText(footer, 'Copyright')).toBeInTheDocument();

    expect(screen.getAllByText(/paragraphe/i)).toHaveLength(2);
    
})