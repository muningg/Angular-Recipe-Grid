import { Routes } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';
export const routes: Routes = [
    { path: 'recipes', component: RecipeComponent }, // Use RecipeComponent, not RecipeService
    { path: '', redirectTo: '/recipes', pathMatch: 'full' } // Redirect to recipes by default
];