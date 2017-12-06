//=============================================================================
// No Attack / Guard v1.1
// by TamFey
// Last Update: 1.11.2015
//=============================================================================
 
/*:
 * @plugindesc This plugin gives you the option to remove the 'Attack' and/or the 'Guard' and/or the 'Item' command from the Actor Command Window.
 *
 * @author TamFey
 *
 * @param Enable Attack
 * @desc false: removes 'Attack' command. true: keeps 'Attack' command
 * @default false
 *
 * @param Enable Guard
 * @desc false: removes 'Guard' command. true: keeps 'Guard' command
 * @default false
 *
 * @param Enable Item
 * @desc false: removes 'Item' command. true: keeps 'Item' command
 * @default false
 */
(function() {
	var parameters = PluginManager.parameters('No_Attack_or_Guard');
	var enableAttack = parameters['Enable Attack'] == "true";
	var enableGuard = parameters['Enable Guard'] == "true";
	var enableItem = parameters['Enable Item'] == "true";
  
  Window_ActorCommand.prototype.makeCommandList = function() {
      if (this._actor) {
          if (enableAttack) {
            this.addAttackCommand();
          }
          this.addSkillCommands();
          if (enableGuard) {
            this.addGuardCommand();
          }
		      if (enableItem) {
            this.addItemCommand();
          }
          this.addCommand('Wait', 'guard');
      }
  };
 
})();