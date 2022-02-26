var piano = document.getElementById('species');
const mickey = document.getElementById('elem');
var film = document.getElementById('film');
const telephone = document.getElementById('phone');
var meca = document.getElementById('machin');


const ratio = 0.4
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry){
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }      
  })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
  observer.observe(r)
})

$(window).on('load', function() {
  $(".vingt").twentytwenty();
});

function song(){ // lorsque le div est survolé
    piano.play(); // on joue le son
};
 
function chut(){ // lorsque la souris quitte le div
    piano.pause(); // on met en pause le son
    piano.currentTime = 0;
};


  var words = ['Pourquoi les artistes sont','Pourquoi les femmes sont','Pourquoi le désir'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 5,
  speed = 100;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $('.word').text(part);
  },speed);
};

$(document).ready(function(){
  wordflick();
});

mickey.addEventListener('click', () => window.scrollTo({
  top: 700,
  behavior: 'smooth',
}));

function souris(){
  mickey.style.visibility="hidden";
};

function jouer(){ // lorsque le div est survolé
  if(film.paused){
    film.play(); // on joue le son
  } 
  else {
    film.pause();
  }
};

function musica(){ // lorsque le div est survolé
    meca.play(); // on joue le son
};
 
function silence(){ // lorsque la souris quitte le div
    meca.pause(); // on met en pause le son
    meca.currentTime = 0;
};


mickey.onclick = souris;
telephone.onclick = jouer;
