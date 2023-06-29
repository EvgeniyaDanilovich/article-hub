import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from 'pages/ProfilePage/models/types/profile';

export const validateProfileData = (profileData?: Profile) => {
    if (!profileData) {
        return [ValidateProfileErrors.NO_DATA];
    }

    const { first, lastname, age, country } = profileData;
    const errors: ValidateProfileErrors[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
    }

    return errors;
};
