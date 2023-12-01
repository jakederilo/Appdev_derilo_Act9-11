import React from 'react';
import styles from './style';
import jollibeeLogo from './jollibeelogo.png';
import facebookLogo from './facebooklogo.png';
import gmailLogo from './gmaillogo.png';
 // Make sure to import your Jollibee logo

const LoginForm = () => {
  return (
    <div style={container}>
      <div style={formContainer}>
        <div>
          <img src={jollibeeLogo} alt="Jollibee Logo" style={styles.jollibeeLogo} />
        </div >
          <div style={styles.detail}>
              <label style={styles.label}>Username:</label>
              <input type="text" style={styles.input} />
            <div>
              <label style={styles.label}>Password:</label>
              <input type="password" style={styles.input} />
            </div>


            
          </div>
            {/*This PART SHOWS INLINE STYLING*/}
            <button style={{width: "200px",
              padding: "10px", margin: "30px",
              borderRadius: "8px",
              backgroundColor: "#d20c0c", // Jollibee red
              color: "#fff", 
              border: "none",
              cursor: "pointer",
              fontSize: "18px",}}
            >
            Login</button>
          <div style={{alignContent: "center" }} >
            <a style={styles.parg}>Forgot Password?</a>  
          </div>
        
          <div style={{justifyContent: "space-between"}}>
            <button style={styles.facebookButton}>
              
            
              Login with Facebook
              <img src={facebookLogo} alt="Facebook Logo" style={styles.facebookLogo} />
            </button>

            <button style={styles.gmailButton}>
              

              Login with Gmail
              <img src={gmailLogo} alt="Gmail Logo" style={styles.gmailLogo} />
              
            </button>
          </div>
          

      </div>
      
        

        
    </div>  
    
  );
};
{/*This Part Show Style Object Variable*/}
const container = { position: 'relative', // Set the container to relative position
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '150vh',
backgroundColor: '#fbee00',}

const formContainer = {position: 'relative', // Set the form container to relative position
textAlign: 'center',
backgroundColor: '#fff', // White background for the form
border: '2px solid #d20c0c', // Jollibee red
padding: '20px',
height: '650px',
borderRadius: '10px',
boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
justifyContent: 'space-between', // Add space between the logo and text
textAlign: 'center',
}






export default LoginForm;