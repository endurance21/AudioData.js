# AudioData.js
you can find projects using this api
1.
https://endurance21.github.io/AudioVisualiser1/
2.
https://endurance21.github.io/sound_visualisation 


All it have is inside AudioData.js file in the upper directory,
It contains  a class named AudioData that defines audio context , source node, analyser node,and connecction between them that are ssential for extracting data from AUDIO we feed into .

All you need to do is create a audio element like this 
const audio = new Audio("src")  , that's it now make a instance of AudioData class by passing that audio element as arguement to constructor .

NOW what actually happens here is AudioData class uses WebAudio API (native) which works on FFT (FAST FOURIER TRANSFORM ALGORITHM) , the data we get is stored in array of particular size equal to #bufferLenth of instance created , that is accesible using audiodata.bufferLength . 

NOW  coming to methods, so there are two methods of AudioData class here to extract realtime audio data .
1. time_domain()  =  it will return an array of size equal to bufferLength of audiodata instance , that contains amplitude of frequency wrt                      to time , it means as time passes(that's whay named domain) what is the amplitude of particular frequency range .

2. frequency_domain() = it will return an array of size equal to bufferLength of audiodata instance that contains amplitude of different                        frquency Ranges at a particular time , frequency here is sampled .

#one should keep in mind that these methods should be called in each frame audio plays so make sure to call these methods in a iterator .
#also to extract the data one should play the audio using , audio.play() method .

#each array returned from either methods contains values range 0 - 255 , float value  . Console.log() the array to see the data 


#examples given are using minimal animation just for purpose of understanding !!!

