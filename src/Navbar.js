import { LogoLink } from "components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl} from "components/misc/Layouts";
import tw from "twin.macro";
import logo from "images/vit_logo.png";

const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;

const Navbar = () => {
  
  return (    
      <Container tw="bg-gray-100 pt-4 px-8 pb-4">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img src={logo} alt="" />
              Availability
            </LogoLink>
            <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
              <NavLink href="/">
                Home
              </NavLink>
              <NavLink href="/Add">
                Add Leads
              </NavLink>
              <NavLink href="/Search">
                Search Leads
              </NavLink>
              <div tw="md:hidden flex-100 h-0"></div>
              <PrimaryNavLink target="_blank" href="./">
                Download App
              </PrimaryNavLink>
            </div>
          </NavRow>
        </Content2Xl>
      </Container>    
  );
};

export default Navbar;