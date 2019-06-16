const canvas  = document.getElementById('canvas') ,
ctx = canvas.getContext('2d'),center = {x:innerWidth/2,y:innerHeight/2};
var audio, audiodata, intialRadius,time_domain_data,frequency_domain_data,audio_path
,isAudioPlaying = true ;

canvas.width = innerWidth;
canvas.height = innerHeight;
handleClick = ()=>{
   isAudioPlaying=!isAudioPlaying; 
}
