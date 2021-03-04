class Vehicle {
    constructor (make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        return "Beep."
    }
    toString () {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year)
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year)
        this.numWheels = 2
    }
    revEngine () {
        return "VROOM!!!"
    }
}

class Garage {
    constructor(size) {
        this.size = size
        this.vehicles = []
    }
    add (newVehicle) {
        if (this.vehicles.length >= this.size)
        {
            return "Sorry the garage is full"
        }
        else if (this.vehicles instanceof Vehicle)
        {
            return "Sorry only vehicles allowed"
        }
        else
        {
            this.vehicles.push(newVehicle)
        }
    }
}