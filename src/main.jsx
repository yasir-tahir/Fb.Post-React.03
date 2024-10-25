import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css';
import user from './assets/Muhammad Yasir.jpg'
import car from './assets/car1.jpg'
import { SlOptions } from "react-icons/sl";
import { FaEarthAmericas } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaCommentDots } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

function Post(){
return(

<div className="post-container">

<div className='post-header'>
<div className='post-user'>
<img 
  src={user} 
  alt="Muhammad Yasir" 
  className="dp"
  id="my-id">
  </img>

<div className='post-name'>
<h3>Muhammad Yasir</h3>
<span>10 min ago.</span>
<FaEarthAmericas />
</div>

</div>
<SlOptions />
</div>

<div className='post-image'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

  <img 
  src={car} 
  alt="Hyundai Vezel" 
  className="post-photo"
  id="my-id"
  >

  </img>
  </div>

<div className='lcs'>
<div className='one'>
<FcLike />
<span>Like</span>
</div>
<div className='one'>
<FaCommentDots />
<span>Comment</span>
</div>
<div className='one'>
<IoIosShareAlt />
<span>Share</span>
</div>
</div>


  </div>
)  
}


function App(){
return<>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
</>

}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
