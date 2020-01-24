var faker = require('faker')
var database = {
	"instructors": [],
	"students": [],
	"class": [],
	"sessions": []
}

for (var i = 1; i<= 50; i++) {
    database.instructors.push({
        id: i,
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.city()
    })
}

for (var k = 1; k < 20; k++) {
    let randomIdTeacher = Math.floor(Math.random() * (Math.floor(50) - Math.ceil(1))) + Math.ceil(1)
    database.class.push({
        id: k,
        idTeacher: randomIdTeacher
    })
}

for (var l = 1; l < 30; l++) {
    let randomIdClass = Math.floor(Math.random() * (Math.floor(20) - Math.ceil(1))) + Math.ceil(1)
	let randomTime = Math.floor(Math.random() * (Math.floor(60) - Math.ceil(25))) + Math.ceil(25)

    database.sessions.push({
        id: l,
        idClass: randomIdClass,
		time: randomTime
    })
}

for (var j = 1; j < 75; j++) {
    let randomIdClass = Math.floor(Math.random() * (Math.floor(20) - Math.ceil(1))) + Math.ceil(1)

    database.students.push({
        id: j,
        name: faker.name.findName(),
        idClass: randomIdClass
    })
}

console.log(JSON.stringify(database));
