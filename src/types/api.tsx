export interface IAgify {
    name: string;
    age: number;
    count: number;
}

export interface IGenderize {
    name: string;
    gender: 'male' | 'female';
    probability: number;
    count: number;
}

export interface INationalize {
    name: string;
    country: {
        country_id: string;
        probability: number;
    }[];
}