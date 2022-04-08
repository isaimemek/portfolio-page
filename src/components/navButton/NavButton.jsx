import { Link } from "react-scroll";
import { BiArrowToBottom } from "react-icons/bi";

function NavButton({ Page }) {
  return (
    <div className="hidden 2xl:flex text-blue-700 font-semibold py-1 hover:border border-transparent rounded hover:cursor-pointer">
      <Link
        className=""
        activeClass="active"
        to={Page}
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={500}
      >
        <div className="text-center">
          {Page}
          <div className="mx-12">
            <BiArrowToBottom />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NavButton;
