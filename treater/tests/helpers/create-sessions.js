import Ember from 'ember';

export default function(amount) {
  var sessions = [],
      session;

  // loop though amount passed and add some fake sessions
  for (var i = 0; i < amount; i++) {
    session = Ember.Object.create({
      user: Ember.Object.create({
        name: `User name ${i}`
      }),
      treat: Ember.Object.create({
        name: `treat name ${i}`,
        health: `treat health ${i}`,
        size: `treat size ${i}`
      })
    });

    sessions.push(session);
  }

  // return the mock
  return sessions;
}
