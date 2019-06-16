animate = (ctx, time_domain_data, frequency_domain_data, bufferLength)=>{
  ctx.clearRect(0,0,innerWidth,innerHeight);
  ctx.font = "40px Cinzel, serif";
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fillText("Time_Domain",center.x/2-150,innerHeight-30);
  ctx.fillText("Frequency_Domain",center.x*3/2-100,innerHeight-30);
  let Radius1 = time_domain_data;
  let  Radius2 = frequency_domain_data;
  for(let i = 0; i<bufferLength;i++){
  ctx.beginPath();
  ctx.strokeStyle = "bisque";
  ctx.arc(center.x/2, center.y,Radius1[i], 0,Math.PI*2);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(center.x*3/2, center.y, Radius2[i]/1.2, 0,Math.PI*2);
  ctx.closePath();
  ctx.stroke();
  }
}