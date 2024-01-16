for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var inner=this.innerHTML;
        press(inner);
        buttonAnimation(inner);
});
}
// function Iitian(branch,year,domain,happy)
// {
//     this.branch=branch;
//     this.year=year;
//     this.domain=domain;
//     this.happy=happy;
//     this.state=function()
//     {
//         console.log("Life is living hell");
//     }
//     this.problem=function()
//     {
//         console.log("So many, it is hard to count");
//     }
// }
//   var avdhoot = new Iitian("Mems",2,"tech",false);
//   console.log(avdhoot.branch);
//   console.log(avdhoot.year);
//   console.log(avdhoot.domain);
//   console.log(avdhoot.happy);
//   avdhoot.state();
//   avdhoot.problem();
  document.addEventListener("keydown",function(event)
  {
    press(event.key);
    buttonAnimation(event.key);
  })
  function press(key)
  {
    switch (key) {
        case "w":
            var adio=new Audio("./sounds/tom-1.mp3");
            adio.play();
            break;
        case "a":
            var edio=new Audio("./sounds/tom-2.mp3");
            edio.play();
            break;
        case "s":
            var idio=new Audio("./sounds/tom-3.mp3");
            idio.play();
            break;
        case "d":
            var odio=new Audio("./sounds/tom-4.mp3");
            odio.play();
            break;
        case "j":
            var udio=new Audio("./sounds/crash.mp3");
            udio.play();
            break;
        case "k":
            var bdio=new Audio("./sounds/kick-bass.mp3");
            bdio.play();
            break;
        case "l":
            var cdio=new Audio("./sounds/snare.mp3");
            cdio.play();
            break;
    
        default:
            console.log(inner);
            break;
    }
  }
  
   function buttonAnimation(key)
   {
        var activeButton=document.querySelector("."+key);
        activeButton.classList.add("pressed");
        setTimeout(function()
        {
            activeButton.classList.remove("pressed");
        },100);
   }