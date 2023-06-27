import Character from './character';

export default class LostAttack extends Character {
  constructor(name, type) {
    super(name, type);
    this.range = 1;
  }

  get attack() {
    let damage = Math.round((this.setAttack * (11 - this.range)) / 10);
    if (this.setStoned) {
      Math.round((damage -= Math.log2(this.range) * 5));
      if (damage < 0) {
        return 0;
      }
      return damage;
    }
    return damage;
  }

  set attack(damage) {
    this.setAttack = damage;
  }

  get stoned() {
    return this.setStoned;
  }

  set stoned(bolean) {
    this.setStoned = bolean;
  }
}
