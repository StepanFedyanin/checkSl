let likeitemsList = window.location.hash;
console.log(likeitemsList);
if(likeitemsList=="likeitemsList"){
	const profil = document.getElementById("profile");
	const history = document.getElementById("history")
	const like = document.getElementById("likelist");
	let removeBorder = document.querySelectorAll(".border");
	for(let i=0;i<removeBorder.length;i++){
		removeBorder[i].classList.remove("border");
	}
	document.getElementById("accounttitlelike").classList.add("border");
	profil.classList.remove("show");
	history.classList.remove("show");
	like.classList.add("show");
}

let ProfilChoiseCheck=JSON.parse(localStorage.ProfilCheck);
if(ProfilChoiseCheck==false){
	document.getElementById("hideprofil").classList.add("profil__hide--all")
	const ToComeInCheck = document.getElementById("ToComeIn");
	ToComeInCheck.onclick = function(){
		if(document.getElementById("CheckEmail").value=="root@mail.ru"&&document.getElementById("CheckPassword").value=="1234"){
			document.getElementById("ProfilHide").classList.add("show");
			document.getElementById("RegBlockCheck").classList.remove("TrueReg");
			localStorage.removeItem("ProfilCheck");
			ProfilChoiseCheck = true;
			document.getElementById("hideprofil").classList.remove("profil__hide--all")
			localStorage.ProfilCheck = JSON.stringify(ProfilChoiseCheck);
		}
	}
}else{
	document.getElementById("hideprofil").classList.remove("profil__hide--all")
	document.getElementById("ProfilHide").classList.add("show");
	document.getElementById("RegBlockCheck").classList.remove("TrueReg");
}



const NextPage = document.getElementById("accountTitle");
NextPage.addEventListener("click",e=>{
	slideInProfil(e)
})
// CheckAndOpenLIkePage();
// function CheckAndOpenLIkePage(){
// 	if(countLikePage>0){
// 		const profil = document.getElementById("profile");
// 		const history = document.getElementById("history")
// 		const like = document.getElementById("likelist")
// 		let removeBorder = document.querySelectorAll(".border");
// 		for(let i=0;i<removeBorder.length;i++){
// 			removeBorder[i].classList.remove("border");
// 		}
// 		profil.classList.remove("show");
// 		history.classList.remove("show");
// 		like.classList.add("show");
// 		objeckt.classList.add("border")
// 	}
// }
function slideInProfil(e){
	let objeckt = e.target
	const profil = document.getElementById("profile");
	const history = document.getElementById("history")
	const like = document.getElementById("likelist");
	if(objeckt.classList.contains("account__title--profil")){
		const AccountTitleLike = document.getElementById("accounttitlelike")
		let removeBorder = document.querySelectorAll(".border");
		for(let i=0;i<removeBorder.length;i++){
			removeBorder[i].classList.remove("border");
		}
		profil.classList.add("show");
		history.classList.remove("show");
		like.classList.remove("show");
		objeckt.classList.add("border");

	}
	if(objeckt.classList.contains("account__title--history")){
		let removeBorder = document.querySelectorAll(".border");
		for(let i=0;i<removeBorder.length;i++){
			removeBorder[i].classList.remove("border");
		}
		profil.classList.remove("show");
		history.classList.add("show");
		like.classList.remove("show");
		objeckt.classList.add("border")

	}
	if(objeckt.classList.contains("account__title--like")){
		let removeBorder = document.querySelectorAll(".border");
		for(let i=0;i<removeBorder.length;i++){
			removeBorder[i].classList.remove("border");
		}
		profil.classList.remove("show");
		history.classList.remove("show");
		like.classList.add("show");
		objeckt.classList.add("border")

	}
	
} 




