import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { selectAddCommentFormCommentText } from '../../models/selectors/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from '../../models/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (commentText: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ onSendComment, className }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const commentText = useSelector(selectAddCommentFormCommentText);

    const onChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setCommentText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(async () => {
        onSendComment(commentText || '');
        onChange('');
    }, [commentText, onChange, onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    onChange={onChange}
                    value={commentText}
                    placeholder={t('Enter comment text')}
                    className={cls.input}
                    type="text"
                />
                <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>{t('Send')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
