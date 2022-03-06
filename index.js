var songname = [" ","bum dem","over the rain bow","Apocalypse","ghar","choo lo","tu hoti toh","Another Love","Barishe","Gul","Death bed","Winter Bird"];
var artist = [" ","Srillex","Israel Kamakawiwoʻole","Cigarettes After Sex","Bharat Chauhan","the Local Train","Bharat Chauhan","Tom Odell","Anuv jain","Anuv jain","Powfu","Aurora"];
let play = 0;
let i = 1;
let number = "./song/sound-"+i+".mp3";
var audio = new Audio(number);
document.querySelector("#play").addEventListener("click",function()
   
    {   
        if(play == 0)
        {
            
            
           audio.play() ;
           play++;
        }
        else if(play == 1) 
        {
            audio.pause();
            play--;}
    });
    document.querySelector("#next").addEventListener("click",function(){
        if(i == 11) i =0;
        
        i++;
        audio.pause();
        number = "./song/sound-"+i+".mp3";
        audio = new Audio(number);
        document.querySelector(".song-image").setAttribute("src","./song images/image-"+i+".jpg");
        document.querySelector("body").style.backgroundImage=("url('./song images/image-"+i+".jpg')");
        document.querySelector("#song-tital").innerHTML = songname[i];
        document.querySelector("#song-artist").innerHTML = artist[i];

        audio.play();
        
    })
    document.querySelector("#prev").addEventListener("click",function(){
        if(i == 1) i =12;
        
        i--;
        audio.pause();
        number = "./song/sound-"+i+".mp3";
        audio = new Audio(number);
        document.querySelector(".song-image").setAttribute("src","./song images/image-"+i+".jpg");
        document.querySelector("body").style.backgroundImage=("url('./song images/image-"+i+".jpg')");
        document.querySelector("#song-tital").innerHTML = songname[i];
        document.querySelector("#song-artist").innerHTML = artist[i];

        audio.play();
        
    })