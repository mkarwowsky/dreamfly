// window.addEventListener("load", function() {
//     var svgObject = document.getElementById('svg-plane').contentDocument;
//     var svg = svgObject.getElementById('A1');
//     svg.setAttributeNS(null, "fill", "#1435EB");
//     console.log(svg);
//   });

// var a = document.getElementById("svg-plane");
// a.addEventListener("load",function(){
//   var svgDoc = a.contentDocument;
//   var els = svgDoc.querySelectorAll("ico_first");
//   for (var i = 0, length = els.length; i < length; i++) {
//     els[i].addEventListener("click", 
//        function(){ console.log("clicked"); 
//     }, false);
//   }
// },false);


// var test = document.getElementById('svg-plane').contentDocument;
// var elements = Array.from(test.querySelectorAll('fill'));
// console.log(elements);
// // add event listeners
// elements.forEach(function(el) {
//    el.addEventListener("touchstart", start);
//    el.addEventListener("mousedown",  start);
//    el.addEventListener("touchmove",  move);
//    el.addEventListener("mousemove",  move);
// })

function remove(array, element) {
  return array.filter(el => el !== element);
}

var a = document.getElementById("svg-plane");
a.addEventListener("load",function(){
  var svgDoc = a.contentDocument;
  console.log(svgDoc);
  var els = svgDoc.querySelectorAll("g.seat");
  console.log(els);
  var arr = [];
  for (var i = 0, length = els.length; i < length; i++) {
    console.log(els.length);
    els[i].addEventListener("click", 
       function(){
        console.log(this.id)
        this.classList.toggle('clicked');
        if(!arr.includes(this.id)){
          arr.push(this.id);
          console.log(this.id);
        }
        else
        {
          arr.indexOf(this.id);
          console.log(arr.indexOf(this.id));
          arr.splice(arr.indexOf(this.id),1);
          console.log("dupa");
          remove(arr, this.id);
          console.log(arr);
        }
        
        console.log(arr);
        console.log(typeof(arr));
        // console.log("clicked"); 
    }, false);
  }
},false);

