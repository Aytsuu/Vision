import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const Header = ({section}) => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">VISION</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      </NavbarContent>
      <NavbarContent justify="end">
        {section =='profile' ?
        <>
          <NavbarItem>
            <Link to='/'>
              <Button color="primary" variant="flat">
                Sign Out
              </Button>
            </Link>
          </NavbarItem>
        </> : 
        <>
        <NavbarItem className="hidden lg:flex">
          <Link to='/register'>Register</Link>
        </NavbarItem>
        <NavbarItem>
            <Link to='/scan'>
              <Button color="primary" variant="flat">
                Scan
              </Button>
            </Link>
          </NavbarItem>
        </>
        }
      </NavbarContent>
    </Navbar>
  );
}

export default Header