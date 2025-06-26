import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <div className="auth-header">
            <div className="auth-icon">
              <User size={40} />
            </div>
            <h1>Welcome Back</h1>
            <p>Sign in to your Recipe Finder account</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <Mail size={18} />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <Lock size={18} />
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary auth-submit"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Don't have an account? 
              <Link to="/signup" className="auth-link">Sign up here</Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 0;
          background: linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #4ECDC4 100%);
        }

        .auth-container {
          background-color: var(--white);
          padding: 48px;
          border-radius: 20px;
          box-shadow: var(--shadow-xl);
          width: 100%;
          max-width: 480px;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .auth-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: var(--white);
        }

        .auth-header h1 {
          margin-bottom: 8px;
          color: var(--neutral-900);
        }

        .auth-header p {
          color: var(--neutral-600);
        }

        .auth-form {
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--neutral-700);
        }

        .form-input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid var(--neutral-200);
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
        }

        .auth-submit {
          width: 100%;
          padding: 16px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .auth-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-message {
          background-color: rgba(255, 55, 66, 0.1);
          color: var(--error);
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 24px;
          font-size: 0.9rem;
          border: 1px solid rgba(255, 55, 66, 0.2);
        }

        .auth-footer {
          text-align: center;
          padding-top: 24px;
          border-top: 1px solid var(--neutral-200);
        }

        .auth-footer p {
          color: var(--neutral-600);
        }

        .auth-link {
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
          margin-left: 4px;
        }

        .auth-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .auth-container {
            padding: 32px 24px;
            margin: 0 16px;
            border-radius: 16px;
          }

          .auth-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 20px;
          }

          .auth-header h1 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;