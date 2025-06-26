import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';

function Favorites() {
  const { favorites } = useFavorites();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="favorites-page">
        <div className="container">
          <div className="auth-required">
            <Heart size={64} className="auth-icon" />
            <h2>Login Required</h2>
            <p>Please log in to view and manage your favorite recipes.</p>
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-primary">Login</Link>
              <Link to="/signup" className="btn btn-outline">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="container">
        <div className="page-header">
          <div className="header-content">
            <Heart className="page-icon" />
            <div>
              <h1>My Favorite Recipes</h1>
              <p>Your saved recipes collection</p>
            </div>
          </div>
        </div>

        {favorites.length > 0 ? (
          <div className="favorites-grid">
            {favorites.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="empty-favorites">
            <Heart size={80} className="empty-icon" />
            <h2>No Favorites Yet</h2>
            <p>Start exploring recipes and save your favorites for easy access!</p>
            <Link to="/explore" className="btn btn-primary">
              Explore Recipes
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .favorites-page {
          min-height: 100vh;
          padding: 40px 0 80px;
        }

        .page-header {
          margin-bottom: 48px;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .page-icon {
          color: var(--accent);
          flex-shrink: 0;
        }

        .page-header h1 {
          margin-bottom: 8px;
          color: var(--neutral-900);
        }

        .page-header p {
          color: var(--neutral-600);
          font-size: 1.1rem;
        }

        .favorites-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .empty-favorites,
        .auth-required {
          text-align: center;
          padding: 80px 20px;
          max-width: 500px;
          margin: 0 auto;
        }

        .empty-icon,
        .auth-icon {
          color: var(--neutral-300);
          margin-bottom: 24px;
        }

        .empty-favorites h2,
        .auth-required h2 {
          margin-bottom: 16px;
          color: var(--neutral-800);
        }

        .empty-favorites p,
        .auth-required p {
          margin-bottom: 32px;
          color: var(--neutral-600);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .auth-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .favorites-page {
            padding: 20px 0 60px;
          }

          .page-header {
            margin-bottom: 32px;
          }

          .header-content {
            gap: 16px;
          }

          .favorites-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .empty-favorites,
          .auth-required {
            padding: 60px 20px;
          }

          .auth-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Favorites;