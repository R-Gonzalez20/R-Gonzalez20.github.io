document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 3200, npcCollisionRadius: 50, actionDuration:600, jumpHeight: 400, 
    numOfCollectables: 6,
    typesOfNPC: 2, pointsPerCollectable: 1, removeCollectableAfterCollected: true, pointsPerNPCInteracted: 2, removeNPCAfterInteractedDelay: true, removeNPCAfterInteractedDelay: 1000, playUntilScore: 20, preGameScreenImageURLs: "./img/intro-screen.png", postGameScreenImageURLs: "./img/outro-screen.png"  }); 
});