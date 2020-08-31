import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shopping-list/shoping-list.services';

@Injectable()
export class RecipeSerices {

    recipeSelected = new EventEmitter()

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
            new Ingredient('Hljeb', 1),
            new Ingredient('Pašeta', 2)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[])
    ];

    constructor(private slService:ShopingListService){}


    getRecipes(){
       return this.recipes.slice()
    }
    getRecipe(index:number){
      return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}
