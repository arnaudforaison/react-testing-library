import { getByText, render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { SuperContext } from "../../App";
import Article from "../Article";

const wrapper = (value:number) => ({ children }: { children?: ReactNode }) => (
  <SuperContext.Provider value={value}>{children}</SuperContext.Provider>
);

test("Article should display Pas mon enfant", () => {
  const { container } = render(<Article />, {wrapper: wrapper(3)});
  expect(getByText(container, /pas mon enf/i)).toBeInTheDocument();
});

test("Article should display child content", () => {
    render(<Article>coucou</Article>, {wrapper: wrapper(5)});
    expect(screen.getByText(/coucou/i)).toBeInTheDocument();
    expect(screen.queryByText(/enfant/i)).not.toBeInTheDocument();
  });
