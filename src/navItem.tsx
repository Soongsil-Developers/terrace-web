
import "./navigation.css";
//import { Link } from "react-router-dom";

interface NavProps {
  data: {
    name: string;
  };
}
export default function NavItem({ data }: NavProps): JSX.Element {
// export default function NavItem(): JSX.Element {
  const { name } = data;

  return (
    // <Link to={`${address}`} className="menu__item">
    //   { name }
    // </Link>
    // <div>F3</div>
    // <div>room4</div>
    // <div>2022-09-05-12:37:00~15:37:00</div>
    // <a id="F">F3</a>
    // <a id="room">room4</a>
    // <hr></hr>


    // <span></span>
    // <text id="room">room4</text>
    
    
    <div>
        <div>{"F3"}</div>
        <div>{"room4"}</div>
        <div>{"2022-09-05-12:37:00~15:37:00"}</div>
    </div>
  );
}