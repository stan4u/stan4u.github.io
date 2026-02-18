function include(contenu) {
	console.log(contenu);
	fetch(contenu).then(function (response) {
	return response.text();
}).then(function (html) {
document.getElementById('include').innerHTML=html;
});
}
window.onload = function() {
    include('accueil.html');
};
