//=============================================================================
// Enigma Dragons - Track Player
// EDTrackPlayer.js
//=============================================================================
/*:
 * @plugindesc EDTrackPlayer 1.0 - Tracks the players coordinates
 * @author ZavixDragon
 *
 * @param Player X variable
 * @desc The variable the players X coordinate will be saved to.
 *
 * @param Player Y variable
 * @desc The variable the players Y coordinate will be saved to.
 * */

var EDtemp = Game_Event.prototype.update;
Game_Event.prototype.update = function() {
    EDtemp.call(this);
    var parameters = PluginManager.parameters('EDTrackPlayer');
    $gameVariables.setValue(Number(parameters["Player X variable"]), $gamePlayer.x);
    $gameVariables.setValue(Number(parameters["Player Y variable"]), $gamePlayer.y);
}