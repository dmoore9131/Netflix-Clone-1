import { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [signState, setSignState] = useState('Sign In');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleSignState = () => {
    setSignState(prevState => (prevState === 'Sign In' ? 'Sign Up' : 'Sign In'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true);
    setError(""); // Clear previous errors

    try {
      if (signState === 'Sign In') {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="login-spinner">
          <img src={netflix_spinner} alt="Loading" />
        </div>
      ) : (
        <div className='login'>
          <img src={logo} className='login-logo' alt='Netflix Logo' />
          <div className="login-form">
            <h1>{signState}</h1>
            <form onSubmit={handleSubmit}>
              {signState === 'Sign Up' && 
                <input 
                  id="name"
                  name="name"
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                />
              }
              <input 
                id="email"
                name="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                placeholder="Email" 
                required 
              />
              <input 
                id="password"
                name="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="Password" 
                required 
              />
              <button type="submit" disabled={loading}>
                {signState}
              </button>
              {error && <p className="error">{error}</p>} {/* Display error messages */}
              <div className="form-help">
                <div className="remember">
                  <input id="remember" name="remember" type="checkbox" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <p>Need Help?</p>
              </div>
            </form>
            <div className="form-switch">
              {signState === 'Sign In' ? (
                <p>
                  New to Netflix? <span onClick={toggleSignState}>Sign Up Now</span>
                </p>
              ) : (
                <p>
                  Already have an account? <span onClick={toggleSignState}>Sign In Now</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
