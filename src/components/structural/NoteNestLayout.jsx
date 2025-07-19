import { Container, Navbar, Nav } from "react-bootstrap";
import {Link, Outlet} from "react-router";
import logo from '../../../docs/assets/notenest_logo_placeholder.jpeg';
import useStorage from "../../hooks/useStorage";
import CourseChosenContext from "../../contexts/CourseChosenContext";

function NoteNestLayout(){

    // Session storage var to track if user has chosen a course
    const [courseChosen, setCourseChosen] = useStorage("chosen", "");

    return (
        <div>
            <Navbar fixed="top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img   
                            alt="NoteNest Logo"
                            src={logo}
                            width="30"
                            height="30"
                            style={{transform: 'rotate(15deg)'}}
                            className="d-inline-block align-top"
                        />{'  '}
                        <em>NoteNest</em>
                    </Navbar.Brand>
                    
                    <Nav className="me-auto">
                            <Nav.Link as = {Link} to="/">Find Your Course</Nav.Link>
                            {courseChosen ?
                                <> 
                                    <Nav.Link as = {Link} to={`notes/${courseChosen}`}>Notes</Nav.Link>
                                    <Nav.Link as = {Link} to={`studysesh/${courseChosen}`}>StudySesh</Nav.Link>
                                </>
                                :
                                <>
                                </>
                            }
                    </Nav>
                </Container>
                {courseChosen ?
                    <>
                        <h2 style={{paddingRight: "2rem"}}><em>{courseChosen.toUpperCase()}</em></h2>
                    </>
                    :
                    <>
                    </>
                }
            </Navbar>
            <div style={{ margin: "1rem" }}>
                <CourseChosenContext.Provider value={[courseChosen, setCourseChosen]}>
                    <Outlet />
                </CourseChosenContext.Provider>
            </div>
        </div>
    );
}

export default NoteNestLayout;