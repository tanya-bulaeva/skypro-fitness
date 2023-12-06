import Button from "../Button/Button";
import * as S from "./styles";

const ButtonMain = ({ colorBtn, content, ...attrs }) => {
  const color = colorBtn === S.White ? S.White : S.Violet;

  return <Button {...attrs}>{content}</Button>;
};

export default ButtonMain;
