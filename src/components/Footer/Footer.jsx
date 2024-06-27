import "./Footer.css";

export default function Footer(){
return (
<footer>
    <div class="footerContainer">
        <div class="socialIcons">
            <a href="https://github.com/devanshugupta24" target="_blank"><img class="fa-brands" src="github (1).jpg"></img></a>
            <a href="https://www.instagram.com/devanshu_2402/" target="_blank"><img class="fa-brands"src="instagram (1).jpg"></img></a>
            <a href="https://www.linkedin.com/in/devanshu-gupta24/" target="_blank"><img class="fa-brands"src="linkedin (1).jpg"></img></a>
        </div>
        <div className="details">
            <p>Devanshu Gupta &nbsp; |&nbsp; &nbsp;  guptadevanshu24@gmail.com &nbsp; |&nbsp; &nbsp; 9142088391  &nbsp; |&nbsp;&nbsp; Kaimur,Bihar</p>
            
        </div>
        <div class="footerNav">
            <ul><li><a href="">Home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
            </ul>
        </div>

        
    </div>
  
</footer>
);
}