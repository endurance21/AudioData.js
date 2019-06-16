
class AudioData{
    constructor(audio ,size = 1){
     this.audio = audio;
     this.audioctx = new AudioContext();
     this.source = this.audioctx.createMediaElementSource(this.audio); 
     this.analyser = this.audioctx.createAnalyser();
     this.source.disconnect();
     this.source.connect(this.analyser);
     this.analyser.connect(this.audioctx.destination);
     this.analyser.fftSize = size*256;
     this.bufferLength = this.analyser.frequencyBinCount;
     this.time_domain_data = new Uint8Array(this.bufferLength);
     this.frequency_domain_data = new Uint8Array(this.bufferLength);
    }
    time_domain(){
      this.analyser.getByteTimeDomainData(this.time_domain_data);  
      return this.time_domain_data; 
    }
    frequency_domain(){
        this.analyser.getByteFrequencyData(this.frequency_domain_data);
        return this.frequency_domain_data;
    }
}