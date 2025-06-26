import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Search, Heart, Star } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import { searchRecipesByIngredients, mockRecipes } from '../data/mockRecipes';

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (ingredients) => {
    if (ingredients) {
      const results = searchRecipesByIngredients(ingredients);
      setSearchResults(results);
      setHasSearched(true);
    } else {
      setSearchResults([]);
      setHasSearched(false);
    }
  };

  const featuredRecipes = mockRecipes.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Find Amazing Recipes with Your Ingredients</h1>
              <p>
                Transform your available ingredients into delicious meals. 
                Search through thousands of recipes and discover your next favorite dish.
              </p>
            </div>
            
            <div className="hero-search">
              <SearchBar 
                onSearch={handleSearch}
                placeholder="Enter ingredients you have (e.g., chicken, tomatoes, garlic)..."
              />
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <ChefHat className="stat-icon" />
                <div>
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Recipes</div>
                </div>
              </div>
              <div className="stat">
                <Search className="stat-icon" />
                <div>
                  <div className="stat-number">Smart</div>
                  <div className="stat-label">Search</div>
                </div>
              </div>
              <div className="stat">
                <Heart className="stat-icon" />
                <div>
                  <div className="stat-number">Save</div>
                  <div className="stat-label">Favorites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results or Featured Recipes */}
      <section className="recipes-section">
        <div className="container">
          {hasSearched ? (
            <div>
              <h2>Search Results</h2>
              {searchResults.length > 0 ? (
                <div className="recipes-grid">
                  {searchResults.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <p>No recipes found with those ingredients. Try different ingredients or check out our featured recipes below!</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="section-header">
                <h2>Featured Recipes</h2>
                <Link to="/explore" className="btn btn-outline">
                  View All Recipes
                </Link>
              </div>
              <div className="recipes-grid">
                {featuredRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Recipe Finder?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🔍</div>
              <h3>Smart Ingredient Search</h3>
              <p>Find recipes based on what you already have in your kitchen</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⭐</div>
              <h3>Curated Collection</h3>
              <p>Hand-picked recipes with ratings and reviews from real cooks</p>
            </div>
            <div className="feature">
              <div className="feature-icon">❤️</div>
              <h3>Save Favorites</h3>
              <p>Keep track of your favorite recipes for easy access</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Cook with confidence on any device, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          min-height: 100vh;
        }

        .hero {
          background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
          color: var(--white);
          padding: 80px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .hero-text p {
          font-size: 1.25rem;
          margin-bottom: 48px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-search {
          margin-bottom: 48px;
          display: flex;
          justify-content: center;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 64px;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stat-icon {
          color: var(--white);
          opacity: 0.8;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .recipes-section {
          padding: 80px 0;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 48px;
        }

        .recipes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .no-results {
          text-align: center;
          padding: 48px 0;
          color: var(--neutral-600);
        }

        .features-section {
          background-color: var(--white);
          padding: 80px 0;
        }

        .features-section h2 {
          text-align: center;
          margin-bottom: 64px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 48px;
        }

        .feature {
          text-align: center;
          padding: 32px 24px;
          border-radius: 16px;
          background-color: var(--neutral-50);
          transition: transform 0.3s ease;
        }

        .feature:hover {
          transform: translateY(-8px);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 24px;
        }

        .feature h3 {
          margin-bottom: 16px;
          color: var(--neutral-900);
        }

        .feature p {
          color: var(--neutral-600);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 60px 0 40px;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-text p {
            font-size: 1.1rem;
          }

          .hero-stats {
            gap: 32px;
          }

          .stat {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }

          .section-header {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }

          .recipes-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 2rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 24px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;