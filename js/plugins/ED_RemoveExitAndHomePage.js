EDRemoveExitGameAndHomePageCommands = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    EDRemoveExitGameAndHomePageCommands.call(this);
    this._commandWindow._list = this._commandWindow._list.slice(0, 4);
};
