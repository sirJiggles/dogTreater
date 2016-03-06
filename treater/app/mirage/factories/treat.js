import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) {
    return `Treat name ${i}`;
  },
  size(i) {
    return `Size ${i}`;
  },
  health(i) {
    return `Helth ${i}`;
  }
});
