import "./Skills.css"

export default function Skills(){

 /*   const scrollers=document.querySelectorAll(".scroller");
  if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
    addAnimation();
  }

  function addAnimation(){
    scrollers.forEach((scroller)=>{
        scroller.setAttribute("data-animated",true);
         
        const scrollerInner=scroller.querySelector(".scroller__inner");
        const scrollerContent=Array.from(scrollerInner.children);

        scrollerContent.forEach((item)=>{
            const duplicatedItem=item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden",true);
            scrollerInner.appendChild(duplicatedItem);
        });

    });
  }
  */

  var counter=1;
  setInterval(function () {
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>6){
      counter=1;
    }
    
  },3000);
return(
 
  <id className="skills">
    <div className="skillTitle">
      <h1>SKILLS</h1>
    </div>
    <div className="skilldesc">
    <p> Skills which i am learning, and trying to be better at <br></br>such as HTML , CSS , JS , React.js , C , C++ ...</p>
    </div>

    <div className="slider">
      <div className="slides">

        <input type="radio" name="radio-btn" id="radio1"></input>
        <input type="radio" name="radio-btn" id="radio2"></input>
        <input type="radio" name="radio-btn" id="radio3"></input>
        <input type="radio" name="radio-btn" id="radio4"></input>
        <input type="radio" name="radio-btn" id="radio5"></input>
        <input type="radio" name="radio-btn" id="radio6"></input>

        <div className="slide first">
          <img src="html-1.png"/>
          <div className="skillName">HTML</div>
        </div>
        <div className="slide ">
          <img src="css-3.png"/>
          <div className="skillName">CSS</div>
        </div>
        <div className="slide ">
          <img src="javascript-1.png"/>
          <div className="skillName">JavaScript</div>
        </div>
        <div className="slide ">
          <img src="react-2.png"/>
          <div className="skillName">React</div>
        </div>
        <div className="slide ">
          <img src="c-1.png"/>
          <div className="skillName">C</div>
        </div>
        <div className="slide ">
          <img src="c.png"/>
          <div className="skillName">C++</div>
        </div>

         <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
          <div className="auto-btn5"></div>
          <div className="auto-btn6"></div>
         </div>

      </div>

      <div className="navigation-manual">
        <label for="radio1" className="manual-btn"></label>
        <label for="radio2" className="manual-btn"></label>
        <label for="radio3" className="manual-btn"></label>
        <label for="radio4" className="manual-btn"></label>
        <label for="radio5" className="manual-btn"></label>
        <label for="radio6" className="manual-btn"></label>

      </div>
    </div>

   
  </id>
      

       );
       }