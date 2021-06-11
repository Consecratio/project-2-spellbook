const db = require('./models')

db.spell.sync({ alter: true })

function createUser() {
    db.user.create({
        firstName: "First",
        lastName: "Last",
        email: "test@gmail.com",
        password: "fakepassword"
    }).then(newUser => {
        console.log("👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋")
        console.log(`Created user: ${newUser.firstName}`)
        console.log(`Created user: ${newUser.lastName}`)
        console.log(`Created user: ${newUser.email}`)
        console.log(`Created user: ${newUser.password}`)
    })
}

// createUser()


function createSpellBook() {
    db.spellbook.create({
        userId: 1,
        name: "TestBook",
        description: "First test of a spellbook"
    }).then(book => {
        console.log("👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋")
        console.log(`Created spellbook: ${book.name}`)
        console.log(`Created description: ${book.description}`)
        console.log(`Created relation to user: ${book.userId}`)
    })
}

// createSpellBook()

function createSpell(){
    db.spellbook.findOrCreate({
        where: {
            id: 1,
            name: "TestBook"
        }
    }).then(([book, created]) => {
        db.spell.create({
            name: "Fireball",
            level: 3,
            range: "150 feet",
            duration: "Instantenous",
            castingTime: "",
            classes: "",
            description: "",
            components: "",
            material: "",
            ritual: false,
            concentration: true
        }).then(spell => {
            book.addSpell(spell).then(relationInfo => {
                console.log("👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋")
                console.log(relationInfo)
                console.log("👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋")
                console.log(`${spell.name} added to ${book.name}`)
            })
        })
    })
}

// createSpell()

// db.spellbook.findOne({
//     where: {
//         id: 1
//     },
//     include: [db.user, db.spell]
// }).then(book => {
//     book.spells.forEach(spell => {
//         console.log(`${book.user.firstName}'s spellbook is named: ${book.name}`)
//         console.log(`And has spell: ${spell.name} of range ${spell.range}`)
//     })
// })