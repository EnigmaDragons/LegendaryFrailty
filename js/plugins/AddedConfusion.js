Game_BattlerBase.prototype.isConfused = function() {
	return this.isAppeared() && ((this.restriction() >= 1 && this.restriction() <= 3) || this.restriction() == 5);
};

Game_BattlerBase.prototype.canMove = function() {
    return this.isAppeared() && this.restriction() != 4;
};

var AddedConfusion_Game_Action_makeTargets = Game_Action.prototype.makeTargets;
Game_Action.prototype.makeTargets = function() {
  if (!this._forcing && this.subject().isConfused() && this.subject().confusionLevel() == 5)
    return [this.subject()];
  else
    return AddedConfusion_Game_Action_makeTargets.call(this);
};

