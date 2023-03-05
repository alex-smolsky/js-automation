class Aeroplane {
    constructor(manufacturer, model, weight, flightRange) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.weight = weight;
        this.flightRange = flightRange;
    }

    getFlightRange() {
        return this.flightRange
    }
}

class PrivateAeroplane extends Aeroplane{
    constructor(manufacturer, model, weight, flightRange, passengersCapacity) {
        super(manufacturer, model, weight, flightRange);
        this.passengersCapacity = passengersCapacity;
    }
    getPassengersCapacity() {
        return this.passengersCapacity;
    }

}
class CommercialPassengerAeroplane extends Aeroplane{
    constructor(manufacturer, model, weight, flightRange, passengersCapacity, maxCargoWeight) {
        super(manufacturer, model, weight, flightRange);
        this.passengersCapacity = passengersCapacity;
        this.maxCargoWeight = maxCargoWeight;
    }
    getMaxCargoWeight() {
        return this.maxCargoWeight;
    }
    getPassengersCapacity() {
        return this.passengersCapacity
    }

}

class CargoAeroPlane extends Aeroplane {
    constructor(manufacturer, model, weight, flightRange, maxCargoWeight) {
        super(manufacturer, model, weight, flightRange);
        this.maxCargoWeight = maxCargoWeight;
    }
    getMaxCargoWeight() {
        return this.maxCargoWeight
    }
}
class Airline {
    constructor() {
    }

    aeroplanesInPark = [bombardierLearjet45, boeing757, sukhoiSuperjet100, boeing747];
    calculateTotalPassengersCapacity() {
        let totalPassengersCapacity = 0;
        for (let i = 0; i < this.aeroplanesInPark.length; ++i) {
            if (this.aeroplanesInPark[i].passengersCapacity) {
                totalPassengersCapacity += this.aeroplanesInPark[i].getPassengersCapacity();
            }
        }
        console.log(`Total passengers capacity ${ totalPassengersCapacity} persons`);

    }
    calculateTotalMaxCargoWeight() {
        let totalMaxCargoWeight = 0;
            for (let i = 0; i < this.aeroplanesInPark.length; ++i) {
                if (this.aeroplanesInPark[i].maxCargoWeight){
                totalMaxCargoWeight+=this.aeroplanesInPark[i].getMaxCargoWeight()
            }
        }
        console.log(`Total max cargo capacity is ${totalMaxCargoWeight} kilograms`);
    }

    sortAeroplanesInTheParkByFlightRange(sortType){
       let aero = this.aeroplanesInPark;

       if (sortType === "asc" || "ASC"){
           aero.sort((aeroplaneA, aeroplaneB) => aeroplaneA.flightRange - aeroplaneB.flightRange)
       } else aero.reverse();

        console.log(`Aeroplanes are sorted by ${sortType? 'asc': 'desc'}`)
        console.log(this.aeroplanesInPark)
    }

    findSuitableAeroplaneByFlightRange(requestedFlightRange){
        let result = this.aeroplanesInPark;
        result = result.filter(aeroplane => aeroplane.flightRange >= requestedFlightRange);
        if (result.length > 0){
            console.log(`Following aeroplanes can fly ${requestedFlightRange} kilometers`);
            console.log(result)
        } else {
            console.log(`We have no aeroplanes which can fly ${requestedFlightRange} kilometers. We are sorry`)
        }

    }

    findSuitableAeroplaneByCargoCapacity(requestedCargoWeight){
        let result = this.aeroplanesInPark;
        result = result.filter(aeroplane => aeroplane.maxCargoWeight >= requestedCargoWeight);
        if (result.length > 0){
            console.log(`Following aeroplanes are can deliver your cargo:`);
            console.log(result)
        } else {
            console.log(`There are no aeroplanes found which can deliver cargo with weight ${requestedCargoWeight} kilograms`)
        }
    }

    findSuitableAeroplaneByPassengersNumber(requestedPassengersNumber){
        let result = this.aeroplanesInPark;
        result = result.filter(aeroplane => aeroplane.passengersCapacity >= requestedPassengersNumber);
        if (result.length > 0){
            console.log(`Following aeroplanes are suitable for requested number of passengers:`);
            console.log(result)
        } else {
            console.log(`There are no aeroplanes suitable for ${requestedPassengersNumber} persons`)
        }
    }

    addNewAeroplaneToThePark(aeroplane){
        this.aeroplanesInPark.push(aeroplane)
    }

}


const bombardierLearjet45 = new PrivateAeroplane("Bombardier", "Learjet 45", 5829, 3167, 9);
const cessnaCitationMustang = new PrivateAeroplane("Cessna", "Citation Mustang", 3062,2161, 5);
const boeing757 = new CommercialPassengerAeroplane("Boeing", 'B757-200',58440,7222,234, 13000);
const sukhoiSuperjet100 = new CommercialPassengerAeroplane("Sukhoi", "Superjet 100-95B", 24250, 3048, 98, 12245)
const boeing747 = new CargoAeroPlane("Boeing", "747-400", 180530, 7800, 113400)
