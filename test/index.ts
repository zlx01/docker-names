import { expect } from 'chai';
import dockerNames from '../index';

describe('Docker-Names', function() {
  it('should generate two words seperated by a underscore', function() {
    const name = dockerNames.getRandomName();
    const words = name.split('_');
    expect(words).to.have.lengthOf(2);
    // This asserts that first word came from the "adjective" array
    expect(dockerNames.getAllAdjectives().indexOf(words[0])).to.be.above(-1);

    // This asserts that second word came from the "surname" array
    expect(dockerNames.getAllSurnames().indexOf(words[1])).to.be.above(-1);
  });

  it('should only use words from the "adjective word" array for the first word', function() {
    const name = dockerNames.getRandomName();
    const words = name.split('_');

    // This asserts that first word came from the "adjective" array
    // The adjective array is a list of Adjectives or verbs
    expect(dockerNames.getAllAdjectives().indexOf(words[0])).to.be.above(-1);
  });

  it('should only use words from the "surname word" array for the second word', function() {
    const name = dockerNames.getRandomName();
    const words = name.split('_');

    // This asserts that second word came from the "surname" array
    // The surname array is a list of names
    expect(dockerNames.getAllSurnames().indexOf(words[1])).to.be.above(-1);
  });

  it('should append a number 1-9 if true is passed to getRandomName', function() {
    // Really no way to test "random" number generation, but this <i>should</i> cover 1-9 effectively...
    for (let i = 0; i < 20000; i ++) {
      const number = dockerNames.getRandomName(true).slice(-1);
      expect(Number(number)).to.be.above(0);
      expect(Number(number)).to.be.below(10);
    }
  });

  it('should not append a number if false is passed in to getRandomName', function() {
    const number = dockerNames.getRandomName(false).slice(-1);
    expect(isNaN(Number(number))).to.be.true;
  });

  it('should have access to adjective, surname, adjective, surname properties', function() {
    expect(dockerNames.getAllAdjectives()).to.be.an('array');
    expect(dockerNames.getAllSurnames()).to.be.an('array');
  })
});
