//=============================================================================
// ED_Fullscreen.js
//=============================================================================

/*:
 * @plugindesc Begin the game in fullscreen mode
 * @author Enigma Dragons
 *
 * @help This plugin does not provide plugin commands.
 */

FSInitStart = SceneManager.initialize;
SceneManager.initialize = function() {
	FSInitStart.call(this);
	Graphics._requestFullScreen();
};