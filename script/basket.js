let ProfilChoiseCheck=JSON.parse(localStorage.ProfilCheck);
if(ProfilChoiseCheck==false){
	const ToComeInCheck = document.getElementById("ToComeIn");
	ToComeInCheck.onclick = function(){
		if(document.getElementById("CheckEmail").value=="root@mail.ru"&&document.getElementById("CheckPassword").value=="1234"){
			document.getElementById("ProfilHide").classList.add("show");
			document.getElementById("RegBlockCheck").classList.remove("TrueReg");
			localStorage.removeItem("ProfilCheck");
			ProfilChoiseCheck = true;
			localStorage.ProfilCheck = JSON.stringify(ProfilChoiseCheck);
		}
	}
}else{
	document.getElementById("container--basket").classList.add("show");
	document.getElementById("RegBlockCheck").classList.remove("TrueReg");
}

let katalog; 
async function open(){
	let respons = await fetch('jsonkatalog/katalog.json');
	katalog = await respons.json();
	addKatalogBasket(katalog);
}
open();
let basketitem = JSON.parse(localStorage.basketitemchar || "[]");;
function addKatalogBasket(katalog){
	const listSaveBasket = document.getElementById("basket__list");
	if(basketitem.length>1){
		document.getElementById("paymenthide").classList.remove("hide");
		for(let i = 0; i<basketitem.length;i+=2){
			const likeitem = document.createElement("div");
			likeitem.classList.add("basketitem");
			likeitem.setAttribute("data-index",basketitem[i+1]);
			likeitem.setAttribute("data-sise",basketitem[i]);
		
			const likeitemPhoto = document.createElement("div");
			likeitemPhoto.classList.add("basketitem__photo");
			const photoLike = katalog[basketitem[i+1]].photo;
			likeitemPhoto.innerHTML=(photoLike);
		
			const likeitemName = document.createElement("div");
			likeitemName.classList.add("basketitem__name");
			const likeitemNameStyle = document.createElement("p");
			likeitemNameStyle.classList.add("basketitem--style");
			likeitemNameStyle.append(katalog[basketitem[i+1]].title)
			likeitemName.append(likeitemNameStyle);
			likeitem.append(likeitemPhoto);
			likeitem.append(likeitemName);
	
			const likeitemSize = document.createElement("div");
			likeitemSize.classList.add("basketitem__size");
			const likeitemSizeStyle = document.createElement("p");
			likeitemSizeStyle.classList.add("basketitem--style");
			likeitemSizeStyle.append(basketitem[i])
			likeitemSize.append(likeitemSizeStyle);
			likeitem.append(likeitemSize);
	
			const likeitemPrise = document.createElement("div");
			likeitemPrise.classList.add("basketitem__prise");
			const likeitemPriseStyle = document.createElement("p");
			likeitemPriseStyle.classList.add("basketitem--style");
			likeitemPriseStyle.append(katalog[basketitem[i+1]].prise)
			likeitemPrise.append(likeitemPriseStyle);	
			likeitem.append(likeitemPrise);
	
	
			const buttonlike = document.createElement("div")
			buttonlike.classList.add("basketitem__button")
			const buttonlikeStyle = document.createElement("div");
			buttonlikeStyle.classList.add("basketitem__button--block")
			const delitIlemLike = document.createElement("button")
			delitIlemLike.append("Убрать из списка");
			delitIlemLike.classList.add("basketitem__button--remove")
			buttonlikeStyle.append(delitIlemLike)
			buttonlike.append(buttonlikeStyle);
			likeitem.append(buttonlike)
			listSaveBasket.append(likeitem);
		}
		let SumPriseEnd =0;
		for(let i = 0; i<basketitem.length;i+=2){			
			SumPriseEnd+=parseInt(katalog[basketitem[i+1]].prise);
		}
		document.getElementById("SumItems").append(SumPriseEnd+"р");
		document.getElementById("SumEnd").append(parseInt(SumPriseEnd+249)+"р");

	}else{
		document.getElementById("paymenthide").classList.add("hide");
		const ContainerContent = document.createElement("div");
		ContainerContent.classList.add("container");
		const LikelistError = document.createElement("div");
		LikelistError.classList.add("button__error");
		const LikelistText = document.createElement("div");
		LikelistText.classList.add("buttonlist__text");
		const LikelistLink = document.createElement("div");
		LikelistLink.classList.add("buttonlist__link");
		const LikelistErrorText = document.createElement("p");
		LikelistErrorText.classList.add("buttonlist__error--text");
		LikelistErrorText.append("Избранное пустое");
		LikelistLink.innerHTML = "<a class=\"buttonlist__text--link\" href=\"catalog.html\">Перейти в каталог</a>";
		LikelistText.append(LikelistErrorText);
		LikelistError.append(LikelistText);
		LikelistError.append(LikelistLink);
		ContainerContent.append(LikelistError);
		Basketdesklist.append(ContainerContent)
	}

}
const Basketdesklist = document.getElementById("basket__list");
Basketdesklist.addEventListener("click", e=>{
	buttonitem(e);
})
function buttonitem(e){
	let obj = e.target;
	if(obj.classList.contains("basketitem__button--remove")){
		let saveEleventindex = basketitem.indexOf(obj.parentNode.parentNode.parentNode.dataset.index);
		basketitem.splice(saveEleventindex,2);
		localStorage.basketitemchar = JSON.stringify(basketitem);
		removeListBasket()
	}
}
function removeListBasket(){
	Basketdesklist.innerHTML = "";
	addKatalogBasket(katalog);
	console.log(1)
}