import Archetypes from './Archetypes';

class Warrior extends Archetypes {
  private $energyType: 'stamina' = 'stamina';

  private static $createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior.$createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.$createdArchetypeInstances;
  }

  get energyType() {
    return this.$energyType;
  }
}

export default Warrior;