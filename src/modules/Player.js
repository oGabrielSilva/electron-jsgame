class Player {
  constructor({ color, influence = 0, authority = 0, acceptance = 0, name }) {
    this.name;
    this.influence = influence;
    this.authority = authority;
    this.acceptance = acceptance;
    this.molitary = 50000;
    this.resources = 100000;
    this.color = color;
  }
}

module.exports = { Player };
