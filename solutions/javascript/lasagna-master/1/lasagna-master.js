export function cookingStatus(timer) {
  if (timer === undefined) {
    return "You forgot to set the timer.";
  } else if (timer === 0) {
    return "Lasagna is done.";
  }
  return "Not done, please wait.";
}

export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (let layer of layers) {
    if (layer === "noodles") noodles++;
    if (layer === "sauce") sauce++;
  }

  return {
    noodles: noodles * 50,
    sauce: sauce * 0.2,
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  if (portions === undefined || portions === 2) {
    return recipe;
  }

  const factor = portions / 2;
  const newRecipe = {};

  for (let key in recipe) {
    newRecipe[key] = recipe[key] * factor;
  }

  return newRecipe;
}