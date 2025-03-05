
// import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h1 className={styles.heading}>Log in to Your Account</h1>
          <button className={styles.googleBtn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sign in with Google</span>
          </button>

          {/* <p className={styles.signupText}>
            New here? <Link to="/signup">Sign Up</Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Login;

