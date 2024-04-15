import { ILoadable } from "./loadable.model";
import { Vehicle } from "./vehicle.class";

export class Transporter extends Vehicle implements ILoadable {
    loadType: string;
    capacity: number;
    otherVehicle: Vehicle | null = null;

    constructor(name: string, maxV: number, loadType: string, capacity: number) {
        super(name, maxV);
        this.loadType = loadType;
        this.capacity = capacity;
    }

    showInfo(): string {
        return `${super.showInfo()}, Ladetyp: ${this.loadType}, Fassungsvermögen: ${this.capacity}`;
    }

    load(vehicle: Vehicle): void {
        if (this.otherVehicle === null && this.capacity >= vehicle.maxV) {
            this.otherVehicle = vehicle;
            console.log(`${this.name} hat ${vehicle.name} geladen.`);
        } else {
            console.log(`${this.name} kann ${vehicle.name} nicht laden.`);
        }
    }

    unload(): Vehicle | null {
        const unloadedVehicle = this.otherVehicle;
        this.otherVehicle = null;
        if (unloadedVehicle) {
            console.log(`${this.name} hat ${unloadedVehicle.name} entladen.`);
        }
        return unloadedVehicle;
    }
}