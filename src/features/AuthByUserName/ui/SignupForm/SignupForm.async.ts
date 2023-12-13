import { FC, lazy } from 'react';
import { SignupFormProps } from '../SignupForm/SignupForm';

export const SignupFormAsync = lazy<FC<SignupFormProps>>(() => import('./SignupForm'));
