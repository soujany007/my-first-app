import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://p1.pxfuel.com/preview/945/664/960/pizza-cooking-eat-tasty-recipe-healthy.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://p1.pxfuel.com/preview/945/664/960/pizza-cooking-eat-tasty-recipe-healthy.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
