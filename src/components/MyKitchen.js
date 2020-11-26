import { useState } from "react";
// import Recipe from "./Recipe";
import RecipesDone from "./RecipesDone";
import { CardDeck, Badge } from "react-bootstrap";

import "./MyKitchen.css";
import Recipes from "./Recipes";
import { allDishes } from "./myKitchenDishes";

const MyKitchen = () => {
  const [allRecipes, setAllRecipes] = useState(allDishes);

  const [countRecipesMade, setCountRecipesMade] = useState(0);

  const handlePreparedClick = (name) => {
    setAllRecipes(allRecipes, (allRecipes[name].readyToEat = true));
    setCountRecipesMade((prevState) => prevState + 1);
  };

  const handleEatClick = (name) => {
    setAllRecipes(allRecipes, (allRecipes[name].readyToEat = false));
    setCountRecipesMade((prevState) => prevState - 1);
  };

  return (
    <div>
      <h1 className="text-center">Recipes</h1>
      <h3 className="text-center">
        Recipes made:{" "}
        <Badge variant="secondary">
          {Object.keys(allRecipes).length - countRecipesMade}
        </Badge>
      </h3>
      <CardDeck>
        <Recipes
          allRecipes={allRecipes}
          onPrepareClicked={handlePreparedClick}
        />
      </CardDeck>
      {countRecipesMade > 0 && (
        <div>
          <h1 className="text-center">Ready To Eat!</h1>
          <h3 className="text-center">
            Recipes made: <Badge variant="secondary">{countRecipesMade}</Badge>
          </h3>
          <CardDeck>
            <RecipesDone
              allRecipes={allRecipes}
              onEatClicked={handleEatClick}
            />
          </CardDeck>
        </div>
      )}
    </div>
  );
};

export default MyKitchen;