let katalog; 
async function open(){
	let respons = await fetch('jsonkatalog/katalog.json');
	katalog = await respons.json();
	addKataloglike(katalog);
}
open();
let likeitems=JSON.parse(localStorage.likeitemchar)||[];
function addKataloglike(katalog){
	const listSaveLike = document.getElementById("likelist");
	if(likeitems.length>1){
		for(let i = 0; i<likeitems.length;i+=2){
			const likeitem = document.createElement("div");
			likeitem.classList.add("likeitem");
			likeitem.setAttribute("data-index",likeitems[i+1]);
			likeitem.setAttribute("data-sise",likeitems[i]);
		
			const likeitemPhoto = document.createElement("div");
			likeitemPhoto.classList.add("likeitem__photo");
			const photoLike = katalog[likeitems[i+1]].photo;
			likeitemPhoto.innerHTML=(photoLike);
		
			const likeitemName = document.createElement("div");
			likeitemName.classList.add("likeitem__name");
			const likeitemNameStyle = document.createElement("p");
			likeitemNameStyle.classList.add("likeitem--style");
			likeitemNameStyle.append(katalog[likeitems[i+1]].title)
			likeitemName.append(likeitemNameStyle);
			likeitem.append(likeitemPhoto);
			likeitem.append(likeitemName);
	
			const likeitemSize = document.createElement("div");
			likeitemSize.classList.add("likeitem__size");
			const likeitemSizeStyle = document.createElement("p");
			likeitemSizeStyle.classList.add("likeitem--style");
			likeitemSizeStyle.append(likeitems[i])
			likeitemSize.append(likeitemSizeStyle);
			likeitem.append(likeitemSize);
	
			const likeitemPrise = document.createElement("div");
			likeitemPrise.classList.add("likeitem__prise");
			const likeitemPriseStyle = document.createElement("p");
			likeitemPriseStyle.classList.add("likeitem--style");
			likeitemPriseStyle.append(katalog[likeitems[i+1]].prise)
			likeitemPrise.append(likeitemPriseStyle);	
			likeitem.append(likeitemPrise);
	
	
			const buttonlike = document.createElement("div")
			buttonlike.classList.add("likeitem__button")
			for(let counti = 0; counti<2;counti++){
				const buttonlikeStyle = document.createElement("div");
				buttonlikeStyle.classList.add("likeitem__button--block")
				if(counti==0){
					const addIlemLike = document.createElement("button");
					addIlemLike.append("Добавить в корзину");
					addIlemLike.classList.add("likeitem__button--add")
					buttonlikeStyle.append(addIlemLike);
					buttonlike.append(buttonlikeStyle);
				}
				if(counti==1){
					const delitIlemLike = document.createElement("button")
					delitIlemLike.append("Убрать из списка");
					delitIlemLike.classList.add("likeitem__button--remove")
					buttonlikeStyle.append(delitIlemLike)
					buttonlike.append(buttonlikeStyle);
				}
	
			}
			likeitem.append(buttonlike)
			listSaveLike.append(likeitem);
		}
	}else{
		const LikelistError = document.createElement("div");
		LikelistError.classList.add("likelist__error");
		const LikelistText = document.createElement("div");
		LikelistText.classList.add("likelist__text");
		const LikelistLink = document.createElement("div");
		LikelistLink.classList.add("likelist__link");
		const LikelistErrorText = document.createElement("p");
		LikelistErrorText.classList.add("likelist__error--text");
		LikelistErrorText.append("Избранное пустое");
		LikelistLink.innerHTML = "<a class=\"likelist__text--link\" href=\"catalog.html\">Перейти в каталог</a>";
		LikelistText.append(LikelistErrorText);
		LikelistError.append(LikelistText);
		LikelistError.append(LikelistLink);
		likedesklist.append(LikelistError)

	}

}
const likedesklist = document.getElementById("likelist");
likedesklist.addEventListener("click", e=>{
	buttonitem(e);
})
function buttonitem(e){
	let obj = e.target;
	if(obj.classList.contains("likeitem__button--remove")){
		let saveEleventindex = likeitems.indexOf(obj.parentNode.parentNode.parentNode.dataset.index);
		likeitems.splice(saveEleventindex,2);
		localStorage.likeitemchar = JSON.stringify(likeitems);
		removeListLike()
	}
}

function removeListLike(){
	likedesklist.innerHTML = "";
	addKataloglike(katalog);
}
const clickExit =  document.getElementById("exitProfil");
clickExit.onclick = function(){
	let ProfilCheckChoise1 = false;
	localStorage.removeItem("ProfilCheck");
	localStorage.removeItem("basketitemchar");
	localStorage.removeItem("likeitemchar");
	localStorage.basketitemchar = JSON.stringify([]);
	localStorage.likeitemchar = JSON.stringify([]);



	localStorage.ProfilCheck = JSON.stringify(ProfilCheckChoise1);
	document.getElementById("hideprofil").classList.add("profil__hide--all")
	document.getElementById("ProfilHide").classList.remove("show");
	document.getElementById("RegBlockCheck").classList.add("TrueReg");
}

const clickExitCheck =  document.getElementById("profile");
clickExitCheck.addEventListener("click", e=>{
	RedacktContent(e);
})
	
function RedacktContent(e){
	let obj =e.target;
	if(obj.classList.contains("settingredackt")||obj.classList.contains("profile__block--name")||obj.classList.contains("profile__block--text")){
		let list = obj.parentNode.parentNode;
		let redacktElement = list.querySelector("p");
		redacktElement.setAttribute("contenteditable","true");
		redacktElement.focus();
	}
}
