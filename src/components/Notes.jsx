import { Button, Dropdown, Card, Row, Col } from "react-bootstrap"

export default function Notes(props){

    function handleLectureNotes(){
        console.log("success");
        alert("Not implemented yet.");
    }

    function handleStudyGuides(){
        console.log("success two");
        alert("Not implemented yet.");
    }

    function handleFlashCards(){
        console.log("success three");
        alert("Not implemented yet.");
    }

    return <>
        <h1>{props.courseName} Notes</h1>
        <hr/>
        <Row className="g-3">
            <Col xs={12} lg={4}>
                <Card className="my-card" onClick={handleLectureNotes}>
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <h1 className="m-0">Lecture Notes</h1>
                    </div>
                </Card>
            </Col>
            <Col xs={12} lg={4}>
                <Card className="my-card" onClick={handleStudyGuides}>
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <h1 className="m-0">Study Guides</h1>
                    </div>
                </Card>
            </Col>
            <Col xs={12} lg={4}>
                <Card className="my-card" onClick={handleFlashCards}>
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <h1 className="m-0">Flash Cards</h1>
                    </div>                 
                </Card>
            </Col>
        </Row>
       
        </>
    
    
}