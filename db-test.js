const db = require('./models')

// db.user.create({
//     firstName: "First",
//     lastName: "Last",
//     email: "test@gmail.com",
//     password: "fakepassword"
// }).then(newUser => {
//     console.log("👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋")
//     console.log(`Created user: ${newUser.firstName}`)
//     console.log(`Created user: ${newUser.lastName}`)
//     console.log(`Created user: ${newUser.email}`)
//     console.log(`Created user: ${newUser.password}`)
// })


// db.spellbook.create({
//     userId: 1,
//     name: "TestBook",
//     description: "First test of a spellbook"
// }).then(book => {
//     console.log("👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋")
//     console.log(`Created spellbook: ${book.name}`)
//     console.log(`Created description: ${book.description}`)
//     console.log(`Created relation to user: ${book.userId}`)
// })

// db.spellbook.findOrCreate({
//     where: {
//         id: 1,
//         name: "TestBook"
//     }
// }).then(([book, created]) => {
//     db.spell.create({
//         spellName: "Cure Wounds",
//         spellObj: {
//             "index": "cure-wounds",
//             "name": "Cure Wounds",
//             "desc": [
//                 "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
//             ],
//             "higher_level": [
//                 "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."
//             ],
//             "range": "Touch",
//             "components": [
//                 "V",
//                 "S"
//             ],
//             "ritual": false,
//             "duration": "Instantaneous",
//             "concentration": false,
//             "casting_time": "1 action",
//             "level": 1,
//             "heal_at_slot_level": {
//                 "1": "1d8 + MOD",
//                 "2": "2d8 + MOD",
//                 "3": "3d8 + MOD",
//                 "4": "4d8 + MOD",
//                 "5": "5d8 + MOD",
//                 "6": "6d8 + MOD",
//                 "7": "7d8 + MOD",
//                 "8": "8d8 + MOD",
//                 "9": "9d8 + MOD"
//             },
//             "school": {
//                 "index": "evocation",
//                 "name": "Evocation",
//                 "url": "/api/magic-schools/evocation"
//             },
//             "classes": [
//                 {
//                     "index": "bard",
//                     "name": "Bard",
//                     "url": "/api/classes/bard"
//                 },
//                 {
//                     "index": "cleric",
//                     "name": "Cleric",
//                     "url": "/api/classes/cleric"
//                 },
//                 {
//                     "index": "druid",
//                     "name": "Druid",
//                     "url": "/api/classes/druid"
//                 },
//                 {
//                     "index": "paladin",
//                     "name": "Paladin",
//                     "url": "/api/classes/paladin"
//                 },
//                 {
//                     "index": "ranger",
//                     "name": "Ranger",
//                     "url": "/api/classes/ranger"
//                 }
//             ],
//             "subclasses": [
//                 {
//                     "index": "lore",
//                     "name": "Lore",
//                     "url": "/api/subclasses/lore"
//                 },
//                 {
//                     "index": "life",
//                     "name": "Life",
//                     "url": "/api/subclasses/life"
//                 }
//             ],
//             "url": "/api/spells/cure-wounds"
//         }
//     }).then(spell => {
//         book.addSpell(spell).then(relationInfo => {
//             console.log(`${spell.spellName} added to ${book.name}`)
//         })
//     })
// })

db.spellbook.findOne({
    where: {
        name: "TestBook"
    }
}).then(book => {
    book.getSpells().then(spells => {
        spells.forEach(spell => {
            console.log(`${book.name} contains ${spell.spellObj.heal_at_slot_level[1]}`)
            for(let level of spell.spellObj.heal_at_slot_level){
                console.log(level)
            }
        })
    })
})