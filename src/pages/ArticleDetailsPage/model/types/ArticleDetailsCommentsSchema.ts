import { EntityState } from '@reduxjs/toolkit';
// extends EntityState<Comment>
export interface ArticleDetailsCommentsSchema {
    isLoading: boolean;
    error?: string;
    ids: string[];
    entities: {}
}
