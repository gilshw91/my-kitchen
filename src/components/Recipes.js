import Recipe from "./Recipe";
import PropTypes from "prop-types";

const Recipes = ({ allRecipes, onPrepareClicked }) => {
  return (
    // <CardDeck>
    Object.keys(allRecipes).map((key) => {
      return (
        !allRecipes[key].readyToEat && (
          <Recipe
            className="text-center"
            key={key}
            name={key}
            recipe={allRecipes[key].recipe}
            imgSource={allRecipes[key].img}
            onButtonClicked={onPrepareClicked}
            buttonName="Prepare Dish!"
          />
        )
      );
    })
    // </CardDeck>
  );
};

Recipes.protoTypes = {
  allRecipes: PropTypes.object.isRequired,
  onPrepareClicked: PropTypes.func.isRequired,
};

export default Recipes;
