import Archetypes from './Archetypes';

class Ranger extends Archetypes {
  private _energyType: 'stamina' = 'stamina';

  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Ranger;