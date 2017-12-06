var EnigmaDragonsOnMapLoaded = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function() {
    EnigmaDragonsOnMapLoaded.call(this);
    $gameSystem.onBeforeSave(); 
    DataManager.saveGame(1);
}