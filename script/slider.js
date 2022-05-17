const nextSlide = document.getElementById("next");
let withCount=0;
let withCount2=9;
let count2=0;
let count3=0;

window.addEventListener('resize', checkResizeCgoise);
let countSlide=4;
function checkResizeCgoise(){
	if(window.screen.width>=992){
		countSlide=4;
	}
	if(window.screen.width<992&&window.screen.width>=576){
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
	if(withCount2<=0){
		withCount2=9;
	}
	CategoriesSlideWhow2(withCount2);

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
	if(count2==9){
		count2=0
	}
	let countSlideshow = withCount;
	const charrCatalog = document.querySelectorAll(".categories__item")
	for(let j=0;j<charrCatalog.length;j++){
		charrCatalog[j].classList.remove("show");
	}
	for(let count = countSlideshow; count < countSlideshow + countSlide; count++){
		if(count2==9){
			count2=0
		}else{
			count2++;
		}
		charrCatalog[count2].classList.add("show");
		// console.log(count)
	}
// 	console.log("Цикл прошёл")
}
function CategoriesSlideWhow2(withCount2){
	if(count2==9){
		count2=0
	}
	let countSlideshow = withCount;
	const charrCatalog = document.querySelectorAll(".categories__item")
	for(let j=0;j<charrCatalog.length;j++){
		charrCatalog[j].classList.remove("show");
	}
	for(let count = countSlideshow + countSlide; count > countSlideshow; count--){
		if(count3==0){
			count3=9
		}else{
			count3--;
		}
		charrCatalog[count3].classList.add("show");
		// console.log(count)
	}
// 	console.log("Цикл прошёл")
}
