import '../Home.css';


const Sharad = function() 
{
  var x = document.getElementById("myTopnav");
 
  if (x.className === "topnav") {

    x.className += " responsive";
  } else 
  {

    x.className = "topnav";
  }
}


export default Sharad;
