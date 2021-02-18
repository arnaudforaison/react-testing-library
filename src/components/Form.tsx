import useQueryString from "../common/useQueryString";

const Form = () => {
const pattern = useQueryString('pattern')
  return (
    <form>
      <label>
          Pattern
        <input type="text" defaultValue={pattern} />
      </label>
    </form>
  );
};

export default Form;
