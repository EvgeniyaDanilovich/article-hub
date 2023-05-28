import 'app/styles/index.scss';
import { Story } from '@storybook/blocks';

export const StyleDecorator = (story: () => typeof Story) => story();
