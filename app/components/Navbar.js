import React from 'react';


const CustomNavbar = () => {
  return (
    <Navbar style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: 'bold', color: '#fff' }}>Sri Lanka Map</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: '#fff' }}>Home</Nav.Link>
            <Nav.Link href="#about" style={{ color: '#fff' }}>About</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#fff' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;