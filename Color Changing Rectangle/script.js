/*

  Make a rectangle and when we move mouse on that rectangle on
  the left side we want to gradually change the color of the
  rectangle to red and when we move mouse to the right side
  we want change the color to blue.

*/

// 1. sabse pehle ye pata karo ki mouse rectangle pe and move
//    hua ya nahi
// 2. ab ye calculate karo ki hum center se right pr hai ya left pr
// 3. calculate karo ke hum center se kitna left par hai ,
//    jitna left par hai color density utni badhao.

var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  var rectangleLocation = rect.getBoundingClientRect();
  var insiderectval = details.clientX - rectangleLocation.left;

  if (insiderectval < rectangleLocation.width / 2) {
    var redColor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
      else: Power4,
    });
  } else {
    var blueColor = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation.width,
      0,
      255,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blueColor})`,
      else: Power4,
    });
  }
});


