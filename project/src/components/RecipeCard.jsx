import { Heart, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

function RecipeCard({ recipe }) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe);
  };

  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`} className="recipe-card-link">
        <div className="recipe-image-container">
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <button 
            className={`favorite-btn ${isFavorite(recipe.id) ? 'active' : ''}`}
            onClick={handleFavoriteClick}
          >
            <Heart size={20} fill={isFavorite(recipe.id) ? 'currentColor' : 'none'} />
          </button>
        </div>
        
        <div className="recipe-card-content">
          <h3 className="recipe-title">{recipe.title}</h3>
          <p className="recipe-description">{recipe.description}</p>
          
          <div className="recipe-meta">
            <div className="meta-item">
              <Clock size={16} />
              <span>{recipe.cookTime} min</span>
            </div>
            <div className="meta-item">
              <Users size={16} />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
          
          <div className="recipe-rating">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`star ${i < Math.floor(recipe.rating) ? 'filled' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="rating-text">({recipe.reviews} reviews)</span>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .recipe-card {
          background-color: var(--white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
        }

        .recipe-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }

        .recipe-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .recipe-image-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .recipe-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .recipe-card:hover .recipe-image {
          transform: scale(1.05);
        }

        .favorite-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background-color: var(--white);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--neutral-400);
          box-shadow: var(--shadow-sm);
        }

        .favorite-btn:hover {
          color: var(--accent);
          transform: scale(1.1);
        }

        .favorite-btn.active {
          color: var(--accent);
        }

        .recipe-card-content {
          padding: 20px;
        }

        .recipe-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--neutral-900);
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .recipe-description {
          color: var(--neutral-600);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .recipe-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 12px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--neutral-500);
          font-size: 0.85rem;
        }

        .recipe-rating {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .rating-stars {
          display: flex;
          gap: 2px;
        }

        .star {
          color: var(--neutral-300);
          font-size: 1rem;
        }

        .star.filled {
          color: var(--warning);
        }

        .rating-text {
          color: var(--neutral-500);
          font-size: 0.85rem;
        }

        @media (max-width: 480px) {
          .recipe-card-content {
            padding: 12px;
          }
          .recipe-title {
            font-size: 1rem;
          }
          .recipe-description {
            font-size: 0.8rem;
          }
          .recipe-meta {
            gap: 8px;
            flex-direction: column;
            align-items: flex-start;
          }
          .meta-item {
            font-size: 0.8rem;
          }
          .recipe-rating {
            gap: 4px;
          }
          .favorite-btn {
            width: 32px;
            height: 32px;
            top: 8px;
            right: 8px;
          }
          .recipe-image-container {
            height: 140px;
          }
        }
      `}</style>
    </div>
  );
}

export default RecipeCard;