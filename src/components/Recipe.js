import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Recipe = ({ name, recipe, imgSource, onButtonClicked, buttonName }) => {
  return (
    <Card style={{ minWidth: "18rem", maxWidth: "18rem" }}>
      <Card.Img variant="top" src={imgSource} style={{ height: "12rem" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{recipe}</Card.Text>
      </Card.Body>
      <Button
        variant={buttonName === "Eat!" ? "outline-danger" : "outline-primary"}
        style={{ margin: "2rem" }}
        onClick={() => onButtonClicked(name)}
      >
        {buttonName}
      </Button>
    </Card>
  );
};

Recipe.protoTypes = {
  name: PropTypes.string.isRequired,
  recipe: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired,
  obButtonClicked: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default Recipe;
