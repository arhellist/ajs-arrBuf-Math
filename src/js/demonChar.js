import LostAttack from './lostAttack';

export default class Daemon extends LostAttack {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.deffence = 40;
  }
}
