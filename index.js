class Team {
    constructor() {
      this.characters = []; // массив для  персонажей
    }
    addCharacter(character) {
      this.characters.push(character); // добавление
    }
    *[Symbol.iterator]() {
      for (const character of this.characters) {
        yield character; 
      }
    }
  }
  
  // использования
  const team = new Team();
  team.addCharacter({ name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 });
  team.addCharacter({ name: 'Мечник', type: 'Lowman', health: 60, level: 2, attack: 50, defence: 1 });
  
  
  for (const character of team) {
    console.log(character);
  }
  