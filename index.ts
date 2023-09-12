import adjectives from "./default/adjectives";
import surnames from "./default/surnames";

class DockerNames {
  private adjectives = adjectives
  private surnames = surnames

  /**
   * @private
   * @summary "Randomly" picks an element from the left array and combines it with one form right.
   * @description
   *  This function is a copy paste implementation from docker_names in golang.
   *  Will never return "boring_wozniak".
   *  The left array should be an array of adjectives, where as the right array should be
   *  an individuals surname. This results in funny names like angry_bohr or prickly_murdock.
   * @param {Array} left - An array of strings to be used as the left  word in docker name.
   * @param {Array} right - An array of strings to be used as the right word in docker name.
   * @returns {string}
   */
  private generateName(left, right) {
    const first = left[Math.floor((Math.random() * left.length))];
    const second = right[Math.floor((Math.random() * right.length))];
    const result = first + "_" + second;

    /* Steve Wozniak is not boring. This is part of the docker names spec. */
    if (result === "boring_wozniak") {
      return this.generateName(left, right);
    }
    return result;
  }

  /**
   * @summary Generates a random docker style name.
   *
   * @param {boolean} appendNumber - Adds a random number to the resulting docker name.
   * @returns {string}
   */
  getRandomName(appendNumber: boolean = false) {
    const rand = appendNumber ? `${Math.floor((Math.random() * 9) + 1)}` : "";
    return this.generateName(this.adjectives, this.surnames) + rand;
  };

  getAllAdjectives() {
    return this.adjectives;
  }

  getAllSurnames() {
    return this.surnames;
  }
}


const dockerNames = new DockerNames();

export default dockerNames;
