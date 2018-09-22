var shouldRotateRight = true;
var lottieAnimationInProgres = false;
var backtrackInProgress = false;
var isGoingBackToSection3 = false;

var translateRight = "translate-right-animation";
var translateLeft = "translate-left-animation";

var section3LottieAnimation = "section-fade-in";

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

	var section2LottieDiv = $("#lottie-section-2");
	var section2TextDiv = $("#section-2-text-container");

	var lottie3Row1 = $("#section-3-row-1");
	var lottie3Row2 = $("#section-3-row-2");
	var lottie3Row3 = $("#section-3-row-3");
	var lottie3Row4 = $("#section-3-row-4");
	var lottie3Row5 = $("#section-3-row-5");

	var lottie4Div = $("#lottie-section-4");
	var section4LottieDiv = $("#lottie-section-4");
	var section4TextDiv = $("#section-4-text-container");

	var lottie5Div = $("#lottie-section-5");
	var section5LottieDiv = $("#lottie-section-5");
	var section5TextDiv = $("#section-5-text-container");

	var lottie6Div = $("#lottie-section-6");
	var section6LottieDiv = $("#lottie-section-6");
	var section6TextDiv = $("#section-6-text-container");

	var lottie2 = loadLottie(2);
	var lottie3_1 = loadLottie('3-1');
	var lottie3_2 = loadLottie('3-2');
	var lottie3_3 = loadLottie('3-3');
	var lottie3_4 = loadLottie('3-4');
	var lottie3_5 = loadLottie('3-5');
	var lottie4 = loadLottie(4);
	var lottie5 = loadLottie(5);
	var lottie6 = loadLottie(6);

	$('#pagepiling').pagepiling({
		verticalCentered: false,
		easing: 'linear',
		afterLoad: function(anchorLink, index){},

		onLeave: function(index, nextIndex, direction){
			console.log('direction: ' + direction);
			console.log('index: ' + index);			
			
			if (index == 1) {
				rotateBackground();
				commonHeader.removeClass("hide-header").addClass("show-header");
				fadeSection(section2, section1);
				addXAxisTranslation(section2LottieDiv, section2TextDiv)
				playLottie(lottie2);
			} else if (index == 2) {
				backtrackInProgress = false;
				rotateBackground();
				removeXAxisTranslation(section2LottieDiv, section2TextDiv);
				if (direction === 'up') {
					fadeSection(section1, section2);
					commonHeader.removeClass("show-header").addClass("hide-header");
				} else {
					fadeSection(section7, section2);
					playLottie(lottie3_1);
					lottie3Row1.addClass(section3LottieAnimation);

					//////////////////////////////////////////////
					// fadeSection(section8, section2);
					// addXAxisTranslation(section4LottieDiv, section4TextDiv);
					//////////////////////////////////////////////
				}
				
			} else if (index == 3) {
				isGoingBackToSection3 = false;
				if (direction === 'up') {
					goBackToSection2();
				} else {
					// start lottie 3_2
					lottie3Row2.addClass(section3LottieAnimation);
					playLottie(lottie3_2);
				}
			} else if (index == 4) {
				if (direction === 'up') {
					goBackToSection2()
				} else {
					// start lottie 3_3
					lottie3Row3.addClass(section3LottieAnimation);
					playLottie(lottie3_3);
				}
			} else if (index == 5) {
				if (direction === 'up') {
					goBackToSection2()
				} else {
					// start lottie 3_4
					lottie3Row4.addClass(section3LottieAnimation);
					playLottie(lottie3_4);
				}
			} else if (index == 6) {
				if (direction === 'up') {
					goBackToSection2()
				} else {
					// start lottie 3_5
					lottie3Row5.addClass(section3LottieAnimation);
					playLottie(lottie3_5);
				}
			} else if (index == 7) {
				if (direction === 'up' && !isGoingBackToSection3) {
					setTimeout(removeAnimationForSection3, 1000);
					goBackToSection2()
				} else if (direction == 'down') {
					rotateBackground();
					setTimeout(removeAnimationForSection3, 1000);
					fadeSection(section8, section7);
          addXAxisTranslation(section4LottieDiv, section4TextDiv);
          playLottie(lottie4);
				}
			} else if (index == 8) {
				rotateBackground();
				if (direction == 'up') {
					isGoingBackToSection3 = true;
					$.fn.pagepiling.moveTo(3);
					removeXAxisTranslation(section4LottieDiv, section4TextDiv)
					fadeSection(section7, section8);
					playLottie(lottie3_1);
					lottie3Row1.addClass(section3LottieAnimation);
				} else {
					addXAxisTranslation(section5TextDiv, section5LottieDiv);
					removeXAxisTranslation(section4LottieDiv, section4TextDiv)
          fadeSection(section9, section8);
          playLottie(lottie5);
				}
			} else if (index == 9) {
				rotateBackground();
				removeXAxisTranslation(section5TextDiv, section5LottieDiv)
				if (direction == 'up') {
					addXAxisTranslation(section4LottieDiv, section4TextDiv)
					// removeXAxisTranslation(section5TextDiv, section5LottieDiv)
					fadeSection(section8, section9);
				} else {
					addXAxisTranslation(section6LottieDiv, section6TextDiv)
          fadeSection(section10, section9);
          playLottie(lottie6);
				}
			} else if (index == 10) {
				rotateBackground();
				removeXAxisTranslation(section6LottieDiv, section6TextDiv)
				if (direction == 'up') {
					addXAxisTranslation(section5TextDiv, section5LottieDiv)
					fadeSection(section9, section10);
				} else {
					
				}
			}
		}
	});

	function removeXAxisTranslation(div1, div2) {
		setTimeout(() => { 
			// console.log("removing: " + div1);
			// console.log("removing: " + div2);
			div1.removeClass(translateRight);
			div2.removeClass(translateLeft);
		}, 1000);
		
	}

	function addXAxisTranslation(div1, div2) {
		// console.log("adding: " + div1);
		// console.log("adding: " + div2);
		div1.addClass(translateRight);
		div2.addClass(translateLeft);
	}

	function goBackToSection2() {
		rotateBackground();
		backtrackInProgress = true;
		$.fn.pagepiling.moveTo(2);
		setTimeout(removeAnimationForSection3, 1000);
		fadeSection(section2, section7);
		addXAxisTranslation(section2LottieDiv, section2TextDiv)
		playLottie(lottie2);
	}

	function removeAnimationForSection3() {
		lottie3Row1.removeClass(section3LottieAnimation);
		lottie3Row2.removeClass(section3LottieAnimation);
		lottie3Row3.removeClass(section3LottieAnimation);
		lottie3Row4.removeClass(section3LottieAnimation);
		lottie3Row5.removeClass(section3LottieAnimation);
	}

	function loadLottie(sectionNumber) {
		return bodymovin.loadAnimation({
			container: document.getElementById('lottie-section-' + sectionNumber),
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: './lotties/section-' + sectionNumber + '.json'
			// path: './lotties/capital-b.json'
		});
	}

	function playLottie(lottie) {
		lottie.stop();
		lottie.play();
	}

	function fadeSection(fadeIn, fadeOut) {
		fadeOut.removeClass("section-fade-in").addClass("section-fade-out");
		fadeIn.removeClass("section-fade-out").addClass("section-fade-in");
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

