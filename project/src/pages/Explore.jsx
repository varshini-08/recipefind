import { useState } from 'react';
import { Filter } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { mockRecipes, categories, getRecipesByCategory } from '../data/mockRecipes';

function Explore() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState(mockRecipes);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const recipes = getRecipesByCategory(category);
    setFilteredRecipes(recipes);
  };

  return (
    <div className="explore-page">
      <div className="container">
        <div className="page-header">
          <h1>Explore Recipes</h1>
          <p>Discover amazing recipes from various cuisines and categories</p>
        </div>

        {/* Category Filter */}
        <div className="filter-section">
          <div className="filter-header">
            <Filter size={20} />
            <span>Filter by Category</span>
          </div>
          
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Results */}
        <div className="results-section">
          <div className="results-header">
            <h2>
              {selectedCategory === 'All' 
                ? `All Recipes (${filteredRecipes.length})` 
                : `${selectedCategory} Recipes (${filteredRecipes.length})`
              }
            </h2>
          </div>
          
          <div className="recipes-grid">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .explore-page {
          min-height: 100vh;
          padding: 40px 0 80px;
        }

        .page-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .page-header h1 {
          margin-bottom: 16px;
          color: var(--neutral-900);
        }

        .page-header p {
          font-size: 1.2rem;
          color: var(--neutral-600);
          max-width: 600px;
          margin: 0 auto;
        }

        .filter-section {
          background-color: var(--white);
          padding: 32px;
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
          margin-bottom: 48px;
        }

        .filter-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          font-weight: 600;
          color: var(--neutral-800);
        }

        .category-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .category-btn {
          padding: 10px 20px;
          border: 2px solid var(--neutral-200);
          background-color: var(--white);
          color: var(--neutral-700);
          border-radius: 24px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .category-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-1px);
        }

        .category-btn.active {
          background-color: var(--primary);
          border-color: var(--primary);
          color: var(--white);
        }

        .results-section {
          margin-top: 48px;
        }

        .results-header {
          margin-bottom: 32px;
        }

        .results-header h2 {
          color: var(--neutral-900);
        }

        .recipes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        @media (max-width: 768px) {
          .explore-page {
            padding: 20px 0 60px;
          }

          .page-header {
            margin-bottom: 40px;
          }

          .filter-section {
            padding: 24px;
            margin-bottom: 32px;
          }

          .category-filters {
            gap: 8px;
          }

          .category-btn {
            padding: 8px 16px;
            font-size: 0.85rem;
          }

          .recipes-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </div>
  );
}

export default Explore;