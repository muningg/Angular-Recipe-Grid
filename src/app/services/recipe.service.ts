import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../Models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Choco-Crackle Peanut Butter Cups',
      description: 'Rich chocolate cups filled with creamy peanut butter',
      image: 'assets/1.jpg',
      category: 'Dessert',
      ingredients: [
        '2% white malties',
        '1tsp cocoa butter',
        '100g sugar syrup',
        '250g milk chocolate',
        '375g Crunchy Dark chocolate'
      ],
      isTrending: true,
      reviews: 245
    },
    {
      id: 2,
      name: 'Lemon Cheesecake Bars',
      description: 'Creamy cheesecake bars with a zesty lemon twist',
      image: 'assets/2.jpg',
      category: 'Dessert',
      ingredients: [
        '200g graham cracker crumbs',
        '50g sugar',
        '1 cup cream cheese',
        '2 eggs',
        '1/4 cup lemon juice'
      ],
      isTrending: true,
      reviews: 150
    },
    {
      id: 3,
      name: 'Banoffee Pie',
      description: 'A delicious pie with layers of bananas, toffee, and whipped cream',
      image: 'assets/3.jpg',
      category: 'Dessert',
      ingredients: [
        '200g digestive biscuits',
        '100g melted butter',
        '400g dulce de leche',
        '3 ripe bananas',
        '300ml double cream'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 4,
      name: 'Chocolate Lava Cake',
      description: 'Warm molten chocolate cake with a gooey center',
      image: 'assets/4.jpg',
      category: 'Dessert',
      ingredients: [
        '200g dark chocolate',
        '100g butter',
        '2 eggs',
        '2 tbsp flour',
        '1/4 cup sugar'
      ],
      isTrending: true,
      reviews: 300
    },
    {
      id: 5,
      name: 'Strawberry Shortcake',
      description: 'Fluffy shortcakes topped with fresh strawberries and whipped cream',
      image: 'assets/5.jpg',
      category: 'Dessert',
      ingredients: [
        '2 cups flour',
        '1 cup heavy cream',
        '1/2 cup sugar',
        '2 cups strawberries',
        '1/4 cup butter'
      ],
      isTrending: true,
      reviews: 225
    },
    {
      id: 6,
      name: 'Peach Cobbler',
      description: 'Warm, sweet peaches baked under a buttery biscuit crust',
      image: 'assets/6.jpg',
      category: 'Dessert',
      ingredients: [
        '3 cups fresh peaches',
        '1/4 cup sugar',
        '1 cup flour',
        '1/4 cup butter',
        '1 tsp vanilla extract'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 7,
      name: 'Carrot Cake',
      description: 'Moist carrot cake with cream cheese frosting',
      image: 'assets/7.jpg',
      category: 'Dessert',
      ingredients: [
        '2 cups grated carrots',
        '1/2 cup sugar',
        '1 1/2 cups flour',
        '1 tsp cinnamon',
        '1/2 cup cream cheese'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 8,
      name: 'Raspberry Sorbet',
      description: 'Refreshing raspberry sorbet made with fresh fruit',
      image: 'assets/8.jpg',
      category: 'Dessert',
      ingredients: [
        '500g raspberries',
        '250g sugar',
        '1 cup water',
        '1 tsp lemon juice'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 9,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
      image: 'assets/9.jpg',
      category: 'Dessert',
      ingredients: [
        '6 egg yolks',
        '1/2 cup sugar',
        '500g mascarpone cheese',
        '1 cup strong coffee',
        '1 package ladyfingers'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 10,
      name: 'Lemon Meringue Pie',
      description: 'Tart lemon filling topped with fluffy meringue on a buttery crust',
      image: 'assets/10.jpg',
      category: 'Dessert',
      ingredients: [
        '1 pie crust',
        '1 cup sugar',
        '3 egg yolks',
        '1/2 cup lemon juice',
        '3 egg whites'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 11,
      name: 'Coconut Macaroons',
      description: 'Chewy coconut macaroons dipped in chocolate',
      image: 'assets/11.jpg',
      category: 'Dessert',
      ingredients: [
        '2 cups shredded coconut',
        '1/4 cup sugar',
        '2 egg whites',
        '1/2 tsp vanilla extract'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 12,
      name: 'Pumpkin Pie',
      description: 'Spicy and creamy pumpkin pie in a flaky crust',
      image: 'assets/12.jpg',
      category: 'Dessert',
      ingredients: [
        '1 pie crust',
        '2 cups pumpkin puree',
        '3/4 cup sugar',
        '1/2 tsp cinnamon',
        '3 eggs'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 13,
      name: 'Chocolate Eclairs',
      description: 'Crisp pastry filled with chocolate custard and topped with glaze',
      image: 'assets/13.jpg',
      category: 'Dessert',
      ingredients: [
        '1 cup water',
        '1/2 cup butter',
        '1 cup flour',
        '3 eggs',
        '1 cup chocolate'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 14,
      name: 'Apple Crisp',
      description: 'A warm apple dessert with a crispy oat topping',
      image: 'assets/14.jpg',
      category: 'Dessert',
      ingredients: [
        '6 apples',
        '1/4 cup sugar',
        '1 cup oats',
        '1/2 cup butter',
        '1 tsp cinnamon'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 15,
      name: 'Chocolate Chip Cookies',
      description: 'Chewy chocolate chip cookies that are golden brown and irresistible',
      image: 'assets/15.jpg',
      category: 'Dessert',
      ingredients: [
        '2 1/4 cups flour',
        '1 cup butter',
        '1 cup brown sugar',
        '2 cups chocolate chips',
        '1 tsp vanilla extract'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 16,
      name: 'Pavlova',
      description: 'A meringue-based dessert topped with fresh fruit',
      image: 'assets/16.jpg',
      category: 'Dessert',
      ingredients: [
        '4 egg whites',
        '1 cup sugar',
        '1 tsp vanilla extract',
        '1/2 cup whipped cream',
        'Fresh fruit'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 17,
      name: 'Baked Alaska',
      description: 'A dessert of cake and ice cream covered with meringue and baked briefly',
      image: 'assets/17.jpg',
      category: 'Dessert',
      ingredients: [
        '1 sponge cake',
        '1 quart vanilla ice cream',
        '3 egg whites',
        '1/2 cup sugar'
      ],
      isTrending: false,
      reviews: 0
    },
    {
      id: 18,
      name: 'Churros',
      description: 'Crispy fried dough dusted with cinnamon sugar',
      image: 'assets/18.jpg',
      category: 'Dessert',
      ingredients: [
        '1 cup water',
        '2 tbsp sugar',
        '1 cup flour',
        '1 tsp cinnamon',
        '1/4 cup butter'
      ],
      isTrending: false,
      reviews: 0
    }
  ];

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

}