import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  levelUp(): void;
  special(enemy: Fighter): void;
}

export default Fighter;