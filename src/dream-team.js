module.exports = function createDreamTeam(members) {
  let dreamTeamArray = []
  if (Array.isArray(members)) {
    for(let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        dreamTeamArray.push(members[i].trimLeft().toUpperCase().slice(0, 1))
      }
    }
  }
  return dreamTeamArray.sort().join('')
};