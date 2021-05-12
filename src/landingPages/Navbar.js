import { LogoLink } from "components/headers/light.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
import icon from "../images/icon.png";

const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;

const Navbar = () => {
  return (
    <Container tw='bg-gray-100 pt-4 px-8 pb-4'>
      <Content2Xl>
        <NavRow>
          <LogoLink href='/'>
            <img src={icon} alt='' />
            COVID Support
          </LogoLink>
          <div tw='flex flex-wrap justify-center lg:justify-end items-center '>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/Add'>Add Leads</NavLink>
            <NavLink href='/Search'>Search Leads</NavLink>
            <NavLink href='/Team'>Team</NavLink>
            <div tw='md:hidden flex-100 h-0'></div>
          </div>
        </NavRow>
      </Content2Xl>
    </Container>
  );
};

export default Navbar;
