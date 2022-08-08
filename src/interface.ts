export interface ResponseInterface {
  VehAvailRSCore: VehAvailRSCore;
}

export interface VehAvailRSCore {
  VehRentalCore: VehRentalCore;
  VehVendorAvails: VehVendorAvail[];
}

export interface VehRentalCore {
  "@PickUpDateTime": Date | string;
  "@ReturnDateTime": Date | string;
  PickUpLocation: PickUpLocation;
  ReturnLocation: PickUpLocation;
}

export interface PickUpLocation {
  "@Name": string;
}

export interface VehVendorAvail {
  Vendor: Vendor;
  VehAvails: VehAvail[];
}

export interface VehAvail {
  "@Status": Status;
  Vehicle: Vehicle;
  TotalCharge: TotalCharge;
}

export type Status = "Available";

export interface TotalCharge {
  "@RateTotalAmount": string;
  "@EstimatedTotalAmount": string;
  "@CurrencyCode": CurrencyCode;
}

export type CurrencyCode = "CAD";

export interface Vehicle {
  "@AirConditionInd": string;
  "@TransmissionType": TransmissionType;
  "@FuelType": FuelType;
  "@DriveType": DriveType;
  "@PassengerQuantity": string;
  "@BaggageQuantity": string;
  "@Code": string;
  "@CodeContext": CodeContext;
  "@DoorCount": string;
  VehMakeModel: PickUpLocation;
  PictureURL: string;
  "@Size"?: string;
}

export type CodeContext = "CARTRAWLER";

export type DriveType = "Unspecified";

export type FuelType = "Petrol";

export type TransmissionType = "Automatic";

export interface Vendor {
  "@Code": string;
  "@Name": string;
}

export interface InterceptedResponseInterface {
  "@Status": Status;
  Vehicle: Vehicle;
  TotalCharge: TotalCharge;
  Price: number;
  Id: string;
  Vendor: Vendor;
}
