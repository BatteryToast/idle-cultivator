var save = {
    cookies : 0,
    cursors : 0,
    prestige : 0
}

function update(){
    document.getElementById('cursors').innerHTML = save.cursors;
    document.getElementById('cookies').innerHTML = save.cookies;
    document.getElementById('cursorCost').innerHTML = Math.floor(10* Math.pow(1.1,save.cursors));;
};

function cookieClick(number){
    save.cookies += number;
    update();
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,save.cursors)); 
if(save.cookies >= cursorCost){
    save.cursors += 1;
    save.cookies -= cursorCost;
    update();
}
update();
};

function saveGame(){
    localStorage.setItem("save",JSON.stringify(save)); 
    update();
}
function loadGame(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.cookies !== "undefined") save.cookies = savegame.cookies;
    if (typeof savegame.cursors !== "undefined") save.cursors = savegame.cursors;
    if (typeof savegame.prestige !== "undefined") save.prestige = savegame.prestige;
    update();
}
function removeSaveGame(){
    localStorage.removeItem("save");
    location.reload();
}


window.setInterval(function(){
    cookieClick(save.cursors); 
}, 1000);

