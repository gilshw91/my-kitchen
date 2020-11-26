import Recipe from "./Recipe";
import PropTypes from "prop-types";

const RecipesDone = ({ allRecipes, onEatClicked }) => {
  return (
    // <CardDeck>
    Object.keys(allRecipes).map((key) => {
      return (
        allRecipes[key].readyToEat && (
          <Recipe
            className="text-center"
            key={key}
            name={key}
            recipe={allRecipes[key].recipe}
            imgSource={allRecipes[key].img}
            onButtonClicked={onEatClicked}
            buttonName="Eat!"
          />
        )
      );
    })
    // </CardDeck>
  );
};

RecipesDone.protoTypes = {
  allRecipes: PropTypes.object.isRequired,
  onEatClicked: PropTypes.func.isRequired,
};

export default RecipesDone;
