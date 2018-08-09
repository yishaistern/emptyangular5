export class Synagogue {
    name: string;
    city: string;
    fullAddress: string;
    street: string;
    streetNumber: string;
    emailGabay: string;
    lat: number;
    lan: number;
    explanation: string;
    setNmae(name: string): void {
        this.name = name;
    }
    getNmae(): string {
        return this.name;
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
