export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */
  server.createList('user', 2);
  server.createList('treat', 6);
  server.createList('session', 3);

  // server.createList('post', 10);
}
