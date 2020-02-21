module.exports = function createDreamTeam(members) {
  let name = [];
  let word;
 if (members == null) {return false;}
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      word = members[i].toUpperCase().trim();
      name.push(word[0]);
    } 
  }
  return name.sort().join("");
};