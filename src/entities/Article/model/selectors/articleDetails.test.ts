import { StateSchema } from 'app/providers/StoreProvider';
import { selectLoginError } from 'features/AuthByUserName/model/selectors/selectLoginError/selectLoginError';
import { selectArticleDetailsData, selectArticleDetailsError, selectArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';

describe('selectArticleDetails', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'title',
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(selectArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'some error',
            },
        };
        expect(selectArticleDetailsError(state as StateSchema)).toEqual('some error');
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(selectArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginError(state as StateSchema)).toEqual(undefined);
    });
});
