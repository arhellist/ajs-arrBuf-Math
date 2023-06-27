import Daemon from '../demonChar';
import Magic from '../mgicChar';
import  Character from '../character';

test('Character type Throw', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const characters = new Character('Lask', 'AAA');
  }).toThrow();
});

test.each([
  ['Дурман', '2', true, 2, 4],
  ['Дурман', '1', true, 5, 0],
  ['Здоров', '3', false, 3, 8],
])(
  'Damage Daemon',
  (_, __, stoned, distance, expected) => {
    const personage = new Daemon('Lazar');
    personage.stoned = stoned;
    personage.distance = distance;
    expect(personage.attack).toBe(expected);
  },
);

test.each([
  ['Дурман', '2', true, 2, 4],
  ['Дурман', '1', true, 5, 0],
  ['Здоров', '3', false, 3, 8],
])(
  'Damage Magic',
  (_, __, stoned, distance, expected) => {
    const personage = new Magic('Surik');
    personage.stoned = stoned;
    personage.distance = distance;
    expect(personage.attack).toBe(expected);
  },
);
