var Person = Class.create({
    init: function (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    },
    introduce: function () {
        return "Name: " + this.firstName + " " + this.lastName + ", Age: " + this.age;
    }
});

Student.inherit(Person);

var Student = Class.create({
    init: function (firstName, lastName, age, grade) {
        this._superConstructor = new this._superConstructor(arguments);
        this._superConstructor.init(firstName, lastName, age); // zashto ne wikame s apply ?
        this.grade = grade;
    },
    introduce: function () {
        return this._super.introduce() + ", Grade: " + this.grade;
    }
});

Teacher.inherit(Person);

var Teacher = Class.create({
    init: function (firstName, lastName, age, speciality) {
        this._superConstructor = new this._superConstructor(arguments);
        this._superConstructor.init(firstName, lastName, age);
        this.speciality = speciality;
    },
    introduce: function () {
        this._supeConstructor.introduce() + ", Speciality: " + this.speciality;
    }
});