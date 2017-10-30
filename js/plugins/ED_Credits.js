EDAddCreditsCommandsToTitleMenu = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    EDAddCreditsCommandsToTitleMenu.call(this);
    this._commandWindow.setHandler('credits',  this.commandCredits.bind(this));
};

Scene_Title.prototype.commandCredits = function() {
    $gameVariables.setValue(98, 1);
    SceneManager.run(Scene_Map);
};