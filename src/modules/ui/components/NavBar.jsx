import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-[#5a5370]! p-3! w-full h-15 sticky! top-0 z-10">
      <Container className=" w-full m-0!">
        <Navbar.Brand href="#home" className="text-[#a995c9]! sticky!">MK</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="hover:text-[#a995c9]!">Home</Nav.Link>
            <Nav.Link href="#link" className="hover:text-[#a995c9]!">Skills</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown"  className="hover:text-[#a995c9]!">
              <NavDropdown.Item href="#action/3.1" className="hover:text-[#a995c9]!">MUSAI</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="hover:text-[#a995c9]!">
                AI SAAS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="hover:text-[#a995c9]!">Nimbus Keyboards</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4" className="hover:text-[#a995c9]!">
                Nimbus KeyBoards
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;