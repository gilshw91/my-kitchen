import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyKitchen from "./components/MyKitchen";
import { Jumbotron, Image, Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Jumbotron className="my-kitchen-header">
        <Image
          variant="top"
          src="https://mykitchen-mobile2020-2020.netlify.app/static/media/shop.516b403a.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="logo"
        />
        <h1 className="d-inline-block">My Kitchen</h1>
      </Jumbotron>
      <Container>
        <MyKitchen className="app p-0" />;
      </Container>
    </>
  );
};

export default App;
