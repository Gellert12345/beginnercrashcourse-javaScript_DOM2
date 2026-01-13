//html importálás javasciptbe
let openBtn = document.getElementById("open-btn");
let modelContainer = document.getElementById("model-container");
let closeBtn = document.getElementById("close-btn");
//reakció figyelő
openBtn.addEventListener("click",function(){
    modelContainer.style.display="block"; //megjelenjen a gomb kattintaskor
});
closeBtn.addEventListener("click",function(){
    modelContainer.style.display="none"; //eltüntetés
})
window.addEventListener("click",function(e){ //a window az a egész weblap és ha arra kattintunk(kikattintunk akkor eltunik a gomb)
    if(e.target === modelContainer) { // az "e" = Történt egy kattintás. Itt vannak a részletek.”
        modelContainer.style.display="none";
    }
})