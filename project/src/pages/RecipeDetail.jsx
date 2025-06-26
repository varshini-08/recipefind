import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Clock, Users, ChefHat, ArrowLeft, Star } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { getRecipeById } from '../data/mockRecipes';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = getRecipeById(id);
  const { isFavorite, toggleFavorite } = useFavorites();
  const [activeTab, setActiveTab] = useState('ingredients');

  if (!recipe) {
    return (
      <div className="recipe-detail-page">
        <div className="container">
          <div className="not-found">
            <h2>Recipe Not Found</h2>
            <p>The recipe you're looking for doesn't exist.</p>
            <Link to="/explore" className="btn btn-primary">
              Back to Explore
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleFavoriteClick = () => {
    toggleFavorite(recipe);
  };

  return (
    <div className="recipe-detail-page">
      <div className="container">
        {/* Back Button */}
        <Link to="/explore" className="back-button">
          <ArrowLeft size={20} />
          Back to Explore
        </Link>

        {/* Recipe Header */}
        <div className="recipe-header">
          <div className="recipe-image-container">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <button 
              className={`favorite-btn ${isFavorite(recipe.id) ? 'active' : ''}`}
              onClick={handleFavoriteClick}
            >
              <Heart size={24} fill={isFavorite(recipe.id) ? 'currentColor' : 'none'} />
            </button>
          </div>
          
          <div className="recipe-info">
            <div className="recipe-category">{recipe.category}</div>
            <h1 className="recipe-title">{recipe.title}</h1>
            <p className="recipe-description">{recipe.description}</p>
            
            <div className="recipe-meta">
              <div className="meta-item">
                <Clock className="meta-icon" />
                <span>{recipe.cookTime} min</span>
              </div>
              <div className="meta-item">
                <Users className="meta-icon" />
                <span>{recipe.servings} servings</span>
              </div>
              <div className="meta-item">
                <ChefHat className="meta-icon" />
                <span>{recipe.difficulty}</span>
              </div>
            </div>
            
            <div className="recipe-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20}
                    className={`star ${i < Math.floor(recipe.rating) ? 'filled' : ''}`}
                    fill={i < Math.floor(recipe.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="rating-text">{recipe.rating} ({recipe.reviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="recipe-content">
          {/* Tabs */}
          <div className="recipe-tabs">
            <button 
              className={`tab ${activeTab === 'ingredients' ? 'active' : ''}`}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
            <button 
              className={`tab ${activeTab === 'instructions' ? 'active' : ''}`}
              onClick={() => setActiveTab('instructions')}
            >
              Instructions
            </button>
            <button 
              className={`tab ${activeTab === 'nutrition' ? 'active' : ''}`}
              onClick={() => setActiveTab('nutrition')}
            >
              Nutrition
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'ingredients' && (
              <div className="ingredients-section">
                <h3>Ingredients</h3>
                <ul className="ingredients-list">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="ingredient-item">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'instructions' && (
              <div className="instructions-section">
                <h3>Instructions</h3>
                <ol className="instructions-list">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="instruction-item">
                      <span className="step-number">{index + 1}</span>
                      <span className="step-text">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="nutrition-section">
                <h3>Nutrition Information</h3>
                <div className="nutrition-grid">
                  <div className="nutrition-item">
                    <div className="nutrition-value">{recipe.nutrition.calories}</div>
                    <div className="nutrition-label">Calories</div>
                  </div>
                  <div className="nutrition-item">
                    <div className="nutrition-value">{recipe.nutrition.protein}g</div>
                    <div className="nutrition-label">Protein</div>
                  </div>
                  <div className="nutrition-item">
                    <div className="nutrition-value">{recipe.nutrition.carbs}g</div>
                    <div className="nutrition-label">Carbs</div>
                  </div>
                  <div className="nutrition-item">
                    <div className="nutrition-value">{recipe.nutrition.fat}g</div>
                    <div className="nutrition-label">Fat</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .recipe-detail-page {
          min-height: 100vh;
          padding: 40px 0 80px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--neutral-600);
          text-decoration: none;
          margin-bottom: 32px;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .back-button:hover {
          color: var(--primary);
          background-color: var(--neutral-100);
        }

        .recipe-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }

        .recipe-image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .recipe-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        .favorite-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background-color: var(--white);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--neutral-400);
          box-shadow: var(--shadow-lg);
        }

        .favorite-btn:hover {
          color: var(--accent);
          transform: scale(1.1);
        }

        .favorite-btn.active {
          color: var(--accent);
        }

        .recipe-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .recipe-category {
          display: inline-block;
          background-color: var(--primary);
          color: var(--white);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 16px;
          width: fit-content;
        }

        .recipe-title {
          margin-bottom: 16px;
          color: var(--neutral-900);
        }

        .recipe-description {
          font-size: 1.1rem;
          color: var(--neutral-600);
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .recipe-meta {
          display: flex;
          gap: 32px;
          margin-bottom: 24px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--neutral-600);
        }

        .meta-icon {
          color: var(--primary);
        }

        .recipe-rating {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .rating-stars {
          display: flex;
          gap: 4px;
        }

        .star {
          color: var(--neutral-300);
        }

        .star.filled {
          color: var(--warning);
        }

        .rating-text {
          color: var(--neutral-600);
          font-weight: 500;
        }

        .recipe-content {
          background-color: var(--white);
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
          overflow: hidden;
        }

        .recipe-tabs {
          display: flex;
          border-bottom: 1px solid var(--neutral-200);
        }

        .tab {
          flex: 1;
          padding: 20px;
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          color: var(--neutral-600);
          cursor: pointer;
          transition: all 0.2s ease;
          border-bottom: 3px solid transparent;
        }

        .tab:hover {
          background-color: var(--neutral-50);
        }

        .tab.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
          background-color: var(--neutral-50);
        }

        .tab-content {
          padding: 40px;
        }

        .tab-content h3 {
          margin-bottom: 24px;
          color: var(--neutral-900);
        }

        .ingredients-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 12px;
        }

        .ingredient-item {
          padding: 12px 16px;
          background-color: var(--neutral-50);
          border-radius: 8px;
          border-left: 4px solid var(--primary);
        }

        .instructions-list {
          list-style: none;
          counter-reset: step-counter;
        }

        .instruction-item {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          padding: 20px;
          background-color: var(--neutral-50);
          border-radius: 12px;
          counter-increment: step-counter;
        }

        .step-number {
          width: 32px;
          height: 32px;
          background-color: var(--primary);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }

        .step-number::before {
          content: counter(step-counter);
        }

        .step-text {
          line-height: 1.6;
          color: var(--neutral-700);
        }

        .nutrition-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 24px;
        }

        .nutrition-item {
          text-align: center;
          padding: 24px;
          background-color: var(--neutral-50);
          border-radius: 12px;
          border-top: 4px solid var(--secondary);
        }

        .nutrition-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 8px;
        }

        .nutrition-label {
          color: var(--neutral-600);
          font-weight: 500;
        }

        .not-found {
          text-align: center;
          padding: 80px 20px;
          max-width: 500px;
          margin: 0 auto;
        }

        .not-found h2 {
          margin-bottom: 16px;
          color: var(--neutral-800);
        }

        .not-found p {
          margin-bottom: 32px;
          color: var(--neutral-600);
        }

        @media (max-width: 768px) {
          .recipe-detail-page {
            padding: 20px 0 60px;
          }

          .recipe-header {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .recipe-image {
            height: 250px;
          }

          .recipe-meta {
            gap: 20px;
          }

          .tab-content {
            padding: 24px;
          }

          .ingredients-list {
            grid-template-columns: 1fr;
          }

          .instruction-item {
            gap: 16px;
            padding: 16px;
          }

          .nutrition-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default RecipeDetail;