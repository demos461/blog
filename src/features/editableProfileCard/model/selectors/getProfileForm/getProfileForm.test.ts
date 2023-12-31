import { getProfileForm } from './getProfileForm';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const form = {
            username: 'admin',
            age: 24,
            country: Country.BELARUS,
            lastname: 'adminich',
            first: 'adminushka',
            city: 'Neverland',
            currency: Currency.BYN,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
