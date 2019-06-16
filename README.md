# AudioData.js
It have AudioData.js file , that contains  a class named "AudioData" that defines audio context , source node, analyser node,and connecction between them that are essential for extracting data from AUDIO we feed into .

Create a audio element like this 
#const audio = new Audio("src")  ,
and make a instance of AudioData class by passing that audio element as arguement to constructor like this 
#const audiodata =  new AudioData(audio).


There are two methods of AudioData class  to extract realtime audio data  .
#time_domain()  
#frequency_domain()
Both returns array of size  = bufferLength ,
which is property of AudioData class acessebile as #audiodata.bufferLength .

#call these methods  in each frame audio plays using iterator .
#play audio first  using audio.play() to extract data.

examples
# https://endurance21.github.io/AudioVisualiser1
#https://endurance21.github.io/sound_visualisation

