var shouldRotateRight = true;
var lottieAnimationInProgres = false;
var backtrackInProgress = false;
var isGoingBackToSection3 = false;

var translateRight = "translate-right-animation";
var translateLeft = "translate-left-animation";

var fadeIn = "section-fade-in";
var fadeOut = "section-fade-out";

$(document).ready(function() {
	var background = $("#back1");
	var commonHeader = $("#common-header");
	var section1 = $("#section-1");
	var section2 = $("#section-2");
	var section3 = $("#section-3");
	var section4 = $("#section-4");
	var section5 = $("#section-5");
	var section6 = $("#section-6");
	var section7 = $("#section-7");
	var section8 = $("#section-8");
	var section9 = $("#section-9");
  var section10 = $("#section-10");
  var section11 = $("#section-11");
  var section12 = $("#section-12");

  var section2TextDiv = $("#section-2-outer-text-container");

	var lottie3Row1 = $("#section-3-row-1");
	var lottie3Row2 = $("#section-3-row-2");
	var lottie3Row3 = $("#section-3-row-3");
	var lottie3Row4 = $("#section-3-row-4");
	var lottie3Row5 = $("#section-3-row-5");

	var section4TextDiv = $("#section-4-outer-text-container");
	var section5TextDiv = $("#section-5-outer-text-container");
  var section6TextDiv = $("#section-6-outer-text-container");
  var section7_1TextDiv = $("#section-7-1-text-container");
  var section7_2TextDiv = $("#section-7-2-text-container");
  var section8TextDiv = $("#section-8-text-container");

	var lottie2 = loadLottie(2);
	var lottie3_1 = loadLottie('3-1');
	var lottie3_2 = loadLottie('3-2');
	var lottie3_3 = loadLottie('3-3');
	var lottie3_4 = loadLottie('3-4');
	var lottie3_5 = loadLottie('3-5');
	var lottie4 = loadLottie(4);
	var lottie5 = loadLottie(5);
  var lottie6 = loadLottie(6);
  var lottie7_1 = loadLottie('7-1');
  var lottie7_2 = loadLottie('7-2');
  var lottie8 = loadLottie(8);

	$('#pagepiling').pagepiling({
		verticalCentered: false,
		easing: 'linear',
		afterLoad: function(anchorLink, index){},

		onLeave: function(index, nextIndex, direction){
			console.log('direction: ' + direction);
			console.log('index: ' + index);			
			
			if (index == 1) {
        ////////////////////////////////////////
        // Section 1
        ////////////////////////////////////////
				rotateBackground();
        commonHeader.removeClass("hide-header").addClass("show-header");
        fadeSection(section2, section1);
        addXAxisStagger(section2TextDiv, translateLeft);
				playLottie(lottie2);
			} else if (index == 2) {
        ////////////////////////////////////////
        // Section 2
        ////////////////////////////////////////
				backtrackInProgress = false;
				rotateBackground();
				removeXAxisStagger(section2TextDiv, translateLeft);
				if (direction === 'up') {
          commonHeader.removeClass("show-header").addClass("hide-header");
          fadeSection(section1, section2);
				} else {
					fadeSection(section7, section2);
          playLottie(lottie3_1);
          lottie3Row1.addClass(fadeIn);
				}
				
			} else if (index == 3) {
        ////////////////////////////////////////
        // Section 3_1
        ////////////////////////////////////////
				isGoingBackToSection3 = false;
				if (direction === 'up') {
					goBackToSection2();
				} else {
					lottie3Row2.addClass(fadeIn);
					playLottie(lottie3_2);
				}
			} else if (index == 4) {
        ////////////////////////////////////////
        // Section 3_2
        ////////////////////////////////////////
				if (direction === 'up') {
					goBackToSection2()
				} else {
					lottie3Row3.addClass(fadeIn);
					playLottie(lottie3_3);
				}
			} else if (index == 5) {
        ////////////////////////////////////////
        // Section 3_3
        ////////////////////////////////////////
				if (direction === 'up') {
					goBackToSection2()
				} else {
					lottie3Row4.addClass(fadeIn);
					playLottie(lottie3_4);
				}
			} else if (index == 6) {
        ////////////////////////////////////////
        // Section 3_4
        ////////////////////////////////////////
				if (direction === 'up') {
					goBackToSection2()
				} else {
					lottie3Row5.addClass(fadeIn);
					playLottie(lottie3_5);
				}
			} else if (index == 7) {
        ////////////////////////////////////////
        // Section 3_5
        ////////////////////////////////////////
				if (direction === 'up' && !isGoingBackToSection3) {
					setTimeout(removeAnimationForSection3, 1000);
					goBackToSection2()
				} else if (direction == 'down') {
					rotateBackground();
					setTimeout(removeAnimationForSection3, 1000);
					fadeSection(section8, section7);
          addXAxisStagger(section4TextDiv, translateLeft);
          playLottie(lottie4);
				}
			} else if (index == 8) {
        ////////////////////////////////////////
        // Section 4
        ////////////////////////////////////////
        rotateBackground();
        removeXAxisStagger(section4TextDiv, translateLeft);
				if (direction == 'up') {
					isGoingBackToSection3 = true;
					$.fn.pagepiling.moveTo(3);
					fadeSection(section7, section8);
					playLottie(lottie3_1);
					lottie3Row1.addClass(fadeIn);
				} else {
          fadeSection(section9, section8);
          playLottie(lottie5);
				}
			} else if (index == 9) {
        ////////////////////////////////////////
        // Section 5
        ////////////////////////////////////////
				rotateBackground();
				if (direction == 'up') {
					addXAxisStagger(section4TextDiv, translateLeft);
          fadeSection(section8, section9);
          playLottie(lottie4);
				} else {
          addXAxisStagger(section6TextDiv, translateLeft);
          fadeSection(section10, section9);
          playLottie(lottie6);
				}
			} else if (index == 10) {
        ////////////////////////////////////////
        // Section 6
        ////////////////////////////////////////
        rotateBackground();
        removeXAxisStagger(section6TextDiv, translateLeft);
				if (direction == 'up') {
          fadeSection(section9, section10);
          playLottie(lottie5);
				} else {
					fadeSection(section11, section10);
          playLottie(lottie7_1);
          playLottie(lottie7_2);
				}
			} else if (index == 11) {
        ////////////////////////////////////////
        // Section 7
        ////////////////////////////////////////
        rotateBackground();
				if (direction == 'up') {
          fadeSection(section10, section11);
          playLottie(lottie6);
				} else {
          fadeSection(section12, section11);
          // need to play section 8 lottie here
				}
			} else if (index == 12) {
        ////////////////////////////////////////
        // Section 8
        ////////////////////////////////////////
        rotateBackground();
				if (direction == 'up') {
          fadeSection(section11, section12);
          playLottie(lottie7_1);
          playLottie(lottie7_2);
				} else {
					
				}
			}
		}
  });
  
  function addXAxisStagger(container, direction) {
    container = container.children();
    container.children().eq(0).addClass(direction + 500);
    container.children().eq(1).addClass(direction + 1000);
    var count = container.children().length;
    if (count == 3) {
      container.children().eq(2).addClass(direction + 1500);
    }
  }

  function removeXAxisStagger(container, direction) {
    container = container.children();
    setTimeout( _ => {
      container.children().eq(0).removeClass(direction + 500);
      container.children().eq(1).removeClass(direction + 1000);
      var count = container.children().length;
      if (count == 3) {
        container.children().eq(2).removeClass(direction + 1500);
      }
    }, 1000);
  }

	function goBackToSection2() {
		rotateBackground();
		backtrackInProgress = true;
		$.fn.pagepiling.moveTo(2);
		setTimeout(removeAnimationForSection3, 1000);
		fadeSection(section2, section7);
    addXAxisStagger(section2TextDiv, translateLeft);
		playLottie(lottie2);
	}

	function removeAnimationForSection3() {
		lottie3Row1.removeClass(fadeIn);
		lottie3Row2.removeClass(fadeIn);
		lottie3Row3.removeClass(fadeIn);
		lottie3Row4.removeClass(fadeIn);
		lottie3Row5.removeClass(fadeIn);
	}

	function loadLottie(sectionNumber) {
		return bodymovin.loadAnimation({
			container: document.getElementById('lottie-section-' + sectionNumber),
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: './lotties/section-' + sectionNumber + '.json'
		});
	}

	function playLottie(lottie) {
		lottie.stop();
		lottie.play();
	}

	function fadeSection(fadeInSection, fadeOutSection) {
		fadeOutSection.removeClass(fadeIn).addClass(fadeOut);
		fadeInSection.removeClass(fadeOut).addClass(fadeIn);
	}

	function rotateBackground() {
		if (!backtrackInProgress) {
			if (shouldRotateRight) {
				shouldRotateRight = false;
				background.removeClass("counter-rotation").addClass("clockwise-rotation");
			} else {
				shouldRotateRight = true;
				background.removeClass("clockwise-rotation").addClass("counter-rotation");
			}
		}
		
	}
});

