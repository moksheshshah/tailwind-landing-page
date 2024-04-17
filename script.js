const navDialog = document.getElementById('nav-dialog'); 
function handleMenu(){
  navDialog.classList.toggle('hidden');
}

const intialTranslateLTR=-48*4;
const intialTranslateRTR=36*4;

function setupInterceptionObserver(element,isLTR,speed){
  const intercectionCallback = (entries) =>{
    const isIntersepting = entries[0].isIntersecting;
    if(isIntersepting){
      document.addEventListener('scroll',scrollHandler);
    }else{
      document.removeEventListener('scroll',scrollHandler);
    }
  }
  const intersectionObserver = new IntersectionObserver(intercectionCallback);

  intersectionObserver.observe(element);

  function scrollHandler(){
    const translateX = (window.innerHeight - element.getBoundingClientRect().top ) * speed;

    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = translateX + intialTranslateLTR;
    }else{
      totalTranslate = -(translateX + intialTranslateRTR);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

setupInterceptionObserver(line1,true,0.15);
setupInterceptionObserver(line2,false,0.15);
setupInterceptionObserver(line3,true,0.15);
setupInterceptionObserver(line4,true,0.8);

const dtElement = document.querySelectorAll('dt');
dtElement.forEach(element =>{
  element.addEventListener('click',()=>{
    const ddId = element.getAttribute('aria-controls');
    const ddElements= document.getElementById(ddId);
    const ddArrowIcon = element.querySelectorAll('i')[0];

    ddElements.classList.toggle('hidden');
    ddArrowIcon.classList.toggle('-rotate-180');
  });
});