
import '../header/Header.css';
import logo from '../../assets/images/logo.png';
import food from '../../assets/images/food.jpg';

 

const Header = () => {
    return (
         <header>
             <div className="border">
                    <div className="title">100% Scure delivery without connecting the courier</div>
           
             </div>
             <div className="input-field">
                 <div className="logo">
                  <img src={logo} alt="Logo" className="logo-image" />
              </div>
              <input className="name" placeholder="Search"></input>
         
              <div className="nav">
                     <ul>
                         <li><a href="">HOME</a></li>
                         <li><a href="">SHOP</a></li>
                         <li><a href="">SNACKS</a></li>
                         <li><a href="">BAKERY</a></li>
                         <li><a href="">BLOG</a></li>
                         <li><a href="">CONTACT</a></li>
                </ul>
             </div>
              </div>
    
    {/*body */}
   
    <div className='container-fluid'>
    <div className="container">
       <ul className='text'> 
           <li><a href="">Fruits & Vegetables</a></li>
           <li><a href="">Breakfast & Dairy</a></li>
           <li><a href="">Bread & Bakery</a></li>
           <li><a href="">Frozen Food</a></li>
           <li><a href="">Biscuits & Snacks</a></li>
           <li><a href="">Grocery & Stapies</a></li>
       </ul>
       </div> 
{/*
    <div className='conr'>
    <ul className='text'>
       <li><a href="">Value of the Day</a></li>
        <li><a href=""></a>Top 100 offers</li>
        <li><a href=""></a>New Arrivals</li>
    </ul>
    </div>*/}
    </div>

    
  </header>
      );
    };

export default Header