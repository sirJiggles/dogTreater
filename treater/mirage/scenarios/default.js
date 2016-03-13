export default function(server) {
  // The data generated in here is just for development calling
  // server.loadFixtures does not load these seeds ... helpful right

  let amountUsers = 2,
      amountTreats = 6,
      amountSessions = 3;

  let users = server.createList('user', amountUsers);
  let treats = server.createList('treat', amountTreats);

  for(var i = 0; i < amountUsers; i ++) {
    for(var j = 0; j < amountTreats; j ++) {
      let s = server.create('session', {
        userId: users[i].id,
        treatId: treats[j].id
      });
      s.save();
      // s.user = users[i];
      // s.treat = treats[j];
    }
  }
}
