var radius = 190; // adjust to move out items in and out 
var fields = $('.item'),
  container = $('.outer_circle'),
  width = container.width(),
  height = container.height();
var angle = 0,
  step = (2 * Math.PI) / fields.length;
fields.each(function() {
  var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
  var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
  if (window.console) {
    console.log($(this).text(), x, y);
  }
  $(this).css({
    left: x + 'px',
    top: y + 'px'
  });
  angle += step;
});

var radius = 90; // adjust to move out items in and out 
var fields = $('.it'),
  container = $('.inner_circle'),
  width = container.width(),
  height = container.height();
var angle = 0,
  step = (2 * Math.PI) / fields.length;
fields.each(function() {
  var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
  var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
  if (window.console) {
    console.log($(this).text(), x, y);
  }
  $(this).css({
    left: x + 'px',
    top: y + 'px'
  });
  angle += step;
});


// function btn(){
//   let out1 = document.getElementById("out-1")
//   let out2 = document.getElementById("out-2")
//   let out3 = document.getElementById("out-3")
//   let out4 = document.getElementById("out-4")
//   let lower = document.getElementById("lower");
//   let outer = document.getElementById("outer_cirlce");
//   if(lower.style.visibility === "hidden"){
//     lower.style.visibility = "visible"
//   }
//   else{
//     lower.style.visibility = "hidden";
//     out1.style.visibility = "hidden"
//     out2.style.visibility = "hidden"
//     out3.style.visibility = "hidden"
//     out4.style.visibility = "hidden"
//     outer.style.visibility = "hidden"
//   }
// }

function myFunction() {
  var x = document.getElementById("outer_circle");
  let item = document.getElementsByClassName("item")
  for (item of item){
    if (item.style.visibility === "hidden") {
          item.style.visibility = "visible";
          x.style.border = "1.5px solid white"
          document.getElementById("out-1").innerHTML = "Web Designing"
          document.getElementById("out-2").innerHTML = "Web Branding"
          document.getElementById("out-3").innerHTML = "Web Optimization"
          document.getElementById("out-4").innerHTML = "Web Maintainence"

        } else{
          item.style.visibility = "visible";
          x.style.border = "1.5px solid white"
          document.getElementById("out-1").innerHTML = "Web Designing"
          document.getElementById("out-2").innerHTML = "Web Branding"
          document.getElementById("out-3").innerHTML = "Web Optimization"
          document.getElementById("out-4").innerHTML = "Web Maintainence"
        }
  }
}

function market() {
  var x = document.getElementById("outer_circle");
  let item = document.getElementsByClassName("item")
  for (item of item){
    if (item.style.visibility === "hidden") {
          item.style.visibility = "visible";
          x.style.border = "1.5px solid white"
          document.getElementById("out-1").innerHTML = "Content Marketing"
          document.getElementById("out-2").innerHTML = "Email Marketing"
          document.getElementById("out-3").innerHTML = "Influencer Marketing"
          document.getElementById("out-4").innerHTML = "Affiliate Marketing"
        } else {
          item.style.visibility = "visible";
          x.style.border = "1.5px solid white"
          document.getElementById("out-1").innerHTML = "Content Marketing"
          document.getElementById("out-2").innerHTML = "Email Marketing"
          document.getElementById("out-3").innerHTML = "Influencer Marketing"
          document.getElementById("out-4").innerHTML = "Affiliate Marketing"
        }
  }
}

function cd() {
  var x = document.getElementById("outer_circle");
  let item = document.getElementsByClassName("item")
  for (item of item){
    if (item.style.visibility === "hidden") {
          item.style.visibility = "visible";
          x.style.border = "1.5px solid white"
          document.getElementById("out-1").innerHTML = "Graphic Design"
          document.getElementById("out-2").innerHTML = "Logo Design"
          document.getElementById("out-3").innerHTML = "UI Design"
          document.getElementById("out-4").innerHTML = "Packaging Design"
        } else {
          item.style.visibility = "visible";
          x.style.border = "1.5px solid white"
          document.getElementById("out-1").innerHTML = "Graphic Design"
          document.getElementById("out-2").innerHTML = "Logo Design"
          document.getElementById("out-3").innerHTML = "UI Design"
          document.getElementById("out-4").innerHTML = "Packaging Design"
        }
  }
}

function seo() {
  var x = document.getElementById("outer_circle");
  let item = document.getElementsByClassName("item")
  for (item of item){
    if (item.style.visibility === "hidden") {
          item.style.visibility = "visible";
          x.style.border = "1.5px solid white"
          document.getElementById("out-1").innerHTML = "On-Page SEO"
          document.getElementById("out-2").innerHTML = "Off-Page SEO"
          document.getElementById("out-3").innerHTML = "Local SEO"
          document.getElementById("out-4").innerHTML = "Backlink Building"
        } else {
          item.style.visibility = "visible";
          x.style.border = "1.5px solid white"
          document.getElementById("out-1").innerHTML = "On-Page SEO"
          document.getElementById("out-2").innerHTML = "Off-Page SEO"
          document.getElementById("out-3").innerHTML = "Local SEO"
          document.getElementById("out-4").innerHTML = "Backlink Building"
        }
  }
}

function myOverFunction1(){
  document.getElementById("out-1").innerHTML = "know more";
}
function myOverFunction2(){
  document.getElementById("out-2").innerHTML = "know more";
}
function myOverFunction3(){
  document.getElementById("out-3").innerHTML = "know more";
}
function myOverFunction4(){
  document.getElementById("out-4").innerHTML = "know more";
}
