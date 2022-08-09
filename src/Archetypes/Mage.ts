import Archetypes from './Archetypes';

class Mage extends Archetypes {
  private _energyType: 'mana' = 'mana';

  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Mage._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Mage;