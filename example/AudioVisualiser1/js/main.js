start = ()=> {
     audiodata = new AudioData(audio,1);    // make a instance of AudioData
     iterate = ()=>{
     window.requestAnimationFrame(iterate);
     if(isAudioPlaying)
         audio.play();
     else audio.pause();

     let time_domain_data = audiodata.time_domain(); //call time_domain() method to get audiodata in realtime in time domain
     let frequency_domain_data = audiodata.frequency_domain();//call time_domain() method to get audiodata in realtime in frequency domain
     animate(ctx,time_domain_data,frequency_domain_data,audiodata.bufferLength); //now once we get data in real time we can use it to animate our geometry 
                                                                             //bufferlength is size of domain we are using 

    }
 iterate();   
}