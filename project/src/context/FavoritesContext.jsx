import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('recipeFinderFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const addToFavorites = (recipe) => {
    const newFavorites = [...favorites, recipe];
    setFavorites(newFavorites);
    localStorage.setItem('recipeFinderFavorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (recipeId) => {
    const newFavorites = favorites.filter(recipe => recipe.id !== recipeId);
    setFavorites(newFavorites);
    localStorage.setItem('recipeFinderFavorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (recipeId) => {
    return favorites.some(recipe => recipe.id === recipeId);
  };

  const toggleFavorite = (recipe) => {
    if (isFavorite(recipe.id)) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}