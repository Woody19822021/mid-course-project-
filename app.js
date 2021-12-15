const cocktails = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';


fetch(cocktails)
.then(res => res.json())
.then(data => {
console.log(data.drinks[0].strDrinkThumb)
document.getElementById("divhead").innerHTML = data.drinks[0].strDrink;
document.getElementById("img").innerHTML = data.drinks[0].strDrinkThumb;
document.getElementById("list1").innerHTML = data.drinks[0].strIngredient1
document.getElementById("list2").innerHTML = data.drinks[0].strIngredient2
document.getElementById("list3").innerHTML = data.drinks[0].strIngredient3
document.getElementById("list4").innerHTML = data.drinks[0].strIngredient4
document.getElementById("list5").innerHTML = data.drinks[0].strIngredient5

})
.catch(rej => console.log(rej))

fetch(cocktails)
.then(res => res.json())
.then(data => {
    document.getElementById("butt").addEventListener("click")
})
.catch(rej => console.log(rej))   