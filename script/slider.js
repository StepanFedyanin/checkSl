const nextSlide = document.getElementById("next");
let withCount=0;

window.addEventListener('resize', checkResizeCgoise);
let countSlide=4;
function checkResizeCgoise(){
	if(window.screen.width>=1200){
		countSlide=4;
	}
	if(window.screen.width<1200&&window.screen.width>=576){
		countSlide=3;
	}
	if(window.screen.width<576){
		countSlide=2;
	}
	CategoriesSlideWhow(withCount);
}

nextSlide.addEventListener("click", function () {
	withCount+=countSlide;
	if(withCount>=10){
		withCount=0;
	}
	CategoriesSlideWhow(withCount);

});
const prefSlide = document.getElementById("pref");
prefSlide.addEventListener("click", function () {
	withCount-=countSlide;
	if(withCount<=0){
		withCount=10;
	}
	CategoriesSlideWhow(withCount);

});
let countStartSlider = "false";
function CheckStart(){
	if(countStartSlider == "false"){
		countStartSlider = true;
		if(window.screen.width>=1200){
			countSlide=4;
		}
		if(window.screen.width<1200&&window.screen.width>=576){
			countSlide=3;
		}
		if(window.screen.width<576){
			countSlide=2;
		}
		CategoriesSlideWhow(withCount);
	}
}
CheckStart();
function CategoriesSlideWhow(withCount){
	let countSlideshow = withCount;
	const charrCatalog = document.querySelectorAll(".categories__item")
	for(let j=0;j<charrCatalog.length;j++){
		charrCatalog[j].classList.remove("show");
	}
	for(let count=countSlideshow;count<countSlideshow+countSlide;count++){
		charrCatalog[count].classList.add("show");
	}
}
