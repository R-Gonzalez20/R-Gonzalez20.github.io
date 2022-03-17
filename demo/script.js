document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 3200, npcCollisionRadius: 50, actionDuration:600, jumpHeight: 300, 
    numOfCollectables: 3,
    typesOfNPC: 2 }); 
});