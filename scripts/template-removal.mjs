Hooks.on("updateCombat", removeTemplates);

async function removeTemplates(combat, update, context, userId) {
  if (!game.user.isGM) return;
  if (context.direction !== 1) return;
  
  const ids = canvas.scene.templates.reduce((acc, template) => {
    const item = fromUuidSync(template.flags.dnd5e?.origin ?? "");
    if (item?.system.duration?.units === "inst") acc.push(template.id);
    return acc;
  }, []);
  return canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", ids);
}
