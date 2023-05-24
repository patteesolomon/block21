// prototype
class Car
{
    constructor(name, model, year)
    {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    getDescription()
    {
        return `${this.name} ${this.model} ${this.year}`;
    }
}

class ElectricCar extends Car
{
    constructor(name, model, year, range)
    {
        super(name, model, year);
        this.range = range;
    }
    getDescription()
    {
        return `${this.name} ${this.model} ${this.year} ${this.range}`;
    }
}

let ECar = new ElectricCar("Tesla", "Model S", 2019, 300)
console.log(ECar);