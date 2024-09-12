import styles from "./Navbar.module.css";
import image from '../../assets/images/Logo.png';
function Navbar() {
    return <>
        <nav>
                <ul>
                    <li><a>HOME</a></li>
                    <li><a>SWEETS</a></li>
                    <li><a>SNACKS</a></li>
                    <li><a>BLOGS</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
           
        </nav>

        <div className={styles.container}>
               <div className={styles.logo}>
                    <img src={image} alt="Navbar Logo" />  
              </div>
             
              <h1 className={styles.title}>
                Food Delivered <span className={styles.animatedSpan}>Hot & Delicious</span>
             </h1>
             
        </div>
        
    </>
}

export default Navbar;