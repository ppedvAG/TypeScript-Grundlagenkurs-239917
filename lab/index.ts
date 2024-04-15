// Importieren der Vehicle-Klasse, falls sie in einer separaten Datei definiert ist
import { Transporter } from "./transporter.class";
import { LKW, PKW, Vehicle } from "./vehicle.class";

function testVehicle() {
    // Erstellen einer Instanz der Vehicle-Klasse
    const myCar = new Vehicle("Mein Auto", 120);

    // Aufrufen von showInfo() um die aktuelle Information des Fahrzeugs anzuzeigen
    console.log(myCar.showInfo());

    // Starten des Motors
    myCar.startMotor();
    console.log(myCar.showInfo());

    // Beschleunigen des Fahrzeugs um 50 Einheiten
    myCar.accelerate(50);
    console.log(myCar.showInfo());

    // Versuchen, das Fahrzeug zu beschleunigen, während der Motor aus ist
    myCar.stopMotor();
    myCar.accelerate(50);
    console.log(myCar.showInfo());

    // Beschleunigen des Fahrzeugs, bis es die maximale Geschwindigkeit erreicht
    myCar.startMotor();
    myCar.accelerate(100);
    console.log(myCar.showInfo());

    // Versuchen, das Fahrzeug über die maximale Geschwindigkeit hinaus zu beschleunigen
    myCar.accelerate(50);
    console.log(myCar.showInfo());
}

function testDerivedVehicles() {
        // Importieren der Klassen, falls sie in separaten Dateien definiert sind
    // import { Vehicle, PKW, LKW, Transporter } from './vehicle.class';

    // Erstellen von Instanzen der erweiterten Klassen
    const myCar = new PKW("Mein Auto", 120, 5);
    const myTruck = new LKW("Mein LKW", 80, "Diesel");
    const myTransporter = new Transporter("Mein Transporter", 60, "Güter", 1000);

    // Aufrufen von showInfo() um die aktuelle Information der Fahrzeuge anzuzeigen
    console.log(myCar.showInfo());
    console.log(myTruck.showInfo());
    console.log(myTransporter.showInfo());

    // Starten des Motors und Beschleunigen der Fahrzeuge
    myCar.startMotor();
    myCar.accelerate(50);
    console.log(myCar.showInfo());

    myTruck.startMotor();
    myTruck.accelerate(30);
    console.log(myTruck.showInfo());

    myTransporter.startMotor();
    myTransporter.accelerate(20);
    console.log(myTransporter.showInfo());

    // Stoppen des Motors
    myCar.stopMotor();
    myTruck.stopMotor();
    myTransporter.stopMotor();

    // Versuchen, die Fahrzeuge zu beschleunigen, während der Motor aus ist
    myCar.accelerate(50);
    myTruck.accelerate(30);
    myTransporter.accelerate(20);

    // Aufrufen von showInfo() erneut, um zu sehen, ob sich die Informationen geändert haben
    console.log(myCar.showInfo());
    console.log(myTruck.showInfo());
    console.log(myTransporter.showInfo());
}

function testInterface() {
    const myCar = new PKW("Mein Auto", 120, 5);
    const myLoader: Vehicle = new Transporter("Mein Transporter", 60, "Güter", 1000);

    if ('load' in myLoader && typeof myLoader.load === 'function') {
        myLoader.load(myCar);
        console.log(myLoader.showInfo());
    } else {
        console.log("Mein Transporter ist nicht beladbar.");
    }
}

testVehicle();

testDerivedVehicles();

testInterface();