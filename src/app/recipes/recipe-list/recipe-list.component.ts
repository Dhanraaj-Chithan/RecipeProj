import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes :Recipe[] =[
    new Recipe('Cake','Dessert',
    'https://commons.wikimedia.org/wiki/File:Recipe-575434.svg'),
    new Recipe('Pasta','Italian',
    'https://commons.wikimedia.org/wiki/File:Recipe-575434.svg')
  ];

  constructor() { }

  ngOnInit() {
  }

}