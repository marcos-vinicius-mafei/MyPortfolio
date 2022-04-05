import { FancyButton } from "./style";
import { useHistory } from "react-router-dom";

const Button = ({ children, url, ...rest }) => {
  const history = useHistory();

  return (
    <FancyButton {...rest} onClick={()=>history.push(url)}>
      {children}
    </FancyButton>
  );
};

export default Button;
