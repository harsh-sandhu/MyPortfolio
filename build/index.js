function fn() {
    console.log("called");
  window.addEventListener("scroll", scrollInProgress);
  requestAnimationFrame(raf);
}
let img = document.getElementById("myImage");
let aboutHeading = document.getElementById("aboutHead");
let aboutSkill = document.getElementById("aboutSkills");
let projectHeading = document.getElementById("projectHead");
let contactHeading = document.getElementById("contactHead");
let contactImage = document.getElementById("contactImg");
let contactFloater=document.getElementById("contactFloater");
let didScroll = false;
const scrollInProgress = () => {
  didScroll = true;
  requestAnimationFrame(raf);
};
let lastTimeStamp = 0;
let lastWidth = 0,
  sY = 0;
const raf = (currentTime) => {
  requestAnimationFrame(raf);
  const previousRender = currentTime - lastTimeStamp;
  if (previousRender < 25) {
    return;
  }
  if (
    img !== null &&
    didScroll &&
    window.scrollY > 20 &&
    window.scrollY < 1000
  ) {
    // console.log(window.scrollY);
    sY = Math.floor(window.scrollY / 20);
    // console.log(sY+" "+lastWidth);
    if (Math.floor(sY) !== Math.floor(lastWidth)) {
      img.style.transform = `scale(${sY},${sY})`;
      didScroll = false;
    }
  } else if (img !== null) {
    img.style.transform = `scale(1,1)`;
  }
  if (aboutHeading !== null && window.scrollY) {
    aboutHeading.style.transform = `translateX(${window.scrollY / 20}%)`;
    aboutSkill.style.transform = `translateX(${window.scrollY / 40}%)`;
    projectHeading.style.transform = `translateX(-${
      (window.scrollY - 1100) / 50
    }%)`;
    contactHeading.style.transform = `translateX(${
      (window.scrollY - 1500) / 20
    }%)`;
    contactImage.style.transform = `translateX(-${
      (window.scrollY - 1500) / 20
    }%)`;
  }
  if(window.scrollY>2000){
    contactFloater.style.display="none"
  }else{
    contactFloater.style.display="block"
  }
  lastTimeStamp = currentTime;
  lastWidth = sY;
};
fn();