
using { cuid, Currency, managed } from '@sap/cds/common';
namespace flight;


type nameString:String(30);

aspect ticket{
    destination:String;
    takeoff: Timestamp;
    landing: type of takeoff;
    cost: Decimal(5,2);
    currency: Currency @assert.integrity: false;
}

entity Airports{
    key ID: Integer;
    name: nameString;
    airlines: Association to many AirportsAirlines on airlines.airports =$self;
}

entity Airlines{
    key ID: Integer;
    name: nameString;
    planes: Composition of many Planes on planes.airlines= $self;
    workers: Composition of many Workers on workers.airlines=$self; 
    airports: Association to many AirportsAirlines on airports.airlines= $self;
}

entity Planes {
    key ID: Integer;
    name: nameString;
    airlines: Association to Airlines;
    info: Composition of many InfoPlanes on info.planes=$self;
}

entity InfoPlanes: ticket{
    key ID:Integer;
    planes: Association to Planes;

}

entity Workers {
    key ID: Integer;
    airlines: Association to Airlines;
    employees: array of{
        name:nameString;
        departament:String;
        job:String;
        age:Integer;
    }
}


entity AirportsAirlines: cuid, managed {
    key airports: Association to Airports not null;
    key airlines: Association to Airlines not null;
}
 



