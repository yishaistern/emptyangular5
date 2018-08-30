export class GlobalObjects {
}

/** Links that will be part of the routing moudle */
export enum Links {
    newSynagogue = 'newSynagogue',
    d3 = 'd3test'
}

/**languages enum */
export enum Language {
    he = 'he',
    en = 'en'
}

/** direction enum */
export enum Directions {
    rtl = 'rtl',
    ltr = 'ltr'
}

export class Dayes {
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
}

export class PrayNames {
    shacharit: string;
    mincha: string;
    maraiv: string;
    kids: string;
    mosaf: string;
}

export enum DetailsSynagogue {
    pry = 'pray',
    synagogue = 'synagogue'
}

export enum detailTypes {
    autocomplete = 'autocomplete',
    normal = 'normal'
}

export interface Fulldiction {
    feild: string;
    diction: string;
}
