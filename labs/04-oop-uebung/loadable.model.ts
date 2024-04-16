import { Vehicle } from "./vehicle.class";

export interface ILoadable {
    otherVehicle: Vehicle | null;
    load(vehicle: Vehicle): void;
    unload(): Vehicle | null;
}
