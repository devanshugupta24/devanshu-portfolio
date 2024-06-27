import "./MainPage.css"

export default function MainPage(){
    return(
        <>
    <div className="mainpage">
        <div className="intro">
            <h2 className="info">WEB DEVELOPER</h2>
            <h1 className="greet">Hi, I am <div className="name"> Devanshu Gupta</div></h1>
            
        </div>
        <div class="contacts">
    <a href ="https://github.com/devanshugupta24" target="_blank"><img class="logo" src="github (1).jpg"/></a>
    <a href="https://www.linkedin.com/in/devanshu-gupta24/" target="_blank"><img class="logo" src="linkedin (1).jpg"/></a>
    <a href="https://www.instagram.com/devanshu_2402/" target="_blank"><img class="logo" src="instagram (1).jpg"/></a>
   </div>
         

           <img className="photo" src="photo dev.jpeg"></img>

    </div>
        </>
    );
}