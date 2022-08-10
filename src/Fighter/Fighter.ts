interface Fighter {
  defense: number;
  levelUp(): void;
  special(enemy: Fighter): void;
  lifePoints: number;
  strength: number;
  attack(enemy: Fighter): void;
  receiveDamage(amount: number): void;
}

export default Fighter;