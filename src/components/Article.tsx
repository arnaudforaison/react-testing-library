import { ComponentPropsWithoutRef, useContext } from "react";
import { SuperContext } from "../App";

type Props = ComponentPropsWithoutRef<"article">;
const Article = ({ children, ...props }: Props) => {
  const superValue = useContext(SuperContext);
  return (
    <article {...props}>
      {superValue === 3 ? "Pas mon enfant" : children}
    </article>
  );
};
export default Article;
