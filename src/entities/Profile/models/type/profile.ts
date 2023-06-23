import { Country, Currency } from 'shared/const/common';

export interface Profile {
    username?: string,
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    avatar?: string;
}
