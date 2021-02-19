import { fireEvent, render, screen } from "@testing-library/react";
import Calculatrice from "../Calculatrice";

describe("Calc should ", () => {
  it("display total of 1", () => {
    render(<Calculatrice />);
    const countText = screen.getByLabelText("count");
    expect(countText).toHaveTextContent(/est de 0/i);

    fireEvent.click(screen.getByRole("button", { name: "+" }));

    expect(countText).toHaveTextContent("Le total est de 1");
  });

  it("display total 0 with initial value 1", () => {
    render(<Calculatrice initial={1} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /calculatrice/i
    );

    fireEvent.click(screen.getByRole("button", { name: "-" }));

    expect(screen.getByLabelText("count")).toHaveTextContent(
      "Le total est de 0"
    );
  });
});
