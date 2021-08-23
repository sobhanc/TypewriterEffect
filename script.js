new TypeIt("#companionMethods", {
    speed: 150,
    waitUntilVisible: true,
    loop: true,
    nextStringDelay: 1000,
    lifeLike: true,
    deleteSpeed: 50
  })
    .type("Svbhan", {delay: 1000})
    .move(-4)
    .delete(1)
    .type('o')
    .move('END')
    .type(' Chohsn')
    .pause(300)
    .move(-1)
    .delete(1)
    .type('a')
    .move('END')
    .type('.')
    .go();