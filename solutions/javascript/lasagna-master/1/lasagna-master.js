/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time == 0) {
    return 'Lasagna is done.'
  }else if (!time) {
    return "You forgot to set the timer."
  }else{
    return "Not done, please wait."
  }
}

export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

export function quantities (layers) {
  let noodles = 0
  let sauce = 0
  layers.forEach(arr=>{
    if(arr === "noodles"){
      noodles += 50
    }else if (arr === "sauce"){
      sauce += 0.2
    }
  })
  return {noodles, sauce}
}

export function addSecretIngredient (fr, li) {
  let last = fr.at(-1)
  li.push(last)
}

export function scaleRecipe (recipe, num) {
  const newRecipe = {...recipe}
  for (let name in newRecipe) {
    newRecipe[name] *= num /2
  }
  return newRecipe
}

