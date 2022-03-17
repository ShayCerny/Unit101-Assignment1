let hunger = 50;
let happiness = 50;
let energy = 50;

let feed = () => {
  console.log("Feed Function");
  if (hunger > 0 && hunger < 101) {
    hunger = hunger + ((100 - hunger) / 1.5);
  }
  if (happiness < 101) {
    happiness = happiness + ((100 - happiness) * 0.75) ;
  }
  if (energy < 85) {
    energy = energy + (energy * 0.2)
  };
  displayInfo();
  setGauges();
};
function pet() {
  if (happiness < 100) {
    happiness = happiness + ((100 - happiness) * 0.05);
  }
  displayInfo();
  setGauges();
}
function play() {
  if (happiness < 101) {
    happiness = happiness + ((100 - happiness)/3);
  }
  if (hunger > 25 && hunger < 101) {
    hunger = hunger - ((100 - hunger) * 0.5);
  }
  if (energy > 0) {
    energy = energy - (energy * 0.4);
  }
  displayInfo();
  setGauges();
}

//increase happiness & decrease play
function displayInfo() {
  document.getElementById("hungerPoints").innerHTML = Math.round(hunger);
  document.getElementById("happinessPoints").innerHTML = Math.round(happiness);
  document.getElementById("energyPoints").innerHTML = Math.round(energy);
}

let gauge = document.getElementsByClassName(".gauge");
let gaugeElements = document.querySelectorAll(".gauge");


function setGaugeValue(gauge, points) {
 // console.log(points);
   var bar= document.getElementById(gauge);
   console.log(gauge);
    bar.style.transform = `rotate(${points*1.8}deg)`;
    bar.style.transition = `2s ease-out`;

  };

function setGauges(){
//  console.log(happiness);
 setGaugeValue("happinessGauge", happiness);
 setGaugeValue("energyGauge", energy);
 setGaugeValue("hungerGauge", hunger);

}
/*
  gaugeElements.forEach((gauge, value) => {
    var value = this.getElementsByTagName("span");

    console.log(this.getElementByClassName("gaugeFill").style.transform);
    console.log(this.getElementsByTagName("span"));
    
    let value = document.getElementsByTagName("span");
    if (value < 0 || value > 100) {
      return;
    }
    gauge.querySelector(".gaugeFill").style.transform = `rotate(${
      value / 2
    }turn)`;
    gauge.querySelector(".gaugeCover").textContent = `${Math.round(
      value * 100
    )}%`;
*/
//console.log(gaugeElements);
