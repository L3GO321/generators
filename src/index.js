class Team {
    constructor(characters) {
        this.characters = characters;
    }

    *[Symbol.iterator]() {
        const chars = Object.values(this.characters)

        for (let i = 0; i < chars.length; i++) {
            yield chars[i]
        }

    }
}

const characters = {
    m: {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    },
    5: {
        name: 'Мечник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    },
    2: {
        name: 'Гном',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    }
}

const team = new Team(characters)

for (let item of team) {
    console.log(item)
}

