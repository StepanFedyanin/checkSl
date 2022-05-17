let katalog; 
async function open(){
	let respons = await fetch('jsonkatalog/katalog.json');
	katalog = await respons.json();
	console.log(katalog);
	addKatalogList(katalog);
}
open();
let idlike=0;
let checkElem = 0;

const NewKatalogDest = document.getElementById("newkatalog__list");
NewKatalogDest.addEventListener("click", e=>{
	idlike = e.id;
	ModalKatalog(e,katalog);
	})
let likeitem=JSON.parse(localStorage.likeitemchar || "[]");
let basketitem=JSON.parse(localStorage.basketitemchar || "[]");;

const lsitclothes =document.getElementById("lsitclothes");
function ModalKatalog(e,katalog){

	let obj =e.target;
	if(obj.classList.contains("kalalogclothes__item")){
		OpenModalKatalog(obj.id)
	}
	if(obj.classList.contains("kalalogclothes__title--style")||obj.classList.contains("kalalogclothes__prise--style")||obj.classList.contains("kalalogclothes__photo--style")){
		OpenModalKatalog(obj.parentNode.parentNode.id)
	}


	if(obj.classList.contains("modalwindow__back--icon")){
		const filterNone = document.getElementById("filter");
		NewKatalogDest.classList.remove("hiden");
		obj.parentNode.parentNode.remove();
		lsitclothes.classList.remove("hiden");
	}
	if(obj.classList.contains("modalwindow__size--style")||obj.classList.contains("modalwindow__size--title")){
		obj.parentNode.classList.toggle("hiden");
		console.log(1);
	}
}
const CloseRegForm = document.getElementById("CloseReg");
CloseRegForm.onclick = function(){
	document.getElementById("RegBlockCheck").classList.remove("TrueReg")
}
function OpenModalKatalog(index){
	const filterNone = document.getElementById("filter");
	document.querySelector("footer").classList.add("hide");
	NewKatalogDest.classList.add("hiden");
		lsitclothes.classList.add("hiden");
		const ModalwindowBack = document.createElement("div");
		ModalwindowBack.classList.add("ModalwindowBack");
		ModalwindowBack.innerHTML=("<img class=\"modalwindow__back--icon\" src=\"photo/katalog/Arrow.svg\" alt=\"#\">");

		const ModalwindowPhotoSmall = document.createElement("div");
		ModalwindowPhotoSmall.classList.add("modalwindow__photo--small");
		for(let i=0;i<2;i++){
			for(let j=0;j<1;j++){
				const ModalwindowPhotoItem = document.createElement("div");
				ModalwindowPhotoItem.classList.add("modalwindow__photo--item");
				if(i==0){
					ModalwindowPhotoItem.innerHTML=katalog[index].photo2;
					ModalwindowPhotoSmall.append(ModalwindowPhotoItem);
				}
				if(i==1){
					ModalwindowPhotoItem.innerHTML=katalog[index].photo3;
					ModalwindowPhotoSmall.append(ModalwindowPhotoItem);
				}
			}
		}
		const ModalwindowPhotoBig = document.createElement("div");
		ModalwindowPhotoBig.classList.add("modalwindow__photo--big");
		const ModalwindowPhotoItem = document.createElement("div");
		ModalwindowPhotoItem.classList.add("modalwindow__photo--item");
		for(let i=1;i<1;i++){
			for(let j=0;j<1;j++){
				ModalwindowPhotoItem.innerHTML=katalog[index].photo;
				ModalwindowPhotoBig.append(ModalwindowPhotoItem);
			}
		}
		ModalwindowPhotoItem.innerHTML=katalog[index].photo;
		ModalwindowPhotoBig.append(ModalwindowPhotoItem);



		const ModalwindowPhoto = document.createElement("div");
		ModalwindowPhoto.classList.add("modalwindow__photo");
		ModalwindowPhoto.append(ModalwindowPhotoSmall);
		ModalwindowPhoto.append(ModalwindowPhotoBig);



		const ModalwindowInfo = document.createElement("div");
		ModalwindowInfo.classList.add("modalwindow__info");
		const ModalwindowContent = document.createElement("div");
		ModalwindowContent.classList.add("modalwindow__content");

		const ModalwindowTitle = document.createElement("div");
		ModalwindowTitle.classList.add("modalwindow__title");
		const ModalwindowTitleStyle = document.createElement("h1");
		ModalwindowTitleStyle.classList.add("modalwindow__title--style")
		ModalwindowTitleStyle.append(katalog[index].title);
		ModalwindowTitle.append(ModalwindowTitleStyle);
		ModalwindowInfo.append(ModalwindowTitle);


		const ModalwindowPrize = document.createElement("div");
		ModalwindowPrize.classList.add("modalwindow__prises");
		const ModalwindowPrizeStyle = document.createElement("p");
		ModalwindowPrizeStyle.classList.add("modalwindow__prises--style")
		ModalwindowPrizeStyle.append(katalog[index].prise);
		ModalwindowPrize.append(ModalwindowPrizeStyle);
		ModalwindowInfo.append(ModalwindowPrize);


		const ModalwindowListSize = document.createElement("div");
		ModalwindowListSize.classList.add("modalwindow__sizes");
		const ModalwindowSizeTitle = document.createElement("div");
		ModalwindowSizeTitle.classList.add("modalwindow__size--title");
		const ModalwindowSizeStyle = document.createElement("p");
		ModalwindowSizeStyle.append("Выбрать размер");
		ModalwindowSizeStyle.classList.add("modalwindow__size--style");
		ModalwindowSizeTitle.append(ModalwindowSizeStyle);
		ModalwindowListSize.append(ModalwindowSizeTitle)


		const ModalwindowSizeList = document.createElement("div");
		ModalwindowSizeList.classList.add("modalwindow__size--List");
		ModalwindowSizeList.setAttribute("id","SizeListModal")

		for(let j =0;j<katalog[index].size.length;j++){
			if(katalog[index].size[j]=="XS"){
				const ModalwindowSizeInput = document.createElement("input");
				const ModalwindowSize = document.createElement("div");
				ModalwindowSize.classList.add("modalwindow__size");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeXS");
				ModalwindowSizeInput.setAttribute("data-size","XS")
				ModalwindowSizeInput.setAttribute("name","ModalSize");

				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("XS");
				ModalwindowSizelabel.setAttribute("for","SizeXS")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);
				ModalwindowListSize.append(ModalwindowSizeList)
			}
			if(katalog[index].size[j]=="S"){
				const ModalwindowSizeInput = document.createElement("input");
				const ModalwindowSize = document.createElement("div");
				ModalwindowSize.classList.add("modalwindow__size");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeS");
				ModalwindowSizeInput.setAttribute("data-size","S")
				ModalwindowSizeInput.setAttribute("name","ModalSize");

				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("S");
				ModalwindowSizelabel.setAttribute("for","SizeS")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);
				ModalwindowListSize.append(ModalwindowSizeList)
			}
		  	if(katalog[index].size[j]=="M"){
				const ModalwindowSizeInput = document.createElement("input");
				const ModalwindowSize = document.createElement("div");
				ModalwindowSize.classList.add("modalwindow__size");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeM");
				ModalwindowSizeInput.setAttribute("data-size","M")
				ModalwindowSizeInput.setAttribute("name","ModalSize");

				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("M");
				ModalwindowSizelabel.setAttribute("for","SizeM")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);
				ModalwindowListSize.append(ModalwindowSizeList)
			}
			if(katalog[index].size[j]=="L"){
				const ModalwindowSizeInput = document.createElement("input");
				const ModalwindowSize = document.createElement("div");
				ModalwindowSize.classList.add("modalwindow__size");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeL");
				ModalwindowSizeInput.setAttribute("data-size","L")
				ModalwindowSizeInput.setAttribute("name","ModalSize");

				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("L");
				ModalwindowSizelabel.setAttribute("for","SizeL")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);
				ModalwindowListSize.append(ModalwindowSizeList)
			}
			if(katalog[index].size[j]=="XL"){
				const ModalwindowSizeInput = document.createElement("input");
				const ModalwindowSize = document.createElement("div");
				ModalwindowSize.classList.add("modalwindow__size");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeXS");
				ModalwindowSizeInput.setAttribute("data-size","XL")
				ModalwindowSizeInput.setAttribute("name","ModalSize");

				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("XL");
				ModalwindowSizelabel.setAttribute("for","SizeXL")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);
				ModalwindowListSize.append(ModalwindowSizeList)
			}
			if(katalog[index].size[j]=="XXL"){
				const ModalwindowSizeInput = document.createElement("input");
				const ModalwindowSize= document.createElement("div");
				ModalwindowSize.classList.add("modalwindow__size");
				ModalwindowSizeInput.classList.add("Modalkatalog__item--input");
				ModalwindowSizeInput.setAttribute("type","radio")
				ModalwindowSizeInput.setAttribute("id","SizeXXL");
				ModalwindowSizeInput.setAttribute("data-size","XXL")
				ModalwindowSizeInput.setAttribute("name","ModalSize");

				const ModalwindowSizelabel = document.createElement("label");
				ModalwindowSizelabel.classList.add("Modalkatalog__item--label");
				ModalwindowSizelabel.append("XS");
				ModalwindowSizelabel.setAttribute("for","SizeXXL")
				ModalwindowSize.append(ModalwindowSizeInput);
				ModalwindowSize.append(ModalwindowSizelabel);
				ModalwindowSizeList.append(ModalwindowSize);
				ModalwindowListSize.append(ModalwindowSizeList)
		}
		ModalwindowInfo.append(ModalwindowListSize);

	}
		const ModalwindowAdd = document.createElement("div");
		ModalwindowAdd.classList.add("modalwindow__add");
		for(let i=0;i<2;i++){
			const ModalwindowAddItem= document.createElement("div");
			ModalwindowAddItem.classList.add("modalwindow__add--item");
			const ModalwindowAddButton=document.createElement("button") ;
			if(i==0){
				ModalwindowAddButton.classList.add("modalwindow__add--button"); 
				ModalwindowAddButton.setAttribute("id","addBasketList")
				ModalwindowAddButton.append("В корзину")
			}
			if(i==1){
				ModalwindowAddButton.classList.add("modalwindow__like--button"); 
				ModalwindowAddButton.setAttribute("id","addLikeList")
				ModalwindowAddButton.append("В избраноое")
			}
			ModalwindowAddItem.append(ModalwindowAddButton)
			ModalwindowAdd.append(ModalwindowAddItem);
		}
		ModalwindowInfo.append(ModalwindowAdd);
		const ModalwindowDescriptionName = document.createElement("div");
		ModalwindowDescriptionName.classList.add("modalwindow__description--name");
		const ModalwindowDescriptionTitile = document.createElement("h2");
		ModalwindowDescriptionTitile.classList.add("modalwindow__description--prase")
		ModalwindowDescriptionTitile.append("Описание");
		ModalwindowDescriptionName.append(ModalwindowDescriptionTitile)


		const ModalwindowComposition = document.createElement("div");
		ModalwindowComposition.classList.add("modalwindow__composition");
		for(let i=0;i<5;i++){
			const ModalwindowCompositionText = document.createElement("div");
			ModalwindowCompositionText.classList.add("modalwindow__composition--text");
			const ModalwindowCompositionStyle = document.createElement("p");
			ModalwindowCompositionStyle.classList.add("modalwindow__composition--style");
			if(i==0){
				ModalwindowCompositionStyle.append(katalog[index].OPcomposition)
				ModalwindowCompositionText.append(ModalwindowCompositionStyle);
			}
			if(i==1){
				ModalwindowCompositionStyle.append(katalog[index].dopcomposition)
				ModalwindowCompositionText.append(ModalwindowCompositionStyle);
			}
			if(i==2){
				ModalwindowCompositionStyle.append(katalog[index].wash)
				ModalwindowCompositionText.append(ModalwindowCompositionStyle);
			}
			if(i==3){
				ModalwindowCompositionStyle.append(katalog[index].dopWash)
				ModalwindowCompositionText.append(ModalwindowCompositionStyle);
			}
			if(i==4){
				ModalwindowCompositionStyle.append(katalog[index].dopinfo)
				ModalwindowCompositionText.append(ModalwindowCompositionStyle);
			}
			ModalwindowComposition.append(ModalwindowCompositionText);
		}

		const ModalwindowDescription = document.createElement("div");
		ModalwindowDescription.classList.add("modalwindow__description");
		ModalwindowDescription.append(ModalwindowDescriptionName);
		ModalwindowDescription.append(ModalwindowComposition);


		ModalwindowInfo.append(ModalwindowDescription);

		ModalwindowContent.append(ModalwindowPhoto);
		ModalwindowContent.append(ModalwindowInfo);
		const ModalWindow = document.createElement("div");
		ModalWindow.setAttribute("id","openModalWindow")
		ModalWindow.setAttribute("data-index",index)
		ModalWindow.classList.add("modalwindow");
		ModalWindow.append(ModalwindowBack);
		ModalWindow.append(ModalwindowContent);
		NewKatalogDest.append(ModalWindow);
		
		const KatalogButtonAddLike = document.getElementById("addLikeList");
		KatalogButtonAddLike.onclick = function(){
			CheckAndAddLIke();
		}
		const KatalogButtonAddBasket = document.getElementById("addBasketList");
		KatalogButtonAddBasket.onclick = function(){
			CheckAndAddBasket();
		}
}
function CheckAndAddBasket(){
	if(JSON.parse(localStorage.ProfilCheck)==true){
		let CountCheckSaveBasket = 0;
		const saveIdListLike = document.getElementById("openModalWindow");
		const sizeItemLike = document.querySelectorAll(".Modalkatalog__item--input")
		const indexSave = saveIdListLike.dataset.index;
		for(let count = 0; count<sizeItemLike.length;count++){
			if(sizeItemLike[count].checked){
				const sizeSave = sizeItemLike[count].dataset.size;
				basketitem.push(sizeSave)
				CountCheckSaveBasket++;
			}
		}
		if(CountCheckSaveBasket>0){
			basketitem.push(indexSave)
			localStorage.basketitemchar = JSON.stringify(basketitem);
			CountCheckSaveBasket=0;
		}
	}else{
		document.getElementById("CatologCheck").classList.add("noshow");
		document.getElementById("RegBlockCheck").classList.add("TrueReg");
		document.getElementById("footer").classList.add("hide");
	}
}

function CheckAndAddLIke(){
	if(JSON.parse(localStorage.ProfilCheck)==true){
		let CountCheckSaveLIke = 0;
		const saveIdListLike = document.getElementById("openModalWindow");
		const sizeItemLike = document.querySelectorAll(".Modalkatalog__item--input")
		const indexSave = saveIdListLike.dataset.index;
		for(let count = 0; count<sizeItemLike.length;count++){
			if(sizeItemLike[count].checked){
				const sizeSave = sizeItemLike[count].dataset.size;
				likeitem.push(sizeSave)
				CountCheckSaveLIke++;
			}
		}
		if(CountCheckSaveLIke>0){
			likeitem.push(indexSave)
			localStorage.likeitemchar = JSON.stringify(likeitem);
			CountCheckSaveLIke=0;
		}
	}else{
		document.getElementById("CatologCheck").classList.add("noshow");
		document.getElementById("RegBlockCheck").classList.add("TrueReg");
		document.getElementById("footer").classList.add("hide");
	}

}
const ToComeInCheck = document.getElementById("ToComeIn");
ToComeInCheck.onclick = function(){
	if(document.getElementById("CheckEmail").value=="root@mail.ru"&&document.getElementById("CheckPassword").value=="1234"){
		document.getElementById("CatologCheck").classList.remove("noshow");
		document.getElementById("RegBlockCheck").classList.remove("TrueReg");
		document.getElementById("footer").classList.remove("hide");
		localStorage.removeItem("ProfilCheck");
		ProfilChoiseCheck = true;
		localStorage.ProfilCheck = JSON.stringify(ProfilChoiseCheck);
	}
}

function addKatalogList(katalog){
	for(let i=0;i<katalog.length;i++){
		for(let j=0;j<1;j++){
			const KalalogclothesTitle = document.createElement("div");
			KalalogclothesTitle.classList.add("newkalalogclothes__item--title");
			const KalalogclothesTitleStyle=document.createElement("h2")
			KalalogclothesTitleStyle.classList.add("newkalalogclothes__title--style");
			KalalogclothesTitleStyle.append(katalog[i].title)
			KalalogclothesTitle.append(KalalogclothesTitleStyle);
	
			const KalalogclothesPhoto = document.createElement("div");
			KalalogclothesPhoto.classList.add("newkalalogclothes__item--photo");
			KalalogclothesPhoto.innerHTML= (katalog[i].photo);
	
			const KalalogclothesPrise = document.createElement("div");
			KalalogclothesPrise.classList.add("newkalalogclothes__item--prise");
			const KalalogclothesPriseStyle=document.createElement("h2");
			KalalogclothesPriseStyle.classList.add("newkalalogclothes__prise--style")
			KalalogclothesPriseStyle.append(katalog[i].prise);
			KalalogclothesPrise.append(KalalogclothesPriseStyle);
	
	
			const KalalogclothesItem = document.createElement("div");
			KalalogclothesItem.classList.add("newkalalogclothes__item");
			KalalogclothesItem.setAttribute("id",i);
			KalalogclothesItem.append(KalalogclothesTitle);
			KalalogclothesItem.append(KalalogclothesPhoto);
			KalalogclothesItem.append(KalalogclothesPrise);
			NewKatalogDest.append(KalalogclothesItem);
		}
	}
}
document.getElementById("RegBlockCheck").addEventListener("click", e=>{
	RegistExit(e);
})
function RegistExit(e){
	let obj = e.target;
	if(obj.classList.contains("")){

	}

}