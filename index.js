 
 function shout(string) {
    return string.toUpperCase();
 }

 function whisper(string) {
    return string.toLowerCase();
 }

 function logShout(string) {
    console.log(string.toUpperCase());
 }
 function logWhisper(string) {
    console.log(string.toLowerCase());
 }
 
 function sayHiToHeadphonedRoommate(string){
    if(string==="Let's have dinner together!"){
        
        return "I would love to!";
     }
     else {
        let epic;
        if(string.toLowerCase){
            epic="I can't hear you!";
        }
        else if(string.toUpperCase){
            epic="YES INDEED!";
        }
        
        return epic;
     }
    
 }
 