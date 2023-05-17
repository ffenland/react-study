import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const Navbar = tw.ul`
 flex
 bg-slate-500
`;
const Header = () => {
  return (
    <Navbar>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/about"}>ABOUT</Link>
      </li>
    </Navbar>
  );
};

export default Header;
