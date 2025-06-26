import { useState } from 'react';
import { Search, X } from 'lucide-react';

function SearchBar({ onSearch, placeholder = "Search recipes by ingredients..." }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="search-input-container">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="search-input"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="clear-btn"
          >
            <X size={18} />
          </button>
        )}
      </div>
      <button type="submit" className="search-btn">
        Search
      </button>

      <style jsx>{`
        .search-bar {
          display: flex;
          gap: 12px;
          max-width: 600px;
          width: 100%;
        }

        .search-input-container {
          position: relative;
          flex: 1;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--neutral-400);
        }

        .search-input {
          width: 100%;
          padding: 14px 48px 14px 48px;
          border: 2px solid var(--neutral-200);
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.2s ease;
          background-color: var(--white);
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
        }

        .clear-btn {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--neutral-400);
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: color 0.2s ease;
        }

        .clear-btn:hover {
          color: var(--neutral-600);
        }

        .search-btn {
          padding: 14px 28px;
          background-color: var(--primary);
          color: var(--white);
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .search-btn:hover {
          background-color: var(--primary-dark);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .search-bar {
            flex-direction: column;
            gap: 16px;
          }

          .search-input {
            padding: 12px 40px 12px 40px;
          }

          .search-btn {
            padding: 12px 24px;
          }
        }

        @media (max-width: 480px) {
          .search-bar {
            max-width: 100%;
            gap: 10px;
          }
          .search-input {
            padding: 10px 32px 10px 32px;
            font-size: 0.95rem;
            border-radius: 8px;
          }
          .search-btn {
            padding: 10px 16px;
            font-size: 0.95rem;
            border-radius: 8px;
          }
        }
      `}</style>
    </form>
  );
}

export default SearchBar;