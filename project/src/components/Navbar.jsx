import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Compass, Heart, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/explore', label: 'Explore', icon: Compass },
    { path: '/favorites', label: 'Favorites', icon: Heart },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🍳</span>
          Recipe Finder
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-nav desktop-nav">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link ${location.pathname === path ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* User Menu */}
        <div className="navbar-actions">
          {user ? (
            <div className="user-menu">
              <span className="user-name">Hi, {user.name}!</span>
              <button onClick={handleLogout} className="btn-logout">
                <LogOut size={18} />
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`mobile-nav-link ${location.pathname === path ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        ))}
        
        {user ? (
          <>
            <div className="mobile-user-info">
              <User size={20} />
              <span>Hi, {user.name}!</span>
            </div>
            <button onClick={handleLogout} className="mobile-nav-link logout-btn">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <div className="mobile-auth-buttons">
            <Link to="/login" className="btn btn-outline" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: var(--white);
          box-shadow: var(--shadow-sm);
          z-index: 1000;
          border-bottom: 1px solid var(--neutral-200);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
        }

        .brand-icon {
          font-size: 2rem;
        }

        .desktop-nav {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: var(--neutral-600);
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          color: var(--primary);
          background-color: var(--neutral-100);
        }

        .nav-link.active {
          color: var(--primary);
          background-color: rgba(255, 107, 53, 0.1);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .user-menu {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .user-name {
          font-weight: 500;
          color: var(--neutral-700);
        }

        .btn-logout {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: var(--neutral-600);
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .btn-logout:hover {
          color: var(--error);
          background-color: var(--neutral-100);
        }

        .auth-buttons {
          display: flex;
          gap: 12px;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--neutral-700);
          cursor: pointer;
          padding: 8px;
        }

        .mobile-nav {
          display: none;
          flex-direction: column;
          background-color: var(--white);
          border-top: 1px solid var(--neutral-200);
          padding: 16px 24px;
          transform: translateY(-100%);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mobile-nav.active {
          display: flex;
          transform: translateY(0);
          opacity: 1;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--neutral-600);
          font-weight: 500;
          padding: 12px 0;
          border-bottom: 1px solid var(--neutral-100);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--primary);
        }

        .mobile-user-info {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          color: var(--neutral-700);
          font-weight: 500;
          border-bottom: 1px solid var(--neutral-100);
        }

        .logout-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        .logout-btn:hover {
          color: var(--error);
        }

        .mobile-auth-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px 0;
        }

        @media (max-width: 768px) {
          .desktop-nav,
          .navbar-actions {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-nav {
            display: flex;
          }

          .navbar-container {
            padding: 0 16px;
          }
        }

        @media (max-width: 480px) {
          .navbar-container {
            padding: 0 4px;
            height: 60px;
          }
          .navbar-brand {
            font-size: 1.1rem;
            gap: 6px;
          }
          .brand-icon {
            font-size: 1.3rem;
          }
          .mobile-nav-link, .mobile-user-info {
            font-size: 0.95rem;
            padding: 10px 0;
          }
          .mobile-auth-buttons {
            gap: 8px;
            padding: 10px 0;
          }
          .mobile-menu-btn {
            padding: 4px;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;