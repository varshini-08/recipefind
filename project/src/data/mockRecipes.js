export const mockRecipes = [
  {
    id: 1,
    title: "Creamy Chicken Alfredo",
    description: "Rich and creamy pasta dish with tender chicken and authentic alfredo sauce",
    image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: 30,
    servings: 4,
    rating: 4.8,
    reviews: 342,
    ingredients: ["chicken breast", "fettuccine pasta", "heavy cream", "parmesan cheese", "garlic", "butter"],
    instructions: [
      "Cook fettuccine pasta according to package directions",
      "Season and cook chicken breast until golden brown",
      "In same pan, add garlic and cook until fragrant",
      "Add heavy cream and parmesan cheese, simmer until thickened",
      "Combine pasta, chicken, and sauce",
      "Serve immediately with extra parmesan"
    ],
    category: "Main Course",
    difficulty: "Medium",
    nutrition: {
      calories: 520,
      protein: 35,
      carbs: 42,
      fat: 22
    }
  },
  {
    id: 2,
    title: "Mediterranean Quinoa Bowl",
    description: "Healthy and colorful bowl packed with quinoa, fresh vegetables, and tahini dressing",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: 25,
    servings: 2,
    rating: 4.6,
    reviews: 189,
    ingredients: ["quinoa", "cucumber", "cherry tomatoes", "red onion", "feta cheese", "olives", "tahini"],
    instructions: [
      "Cook quinoa according to package directions and let cool",
      "Dice cucumber, tomatoes, and red onion",
      "Whisk tahini with lemon juice and water to make dressing",
      "Combine quinoa with vegetables",
      "Top with feta cheese and olives",
      "Drizzle with tahini dressing before serving"
    ],
    category: "Healthy",
    difficulty: "Easy",
    nutrition: {
      calories: 380,
      protein: 15,
      carbs: 45,
      fat: 18
    }
  },
  {
    id: 3,
    title: "Classic Beef Burger",
    description: "Juicy beef patty with fresh lettuce, tomato, and special sauce on brioche bun",
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: 20,
    servings: 4,
    rating: 4.7,
    reviews: 456,
    ingredients: ["ground beef", "brioche buns", "lettuce", "tomato", "cheese", "onion", "pickles"],
    instructions: [
      "Form ground beef into patties and season with salt and pepper",
      "Cook patties on grill or skillet for 4-5 minutes per side",
      "Toast brioche buns lightly",
      "Layer lettuce, tomato, and onion on bottom bun",
      "Add cooked patty and cheese",
      "Top with pickles and special sauce, then top bun"
    ],
    category: "American",
    difficulty: "Easy",
    nutrition: {
      calories: 650,
      protein: 35,
      carbs: 38,
      fat: 35
    }
  },
  {
    id: 4,
    title: "Thai Green Curry",
    description: "Aromatic and spicy curry with coconut milk, vegetables, and fresh herbs",
    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: 35,
    servings: 4,
    rating: 4.9,
    reviews: 278,
    ingredients: ["green curry paste", "coconut milk", "chicken thigh", "thai basil", "bell peppers", "bamboo shoots"],
    instructions: [
      "Heat oil in wok and fry curry paste until fragrant",
      "Add thick coconut milk and stir until oil separates",
      "Add chicken and cook until almost done",
      "Add vegetables and remaining coconut milk",
      "Simmer until vegetables are tender",
      "Garnish with thai basil and serve with jasmine rice"
    ],
    category: "Thai",
    difficulty: "Medium",
    nutrition: {
      calories: 420,
      protein: 28,
      carbs: 15,
      fat: 28
    }
  },
  {
    id: 5,
    title: "Chocolate Lava Cake",
    description: "Decadent individual chocolate cakes with molten chocolate center",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: 15,
    servings: 4,
    rating: 4.8,
    reviews: 523,
    ingredients: ["dark chocolate", "butter", "eggs", "sugar", "flour", "vanilla extract"],
    instructions: [
      "Preheat oven to 425°F and butter ramekins",
      "Melt chocolate and butter in double boiler",
      "Whisk eggs and sugar until thick and pale",
      "Fold in melted chocolate mixture and flour",
      "Fill ramekins and bake for 12-14 minutes",
      "Let rest 1 minute, then invert onto plates and serve immediately"
    ],
    category: "Dessert",
    difficulty: "Medium",
    nutrition: {
      calories: 380,
      protein: 8,
      carbs: 35,
      fat: 24
    }
  },
  {
    id: 6,
    title: "Caesar Salad",
    description: "Crisp romaine lettuce with homemade caesar dressing and parmesan cheese",
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: 15,
    servings: 4,
    rating: 4.5,
    reviews: 234,
    ingredients: ["romaine lettuce", "parmesan cheese", "croutons", "anchovies", "garlic", "lemon juice", "olive oil"],
    instructions: [
      "Wash and chop romaine lettuce into bite-sized pieces",
      "Make dressing by whisking anchovies, garlic, lemon juice, and olive oil",
      "Toss lettuce with dressing until well coated",
      "Add croutons and toss gently",
      "Top with freshly grated parmesan cheese",
      "Serve immediately while lettuce is crisp"
    ],
    category: "Salad",
    difficulty: "Easy",
    nutrition: {
      calories: 220,
      protein: 8,
      carbs: 12,
      fat: 16
    }
  },
  {
    id: 7,
    title: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: 25,
    servings: 2,
    rating: 4.7,
    reviews: 389,
    ingredients: ["pizza dough", "tomato sauce", "fresh mozzarella", "fresh basil", "olive oil", "salt"],
    instructions: [
      "Preheat oven to 475°F with pizza stone if available",
      "Roll out pizza dough on floured surface",
      "Spread thin layer of tomato sauce, leaving border for crust",
      "Add torn pieces of fresh mozzarella",
      "Drizzle with olive oil and sprinkle with salt",
      "Bake 12-15 minutes until crust is golden and cheese is bubbly",
      "Top with fresh basil leaves before serving"
    ],
    category: "Italian",
    difficulty: "Medium",
    nutrition: {
      calories: 450,
      protein: 18,
      carbs: 55,
      fat: 18
    }
  },
  {
    id: 8,
    title: "Salmon Teriyaki",
    description: "Pan-seared salmon with sweet and savory teriyaki glaze",
    image: "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=600",
    cookTime: 20,
    servings: 4,
    rating: 4.6,
    reviews: 167,
    ingredients: ["salmon fillets", "soy sauce", "mirin", "sake", "sugar", "ginger", "garlic"],
    instructions: [
      "Pat salmon fillets dry and season with salt and pepper",
      "Heat oil in skillet over medium-high heat",
      "Cook salmon skin-side up for 4-5 minutes until golden",
      "Flip and cook 3-4 minutes more",
      "Meanwhile, combine soy sauce, mirin, sake, sugar, ginger, and garlic",
      "Pour sauce into skillet and simmer until thickened",
      "Serve salmon with teriyaki glaze and steamed rice"
    ],
    category: "Japanese",
    difficulty: "Easy",
    nutrition: {
      calories: 340,
      protein: 35,
      carbs: 12,
      fat: 16
    }
  }
];

export const categories = [
  "All",
  "Main Course",
  "Healthy",
  "American",
  "Thai",
  "Dessert",
  "Salad",
  "Italian",
  "Japanese"
];

export function searchRecipesByIngredients(ingredients) {
  const searchTerms = ingredients.toLowerCase().split(/[\s,]+/).filter(term => term.length > 0);
  
  return mockRecipes.filter(recipe => {
    return searchTerms.some(term => 
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(term)
      ) || 
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term)
    );
  });
}

export function getRecipesByCategory(category) {
  if (category === "All") return mockRecipes;
  return mockRecipes.filter(recipe => recipe.category === category);
}

export function getRecipeById(id) {
  return mockRecipes.find(recipe => recipe.id === parseInt(id));
}