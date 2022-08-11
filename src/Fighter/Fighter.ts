import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  levelUp(): void;
  special(enemy: SimpleFighter): void;
}

export default Fighter;