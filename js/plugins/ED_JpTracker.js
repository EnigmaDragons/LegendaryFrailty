//=============================================================================
// Enigma Dragons - Job Point Tracker
// ED_JpTracker.js
//=============================================================================

//=============================================================================
 /*:
 * @plugindesc v1 This uses Yanfly's job point plugin to track your job points in a variable
 * @author Enigma Dragons
 * 
 * @param Variable Id
 * @desc This tracks the JP and puts in this variable
 * @default 1
 */
//=============================================================================

var ED_variableId = Number(PluginManager.parameters('ED_JpTracker')['Variable Id']);
var ED_setJp = Game_Actor.prototype.setJp;
Game_Actor.prototype.setJp = function(value, classId) {
    ED_setJp.call(this, value, classId);
    if ($gameParty.members().length > 0)
        $gameVariables.setValue(ED_variableId, $gameParty.members()[0].jp())
}