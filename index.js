// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){

return cats.push("Ralph");
}
function  destructivelyPrependCat(Bob){
return cats.unshift("Bob")
}
function  destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}


function  appendCat(Broom){
 appendCat=[...cats,"Broom"]
 return appendCat;
}
function  prependCat(Arnold){
    prependCat=["Arnold",...cats]
return prependCat;

}
function  removeLastCat(){
 removeLastCat=cats.slice(0,-1);
 return removeLastCat;
}
function  removeFirstCat(){
removeFirstCat=cats.slice(1)
return removeFirstCat;
}