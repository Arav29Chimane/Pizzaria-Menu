menu_list_array = ["Veg Extraveganza","Pepper Barbecue","Veg Mania","Chicken Tandoori","Panner Tikka"];
function getmenu() {
    var htmldata;
    htmldata = "<ol class = 'menulist'>";
    menu_list_array.sort();
for (let index = 0; index < menu_list_array.length; index++){
    htmldata = htmldata+ '<li>'+ menu_list_array[index]+'</li>';
}
htmldata = htmldata+"</ol>";
document.getElementById("display_menu").innerHTML = htmldata;
}
