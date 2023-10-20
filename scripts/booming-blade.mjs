Hooks.on("babonus.applyOptionalBonus", async function(bonus, roller, target, config) {
  if(!(bonus.parent instanceof Item) || (bonus.item.name !== "Booming Blade")) return;
  const actor = (roller instanceof Item) ? roller.actor : roller;
game.dfreds.effectInterface.toggleEffect("Booming Blade Move Damage")
});