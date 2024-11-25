import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../Models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  standalone: false,
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  currentView: 'mobile' | 'tablet' | 'desktop' = 'desktop';
  expandedRecipeId: number | null = null;

  constructor(private recipeService: RecipeService) {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.loadRecipes();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  toggleIngredients(recipeId: number): void {
    this.expandedRecipeId = this.expandedRecipeId === recipeId ? null : recipeId;
  }

  private loadRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      recipes => this.recipes = recipes
    );
  }

  private checkScreenSize(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.currentView = 'mobile';
    } else if (width < 1024) {
      this.currentView = 'tablet';
    } else {
      this.currentView = 'desktop';
    }
  }

  setView(view: 'mobile' | 'tablet' | 'desktop'): void {
    this.currentView = view;
  }
}