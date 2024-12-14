import SignatoryList from "./components/SignatoryList";
import FloatingButton from "./components/FloatingButton";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header/Header";
import InfoPanel from "./components/InfoPanel/InfoPanel";

const App = () => (
  <>
    <Header />
    <Container
      fluid
      style={{
        marginTop: "20px",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Row style={{ marginTop: "20px" }}>
        {/* InfoPanel and SignatoryList columns */}
        <Col md={8} className="mb-3">
          <InfoPanel />
        </Col>
        <Col md={4} className="mb-3">
          <SignatoryList />
        </Col>
      </Row>
    </Container>
    <FloatingButton />
  </>
);

export default App;
