// javascript 
document.addEventListener('DOMContentLoaded', function() {
/**
 * @param  {string}
 * @return {null}
 */
 function getData(variant) {
 	var xhttp = new XMLHttpRequest();
 	xhttp.onreadystatechange = function() {
 		if (this.readyState == 4 && this.status == 200) {
 			var allPrograms = JSON.parse(this.responseText);
 			replaceElements(variant, allPrograms);
 		}
 	};
 	xhttp.open("GET", "data/data.json", true);
 	xhttp.send();

/**
 * @param  {string}
 * @param  {object}
 * @return {null}
 */
 function replaceElements(variant, data) {
 	var variant = variant;
 	var title = "",
 	episode_title = "",
 	category = "",
 	image = "";

 	for(var i = 0; i < data.length; i++) {

 		if (data[i].id == variant) {

 			title = data[i].brand_title;
 			episode_title = data[i].episode_title;
 			category = data[i].category;
 			image_path = data[i].image;

 			var titleContainer = document.getElementsByClassName("thumbnail-item__title"),
 			episodeContainer = document.getElementsByClassName("thumbnail-item__subtitle"),
 			catContainer = document.getElementsByClassName("thumbnail-item__desc__label"),
 			imageContainer = document.getElementsByClassName("rs-image"),
 			imageTagSourceSource = document.getElementsByTagName("source")[0],
 			imageTagImgSource = document.getElementsByTagName("img")[0];

 			titleContainer[0].innerHTML = title;
 			episodeContainer[0].innerHTML = episode_title;
 			catContainer[0].innerHTML = category;
 			imageTagSourceSource.setAttribute("srcset", image_path);
 			imageTagImgSource.setAttribute("srcset", image_path);
 		}
 	}
 }

}


/**
 * @param  {string}
 * @return {string}
 */
 function getParameterByName(name) {
 	var url = window.location.href;
 	var name = name.replace(/[\[\]]/g, "\\$&");
 	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
 	results = regex.exec(url);
 	console.log(results);
 	if (!results) return null;
 	if (!results[2]) return '';
 	return decodeURIComponent(results[2].replace(/\+/g, " "));
 }


 var variant = getParameterByName('variant');
 getData(variant);


});