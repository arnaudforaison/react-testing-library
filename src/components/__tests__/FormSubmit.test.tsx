import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormSubmit from "../FormSubmit";
import * as service from "../../common/service";

test("FormSubmit should display new value", () => {
  render(<FormSubmit value="coucou" />);

  expect(screen.getByLabelText("formValue")).toHaveTextContent("coucou");

  userEvent.type(screen.getByRole("textbox"), " Arnaud");

  expect(screen.getByLabelText("formValue")).toHaveTextContent("coucou Arnaud");
  expect(screen.queryByText(/habite/)).not.toBeInTheDocument();
});

test("FormSubmit should display name & address", async () => {
  const spyCallApi = jest
    .spyOn(service, "callApi")
    .mockResolvedValue({ name: "Alien", address: "Mars" });

  render(<FormSubmit value="coucou" />);

  fireEvent.click(screen.getByRole("button"));

  await waitFor(() =>
    expect(screen.getByLabelText("infos")).toHaveTextContent(
      /alien habite mars/i
    )
  );

  expect(spyCallApi).toHaveBeenCalledTimes(1);
});
