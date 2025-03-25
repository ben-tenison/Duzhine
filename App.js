import React, { useState, useRef} from "react";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/im1.png";
import img2 from "./images/im2.png";
import img3 from "./images/im3.png";
import img4 from "./images/im4.png";
import img5 from "./images/im5.png";
import img6 from "./images/hair1.png";
import img7 from "./images/hair2.png";
import img8 from "./images/hair3.png";
import img9 from "./images/pim1.png";
import img10 from "./images/pim2.png";
import img11 from "./images/pim3.png";
import img12 from "./images/bo1.png";
import img13 from "./images/bo2.png";
import img14 from "./images/bo3.png";
import img15 from "./images/bo4.png";
import img16 from "./images/sl1.png";
import img17 from "./images/sl2.png";
import img18 from "./images/sl3.png";
import img19 from "./images/sl4.png";
import img20 from "./images/sl5.png";
import img21 from "./images/desc.png";
import img22 from "./images/doctor.jpg";

import img28 from './images/logo.png';
import img29 from './images/rvi1.jpeg';
import img31 from './images/rvi2.jpeg';
import img32 from './images/rvi3.jpeg';

import img34 from './images/rvi5.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function App() {
 

  const data = {
    "Top solutions": [
      { img: img1, text: "Hair Strengthening" },
      { img: img2, text: "Acne & Pimples" },
      { img: img3, text: "Skin Lightening" },
      { img: img4, text: "Laser Hair Removal" },
      { img: img5, text: "Inch Loss Treatment" },
    ],
    "Hair treatment": [
      { img: img6, text: "Hair Regrowth" },
      { img: img7, text: "Hairfall & Thinning" },
      { img: img8, text: "Hair Transplant" },
      { img: img1, text: "Hair Strengthening" },
    ],
    "Skin treatment": [
      { img: img2, text: "Acne & Pimples" },
      { img: img9, text: "Acne Scars Treatment" },
      { img: img3, text: "Skin Lightening" },
      { img: img11, text: "Anti-Ageing Treatment" },
      { img: img10, text: "Dullness & Dehydration" },
    ],
    "Body treatment": [
      { img: img12, text: "Laser Hair Removal" },
      { img: img13, text: "IV Wellness Drips" },
      { img: img5, text: "Inch Loss Treatment" },
      { img: img14, text: "Coolsculpting" },
      { img: img15, text: "Stretch Marks Treatment" },
    ],
  };

  const [animate, setAnimate] = useState(false);

  const handleCategoryChange = (category) => {
    setAnimate(false);
    setTimeout(() => {
      setSelectedCategory(category);
      setAnimate(true);
    }, 50);
  };

  const CustomPrevArrow = (props) => (
    <div className="custom-arrow custom-prev" onClick={props.onClick}>
      &#10094;
    </div>
  );

  const CustomNextArrow = (props) => (
    <div className="custom-arrow custom-next" onClick={props.onClick}>
      &#10095;
    </div>
  );
  const [selectedCategory, setSelectedCategory] = useState("Top solutions");

  const handleScroll = () => {
    const section = document.querySelector(".book");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sectionRef = useRef(null);
  
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };


  
  return (
    <div>

      <nav className="navbar">
        <div className="navi"></div>
        <ul className="nav-list">
          <li>Treatments</li>
          <li>About us</li>
          <li>Blogs</li>
        </ul>
        <div className="btn-group">
          <button>Call us</button>
          <button onClick={handleScroll}> Book an Appointment</button>
        </div>
      </nav>

      
      <div className="jk">
        <h1>Be The New You, The Real You</h1>
        <h2>Begin your transformation today!</h2>
        <div className="search-box"><FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Start your transformation here" />
        </div>
      </div>

      
      <div className="treat">
        <p>Our Treatments</p>
      </div>
      <div className="treatl">
        <p>Select your concern to know the best solution</p>
      </div>

      <ul className="navlist2">
        {Object.keys(data).map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>

 
      <div className={`card-container ${animate ? "pop" : ""}`}>
        {data[selectedCategory].map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>

   
      <div className="real">
        <p>Real Transformations Tales</p>
      </div>
      <div className="real1">
        <p>Witness the real transformations yourself</p>
      </div>

    
      <Slider {...settings}>
        <div>
          <img src={img16}  />
        </div>
        <div>
          <img src={img17} />
        </div>
        <div>
          <img src={img18}  />
        </div>
        <div>
          <img src={img19} />
        </div>
        <div>
          <img src={img20}  />
        </div>
      </Slider>
      

      <div class="container">
  <img src={img21} alt="Image"></img>
  <p> <span className="con">Best Wellness Clinic In Chennai</span><br></br>
  At Eternal Radiance, we're committed to incorporating cutting-edge techniques and technology to benefit our clients. 
  Renowned as one 
  of Chennai's premier skin and hair clinics, our team of experts
   ensures top-notch service.
Stepping into Eternal Radiance means more than just treatment—it's a journey with dedicated support from consultation to procedure.
 Our specialists prioritize addressing all concerns, ensuring your comfort throughout.
  </p>
</div><br></br><br></br>
<div className="book">
  <img src={img22}></img>
  <p>
<p className="book1" ref={sectionRef}>
Free Consultation
</p><br></br>
Talk to our experts & begin your transformation today<br></br>
<input type="text" placeholder="Enter your name"></input><br></br>
<input type="text" placeholder="Enter your phone number"></input><br></br>

<select id="options" name="options">
  <option value="input1">T.Nagar</option>
  <option value="input2">Anna nagar</option>
  <option value="input3">Adyar</option>
</select><br></br>
<select id="options" name="options">
  <option value="input1">Hair treatment</option>
  <option value="input2">Skin treatment</option>
  <option value="input3">Laser hair removal</option>
  <option value="input3">Weight loss</option>
  <option value="input3">Wellness IV Drips</option>
</select><br></br>
<button className="btn" type="submit">
Book an Appointment
</button>

</p>
</div><br></br><br></br>
<div className="Rev">Reviews</div>

<div className="rev1">Check out what our clients have to say about us</div><br></br>
<Slider {...settings}>
        <div>
          <img src={img29}  />
        </div>
        <div>
          <img src={img31} />
        </div>
        <div>
          <img src={img32}  />
        </div>
        
        <div>
          <img src={img34}  />
        </div>
       
      </Slider>

      <div className="cont">
      <span className="s1">Are you ready for your <br></br>transformation?</span>
      <span className="s2">Get in Touch</span>
      <button className="btn7">Book an Appointment</button>
    </div>
    <div className="box"><div className="last">
      <img src={img28}></img><br></br>
      Eternal Radiance is an ISO-certified organization that holds the standard of quality service to clients high. Our team of highly experienced staff and skincare specialists are well-trained to cater to every possible condition.
<br></br><br></br><span className="prv">Privacy Policy
Contact
About </span><br></br><br></br>
©2023. Welona. All Rights Reserved.
    </div >
    <div className="last1"><span className="ui">Eternal Radiance Businesses</span><br></br><br></br>
<span className="ui">Eternal Radiance Thiruvanmiyur</span><br></br>
SMS building, 2nd Floor,and, 163, Lattice Brg Rd, above Sony Center, Opposite to LB road Bus Depot, Thiruvanmiyur, Chennai, Tamil Nadu 600041<br></br><br></br>

<span className="ui">Eternal Radiance T-NAGAR</span><br></br>
Welona Health care pvt ltd
Sai Krupa New No.5, Old No.3 Thanikachalam Road, 1st floor T.Nagar, Chennai-600 017. Tamil Nadu.<br></br><br></br>

<span className="ui">Eternal Radiance ANNA NAGAR</span><br></br>
West Woods Building, Old No. Y-205, New No. 32 1st Floor, 5th Ave, Anna Nagar West, Chennai, Tamil Nadu 600040</div>
<div className="last2"><span className="ui">Connect with us</span><br></br>
<p><FontAwesomeIcon icon={faPhone} />  044-4011-4444
</p>
<FontAwesomeIcon icon={faEnvelope} />  info@welona.in


</div>
</div>

    </div>
    
  );
}


export default App;
