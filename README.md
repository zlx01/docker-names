# docker-names

fork from https://github.com/bearjaws/docker-names

Docker Names generates semi-random, easy to remember names similar to how docker names its containers. For example, `desperate_fermi`, `cranky_heyrovsky` or `tender_mahavira`.

Or as seen from the docker client container list:
![Docker container list](http://i.imgur.com/Ws7B38h.png)

## Usage

```javascript
import dockerNames from 'docker-names';
console.log(dockerNames.getRandomName()); // $ angry_nobel
// appends a random number to the end of the name
console.log(dockerNames.getRandomName(true)); // $ jolly_mclean3
```
