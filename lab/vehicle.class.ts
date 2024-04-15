export class Vehicle {
    name: string;
    maxV: number;
    currentV: number;
    dateBuilt: Date;
    running: boolean;

    constructor(name: string, maxV: number) {
        this.name = name;
        this.maxV = maxV;
        this.currentV = 0; // Fahrzeug steht, also ist die aktuelle Geschwindigkeit 0
        this.dateBuilt = new Date(); // Aktuelles Datum und Uhrzeit als Bauzeit
        this.running = false; // Motor ist aus
    }

    showInfo(): string {
        return `Name: ${this.name}, Max Geschwindigkeit: ${this.maxV}, Aktuelle Geschwindigkeit: ${this.currentV}, Baujahr: ${this.dateBuilt.getFullYear()}, Motor läuft: ${this.running}`;
    }

    startMotor(): void {
        if (!this.running) {
            this.running = true;
        }
    }

    stopMotor(): void {
        if (this.running) {
            this.running = false;
            this.currentV = 0; // Fahrzeug steht, also ist die aktuelle Geschwindigkeit 0
        }
    }

    accelerate(v: number): void {
        if (this.running) {
            this.currentV += v;
            if (this.currentV < 0) {
                this.currentV = 0;
            } else if (this.currentV > this.maxV) {
                this.currentV = this.maxV;
            }
        }
    }
}

export class PKW extends Vehicle {
    seats: number;

    constructor(name: string, maxV: number, seats: number) {
        super(name, maxV);
        this.seats = seats;
    }

    showInfo(): string {
        return `${super.showInfo()}, Sitzplätze: ${this.seats}`;
    }
}

export class LKW extends Vehicle {
    fuelType: string;

    constructor(name: string, maxV: number, fuelType: string) {
        super(name, maxV);
        this.fuelType = fuelType;
    }

    showInfo(): string {
        return `${super.showInfo()}, Treibstoff: ${this.fuelType}`;
    }
}
