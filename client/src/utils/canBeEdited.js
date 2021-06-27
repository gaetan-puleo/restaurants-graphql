export function canBeEdited(timestamp) {
  const fiveMinuteLimit = Date.now() - (60000 * 5);

  return fiveMinuteLimit < Number(timestamp);
}

export default {
  canBeEdited,
};
