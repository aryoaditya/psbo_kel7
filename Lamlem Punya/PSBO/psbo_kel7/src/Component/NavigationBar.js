import { Navbar, Container, Nav, NavbarBrand} from "react-bootstrap"
import  Image from "../assets/image/logoo.png"

const NavigationBar = () => {
    return(
        <Navbar className="navbg" variant="dark">
            <Container>
            <NavbarBrand>
                <div className="logo"><img src={Image} alt="logo" 
                style={{resizemode: "logo", height: 60, width: 75}}/>
                DIGIFARM 
                </div>
            </NavbarBrand>
            <Nav>
                <Nav.Link>Dashboard</Nav.Link>
                <Nav.Link>Monitoring</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar