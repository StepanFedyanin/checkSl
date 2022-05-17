let katalog; 
async function open(){
	let respons = await fetch('jsonkatalog/katalog.json');
	katalog = await respons.json();
	console.log(katalog);
	addKatalogList(katalog);
}
open();
// выпадающее меню в фильтере выпадающее меню в фильтере выпадающее меню в фильтере выпадающее меню в фильтере
const filter = document.getElementById("filter");
filter.addEventListener("click", e=>{
	FilterItem(e);
	})
function FilterItem(e){
	let obj =e.target;
	if(obj.classList.contains("filter__title--size")){
		const filterList = document.getElementById("FilterSizeList");
		filterList.classList.toggle("show")
	}
	if(obj.classList.contains("filter__title--gender")){
		const filterList = document.getElementById("FilterGenderList");
		filterList.classList.toggle("show")
	}
	if(obj.classList.contains("filter__title--color")){
		const filterList = document.getElementById("FilterСolorList");
		filterList.classList.toggle("show")
	}
	if(obj.classList.contains("filter__title--type")){
		const filterList = document.getElementById("FilterTypeList");
		filterList.classList.toggle("show")
	}
	if(obj.classList.contains("filter__title--season")){
		const filterList = document.getElementById("FilterSeasonList");
		filterList.classList.toggle("show")
	}
	if(obj.classList.contains("filter__title--composition")){
		const filterList = document.getElementById("FilterCompositionList");
		filterList.classList.toggle("show")
	}
}	const RoadItemClothesHody = document.getElementById("RoadItemClothesHody");
	RoadItemClothesHody.onclick = function(){
		while(KatalogDest.firstChild){
			KatalogDest.removeChild(KatalogDest.firstChild);
		}
		for(let i=0;i<katalog.length;i++){
			if(katalog[i][10]=="Худи"){
				DeskAddList(i);

			}
		}
	}
	const RoadItemClothesShirt = document.getElementById("RoadItemClothesShirt");
	RoadItemClothesShirt.onclick = function(){
		while(KatalogDest.firstChild){
			KatalogDest.removeChild(KatalogDest.firstChild);
		}
		for(let i=0;i<katalog.length;i++){
			if(katalog[i][10]=="Рубашки"){
				DeskAddList(i);

			}
		}
	}
	const RoadItemClothesTshirt = document.getElementById("RoadItemClothesTshirt");
	RoadItemClothesTshirt.onclick = function(){
		while(KatalogDest.firstChild){
			KatalogDest.removeChild(KatalogDest.firstChild);
		}
		for(let i=0;i<katalog.length;i++){
			if(katalog[i][10]=="Футболки"){
				DeskAddList(i);

			}
		}
	}
	const RoadItemClothesSwete = document.getElementById("RoadItemClothesLong");
	RoadItemClothesSwete.onclick = function(){
		while(KatalogDest.firstChild){
			KatalogDest.removeChild(KatalogDest.firstChild);
		}
		for(let i=0;i<katalog.length;i++){
			if(katalog[i][10]=="Лонгсливы"){
				DeskAddList(i);

			}
		}
	}
	const RoadItemClothesJacet = document.getElementById("RoadItemClothesJacet");
	RoadItemClothesJacet.onclick = function(){
		while(KatalogDest.firstChild){
			KatalogDest.removeChild(KatalogDest.firstChild);
		}
		for(let i=0;i<katalog.length;i++){
			if(katalog[i][10]=="Пуховики"){
				DeskAddList(i);

			}
		}
	}
	const RoadItemClothesJence = document.getElementById("RoadItemClothesJence");
	RoadItemClothesJence.onclick = function(){
		while(KatalogDest.firstChild){
			KatalogDest.removeChild(KatalogDest.firstChild);
		}
		for(let i=0;i<katalog.length;i++){
			if(katalog[i][10]=="Джинсы"){
				DeskAddList(i);
			}
		}
	}
const FiterBurgerIcon = document.getElementById("fiter__burger--icon");
FiterBurgerIcon.onclick = function(){
	const FilterCategoryList= document.getElementById("filter__category--list");
	FilterCategoryList.classList.toggle("filterShow")

}
const KatalogDest = document.getElementById("katalog__list");
const FilterSubmit = document.getElementById("filtersubmit");
FilterSubmit.onclick = function(){

	const SizeXS = document.getElementById("sizexs");
	const SizeS = document.getElementById("sizes");
	const SizeM = document.getElementById("sizem");
	const SizeL = document.getElementById("sizel");
	const SizeXL = document.getElementById("sizexl");
	const SizeXXL = document.getElementById("sizexxl");

	const ColorRed = document.getElementById("ColorRed");
	const ColorBlack = document.getElementById("ColorBlack");
	const ColorWhite = document.getElementById("ColorWhite");
	const ColorGreen = document.getElementById("ColorGreen");
	const ColorPurple = document.getElementById("ColorPurple");
	const ColorBlue = document.getElementById("ColorBlue");
	const ColorRainbow = document.getElementById("ColorRainbow");
	const ColorYellow = document.getElementById("ColorYellow");
	const ColorGray = document.getElementById("ColorGray");

	const TypeZip = document.getElementById("Typezip");
	const Typehoodie = document.getElementById("Typehoodie");
	const TypetShirts = document.getElementById("Typet-shirts");
	const TypeDownJacket = document.getElementById("TypeDownJacket");
	const TypeJeans = document.getElementById("TypeJeans");
	const TypeTurtlenecks = document.getElementById("TypeTurtlenecks");
	const TypeSkirts = document.getElementById("TypeSkirts");
	const TypeDresses = document.getElementById("TypeDresses");
	const TypeShirts = document.getElementById("TypeShirts");
	const TypeLongSleeves = document.getElementById("TypeLongSleeves");
	const TypeSweatshirts = document.getElementById("TypeSweatshirts");
	
	const SeasonSummer = document.getElementById("SeasonSummer");
	const SeasonWinter = document.getElementById("SeasonWinter");
	const SeasonDemi = document.getElementById("SeasonDemi");
	const SeasonYearRound = document.getElementById("SeasonYearRound");

	const СompositionСotton = document.getElementById("СompositionСotton");
	const СompositionPolyester = document.getElementById("СompositionPolyester");
	const СompositionWool = document.getElementById("СompositionWool");
	const СompositionDenim = document.getElementById("СompositionDenim");
	const СompositionLeather = document.getElementById("СompositionLeather");
	const СompositionLeatherDeputy = document.getElementById("СompositionLeatherDeputy");
	const СompositionNylon = document.getElementById("СompositionNylon");


	let NewClothwsChar = [];
	if(SizeXS.checked||SizeS.checked||SizeM.checked||SizeL.checked||SizeXL.checked||SizeXXL.checked||
		ColorRed.checked||ColorBlack.checked||ColorWhite.checked||ColorGreen.checked||ColorPurple.checked||ColorBlue.checked||ColorRainbow.checked||ColorYellow.checked||ColorGray.checked||
		TypeZip.checked||Typehoodie.checked||TypetShirts.checked||TypeDownJacket.checked||TypeJeans.checked||TypeTurtlenecks.checked||TypeSkirts.checked||TypeDresses.checked||TypeShirts.checked||TypeLongSleeves.checked||TypeSweatshirts.checked||
		SeasonSummer.checked||SeasonWinter.checked||SeasonDemi.checked||SeasonYearRound.checked||
		СompositionСotton.checked||СompositionPolyester.checked||СompositionWool.checked||СompositionDenim.checked||СompositionLeather.checked||СompositionLeatherDeputy.checked||СompositionNylon.checked)
		{
			const newfiler = {
				size:[],
				color:[],
				type:[],
				season:[],
				composition:[],
			} 

			let CountSize=0;
			while(KatalogDest.firstChild){
				KatalogDest.removeChild(KatalogDest.firstChild);
			}
			if(SizeXS.checked){
				newfiler.size.push("XS");
				CountSize++;
			}
			if(SizeS.checked){
				newfiler.size.push("S");
				CountSize++;

			}
			if(SizeM.checked){
				newfiler.size.push("M");
				CountSize++;

			}
			if(SizeL.checked){
				newfiler.size.push("L");
				CountSize++;

			}
			if(SizeXL.checked){
				newfiler.size.push("XL");
				CountSize++;

			}
			if(SizeXXL.checked){
				newfiler.size.push("XXL");
				CountSize++;
			}
			if(CountSize==0){
				newfiler.size.push("XS","S","M","L","XL","XXL");
			}

			let CountColor=0;
			if(ColorRed.checked){
				newfiler.color.push("Red");
				CountColor++;
			}
			if(ColorBlack.checked){
				newfiler.color.push("Black");
				CountColor++;

			}
			if(ColorWhite.checked){
			newfiler.color.push("White");
			CountColor++;

			}
			if(ColorGreen.checked){
			newfiler.color.push("Green");
			CountColor++;

			}
			if(ColorPurple.checked){
				newfiler.color.push("Purple");
				CountColor++;

			}
			if(ColorBlue.checked){
				newfiler.color.push("Blue");
				CountColor++;

			}
			if(ColorRainbow.checked){
				newfiler.color.push("Rainbow");
				CountColor++;


			}
			if(ColorYellow.checked){
				newfiler.color.push("Yellow");
				CountColor++;

			}
			if(ColorGray.checked){
				newfiler.color.push("Gray");
				CountColor++;

			}
			if(CountColor==0){
				newfiler.color.push("Red","Black","White","Green","Purple","Blue","Rainbow","Yellow","Gray");
			}

		
		let CountType = 0;
			if(TypeZip.checked){
				newfiler.type.push("На молнии");
				CountType++;
			}
			if(Typehoodie.checked){
				newfiler.type.push("Худи");
				CountType++;

		
			}
			if(TypetShirts.checked){
				newfiler.type.push("Футболки");
				CountType++;

			}
			if(TypeDownJacket.checked){
				newfiler.type.push("Пуховики");
				CountType++;

			}
			if(TypeJeans.checked){
				newfiler.type.push("Джинсы");
				CountType++;

			}
			if(TypeTurtlenecks.checked){
				newfiler.type.push("Водолазки");
				CountType++;

			}
			if(TypeSkirts.checked){
				newfiler.type.push("Юбки");
				CountType++;

			}
			if(TypeDresses.checked){
				newfiler.type.push("Платья");
				CountType++;

			}
			if(TypeShirts.checked){
				newfiler.type.push("Рубашки");
				CountType++;
	
			}
			if(TypeLongSleeves.checked){
				newfiler.type.push("Лонгсливы");
				CountType++;

			}
			if(TypeSweatshirts.checked){
				newfiler.type.push("Тостовки");
				CountType++;
	
			}
			if(CountType==0){
				newfiler.type.push("На молнии","Худи","Футболки","Пуховики","Джинсы","Водолазки","Юбки","Платья","Рубашки","Лонгсливы","Тостовки");

			}
		
		
			let CountSeason=0;
			if(SeasonSummer.checked){
				newfiler.season.push("Summer");
				CountSeason++;
			}
			if(SeasonWinter.checked){
				newfiler.season.push("Winter");
				CountSeason++;
			}
			if(SeasonDemi.checked){
				newfiler.season.push("Demi");
				CountSeason++;
			}
			if(SeasonYearRound.checked){
				newfiler.season.push("YearRound");
				CountSeason++;
			}
			if(CountSeason==0){
				newfiler.season.push("Summer","Winter","Demi","YearRound")
			}
		
		
		let CountСomposition=0;
			if(СompositionСotton.checked){
				newfiler.composition.push("Сotton");
				CountСomposition++;
			}
			if(СompositionPolyester.checked){
				newfiler.composition.push("Polyester");	
				CountСomposition++;
	
			}
			if(СompositionWool.checked){
				newfiler.composition.push("Wool");
				CountСomposition++;
			}
			if(СompositionDenim.checked){
				newfiler.composition.push("Denim");
				CountСomposition++;
			}
			if(СompositionLeather.checked){
				newfiler.composition.push("Leather");
				CountСomposition++;

			}
			if(СompositionLeatherDeputy.checked){
				newfiler.composition.push("LeatherDeputy");
				CountСomposition++;
			}
			if(СompositionNylon.checked){
				newfiler.composition.push("Nylon");
				CountСomposition++;
			}	
			if(CountСomposition==0){
				newfiler.composition.push("Сotton","Polyester","Wool","Denim","Nylon","Leather","LeatherDeputy");
			}


			const checkers = {
				type: (element, type) => {
					for(let i=0; i<type.length;i++){
						console.log(value)
						console.log(key)
						return element.type.includes(type[i]);
					}
				},
				season: (element, season) => {
					for(let i=0; i<types.length;i++){
				 		return element.season.includes(season[i]);
					}
				},
				sizes: (element, size) => {
					for(let i=0; i<type.length;i++){
				  		return element.size.includes(size[i]);
					}
				},
				color:(element, colors) => {
					for(let i=0; i<types.length;i++){
						return element.color.includes(colors[i])
					}
				},
				composition:(element, compositions) => {
					for(let i=0; i<types.length;i++){
						return element.composition.includes(compositions[i])
					}
				}
			 };
			const filterKatalog1 = (options) => {
				return katalog.filter((element) => {
				  let checkt = true;
				  Object.entries(options).forEach(([key, value]) => {
						checkt = checkt && checkers[key](element, value);
				  });
			 
				  return checkt;
				});
			 };
			 
			 console.log(filterKatalog1(newfiler));

}
}

let idlike=0;
let checkElem = 0;
KatalogDest.addEventListener("click", e=>{
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
		KatalogDest.classList.remove("hiden");
		obj.parentNode.parentNode.remove();
		filterNone.classList.remove("hiden");
		lsitclothes.classList.remove("hiden");
	}
	if(obj.classList.contains("modalwindow__size--style")||obj.classList.contains("modalwindow__size--title")){
		obj.parentNode.classList.toggle("hiden");
		console.log(1);
		// const SizeXS = document.getElementById("SizeXS");
		// if(SizeXS.checked){
		// 	SizeXS.parentNode.classList.add("choiceSize")
		// 	SizeS.parentNode.classList.remove("choiceSize")
		// 	SizeM.parentNode.classList.remove("choiceSize")
		// 	SizeL.parentNode.classList.remove("choiceSize")
		// 	SizeXL.parentNode.classList.remove("choiceSize")
		// 	SizeXXl.parentNode.classList.remove("choiceSize")
		// }
		// const SizeS = document.getElementById("SizeS");
		// if(SizeS.checked){
		// 	SizeXS.parentNode.classList.remove("choiceSize")
		// 	SizeS.parentNode.classList.add("choiceSize")
		// 	SizeM.parentNode.classList.remove("choiceSize")
		// 	SizeL.parentNode.classList.remove("choiceSize")
		// 	SizeXL.parentNode.classList.remove("choiceSize")
		// 	SizeXXl.parentNode.classList.remove("choiceSize")
		// }
		// const SizeM = document.getElementById("SizeM");
		// const SizeL = document.getElementById("SizeL");
		// const SizeXL = document.getElementById("SizeXL");

		// 	SizeXS.parentNode.classList.remove("choiceSize")
		// 	SizeS.parentNode.classList.remove("choiceSize")
		// 	SizeM.parentNode.classList.add("choiceSize")
		// 	SizeL.parentNode.classList.remove("choiceSize")
		// 	SizeXL.parentNode.classList.remove("choiceSize")
		// 	SizeXXl.parentNode.classList.remove("choiceSize")
		// }
		// if(SizeL.checked){
		// 	SizeXS.parentNode.classList.remove("choiceSize")
		// 	SizeS.parentNode.classList.remove("choiceSize")
		// 	SizeM.parentNode.classList.remove("choiceSize")
		// 	SizeL.parentNode.classList.add("choiceSize")
		// 	SizeXL.parentNode.classList.remove("choiceSize")
		// 	SizeXXl.parentNode.classList.remove("choiceSize")
		// }
		// if(SizeXL.checked){
		// 	SizeXS.parentNode.classList.remove("choiceSize")
		// 	SizeS.parentNode.classList.remove("choiceSize")
		// 	SizeM.parentNode.classList.remove("choiceSize")
		// 	SizeL.parentNode.classList.remove("choiceSize")
		// 	SizeXL.parentNode.classList.add("choiceSize")
		// 	SizeXXl.parentNode.classList.remove("choiceSize")
		// }
		// const SizeXXl = document.getElementById("SizeXXL");
		// if(SizeXXl.checked){
		// 	SizeXS.parentNode.classList.remove("choiceSize")
		// 	SizeS.parentNode.classList.remove("choiceSize")
		// 	SizeM.parentNode.classList.remove("choiceSize")
		// 	SizeL.parentNode.classList.remove("choiceSize")
		// 	SizeXL.parentNode.classList.remove("choiceSize")
		// 	SizeXXl.parentNode.classList.add("choiceSize")
		// }
	}
}
function OpenModalKatalog(index){
	const filterNone = document.getElementById("filter");
	document.querySelector("footer").classList.add("hide");
		KatalogDest.classList.add("hiden");
		lsitclothes.classList.add("hiden");
		filterNone.classList.add("hiden");
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
		KatalogDest.append(ModalWindow);
		
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
			KalalogclothesTitle.classList.add("kalalogclothes__item--title");
			const KalalogclothesTitleStyle=document.createElement("h2")
			KalalogclothesTitleStyle.classList.add("kalalogclothes__title--style");
			KalalogclothesTitleStyle.append(katalog[i].title)
			KalalogclothesTitle.append(KalalogclothesTitleStyle);
	
			const KalalogclothesPhoto = document.createElement("div");
			KalalogclothesPhoto.classList.add("kalalogclothes__item--photo");
			KalalogclothesPhoto.innerHTML= (katalog[i].photo);
	
			const KalalogclothesPrise = document.createElement("div");
			KalalogclothesPrise.classList.add("kalalogclothes__item--prise");
			const KalalogclothesPriseStyle=document.createElement("h2");
			KalalogclothesPriseStyle.classList.add("kalalogclothes__prise--style")
			KalalogclothesPriseStyle.append(katalog[i].prise);
			KalalogclothesPrise.append(KalalogclothesPriseStyle);
	
	
			const KalalogclothesItem = document.createElement("div");
			KalalogclothesItem.classList.add("kalalogclothes__item");
			KalalogclothesItem.setAttribute("id",i);
			KalalogclothesItem.append(KalalogclothesTitle);
			KalalogclothesItem.append(KalalogclothesPhoto);
			KalalogclothesItem.append(KalalogclothesPrise);
			KatalogDest.append(KalalogclothesItem);
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



