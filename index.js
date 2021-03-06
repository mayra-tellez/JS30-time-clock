const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hourDegrees = ((hour / 12) * 360) + 90;

  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");  
  const hourHand = document.querySelector(".hour-hand");  

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);