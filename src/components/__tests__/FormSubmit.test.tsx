import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormSubmit from "../FormSubmit";
import * as service from '../../common/service';

test("FormSubmit should display new formValue after typing", () => {
  render(<FormSubmit value="coucou" />);
  expect(screen.getByText(/coucou/)).toBeInTheDocument();
  expect(screen.queryByLabelText("infos")).not.toBeInTheDocument();

  userEvent.type(screen.getByRole("textbox"), " Nono");
  expect(screen.getByLabelText("formValue")).toHaveTextContent("coucou Nono");
  expect(screen.queryByLabelText("infos")).not.toBeInTheDocument();
});

test("FormSubmit should display name & address", async () => {
  jest.spyOn(service, 'callApi').mockResolvedValue({ name: "Alien", address: "Mars" });

  render(<FormSubmit value="coucou" />);
  expect(screen.getByText(/coucou/)).toBeInTheDocument();
  expect(screen.queryByLabelText("infos")).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button"));

  await waitFor(() =>
    expect(screen.getByLabelText("infos")).toHaveTextContent(
      /alien habite mars/i
    )
  );
});
