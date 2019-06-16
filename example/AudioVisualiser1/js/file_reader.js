function read_file(e){
    audio_path = URL.createObjectURL(e.target.files[0]); 
    if(audio) audio.pause();  
    audio = new Audio(audio_path);
    start();
}