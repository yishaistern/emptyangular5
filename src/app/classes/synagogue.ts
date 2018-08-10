export class Synagogue {
    name: string;
    city: string;
    fullAddress: string;
    street: string;
    streetNumber: string;
    emailGabay: string;
    lat: number;
    bounds: any;
    googlebounds: any;
    lan: number;
    explanation: string;
    setNmae(name: string): void {
        this.name = name;
    }
    getNmae(): string {
        return this.name;
    }
    setFullAddress(name: string): void {
        this.fullAddress = name;
    }
    getFullAddress(): string {
        return this.fullAddress;
    }
}

export class Minyan {
    private name: string;
    private day: string;
    private shortDay: string;
    private startime: string;
    private endtime: string;
    private howMuchTime: string;
    private specialPlace: string;
}
