const slideInfo = document.getElementById("aboutus__title");
const questionInfo = document.getElementById("question");
const payorderInfo = document.getElementById("payorder");
const returnInfo = document.getElementById("return");
slideInfo.addEventListener("click",e=>{
	slideInfoWork(e)
})
function slideInfoWork(e){
	let objeckt = e.target

	if(objeckt.classList.contains("aboutus__title--question")){
		let removeBorder = document.querySelectorAll(".border");
		for(let i=0;i<removeBorder.length;i++){
			removeBorder[i].classList.remove("border");
		}
		objeckt.classList.toggle("border")
		questionInfo.classList.remove("show");
		payorderInfo.classList.add("show");
		returnInfo.classList.add("show");
	}
	if(objeckt.classList.contains("aboutus__title--payorder")){
		let removeBorder = document.querySelectorAll(".border");
		for(let i=0;i<removeBorder.length;i++){
			removeBorder[i].classList.remove("border");
		}
		objeckt.classList.toggle("border")
		questionInfo.classList.add("show");
		payorderInfo.classList.remove("show");
		returnInfo.classList.add("show");

	}
	if(objeckt.classList.contains("aboutus__title--return")){
		let removeBorder = document.querySelectorAll(".border");
		for(let i=0;i<removeBorder.length;i++){
			removeBorder[i].classList.remove("border");
		}
		objeckt.classList.toggle("border")
		questionInfo.classList.add("show");
		payorderInfo.classList.add("show");
		returnInfo.classList.remove("show");
	}
} 

questionInfo.addEventListener("click",e=>{
	openQuestionInfo(e)
})
function openQuestionInfo(e){
	let obj = e.target;
	if(obj.classList.contains("question__name")){
		obj.parentNode.querySelector('.question__answer').classList.toggle("show")
	}
	if(obj.classList.contains("question__name--style")||obj.classList.contains("question__check--icon")){
		obj.parentNode.parentNode.parentNode.querySelector('.question__answer').classList.toggle("show")
	}
}