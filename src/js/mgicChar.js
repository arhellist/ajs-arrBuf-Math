import LostAttack from './lostAttack';

export default class Magician extends LostAttack {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.deffence = 40;
  }
}
