import { Dispatch, SetStateAction, useState } from "react";
import { callApi, Infos } from "../common/service";

const handleOnSubmit = (
  value: string,
  setInfos: Dispatch<SetStateAction<Infos>>
) => async () => {
  setInfos(await callApi(value));
};

type Props = { value: string };
const FormSubmit = ({ value: initialValue }: Props) => {
  const [value, setValue] = useState(initialValue);
  const [infos, setInfos] = useState<Infos>();
  return (
    <>
      <form onSubmit={handleOnSubmit(value, setInfos)}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <span aria-label="formValue">{value}</span>
        <button type="submit">Valider</button>
      </form>
      {infos && (
        <span aria-label="infos">
          {infos.name} habite {infos.address}
        </span>
      )}
    </>
  );
};
export default FormSubmit;
