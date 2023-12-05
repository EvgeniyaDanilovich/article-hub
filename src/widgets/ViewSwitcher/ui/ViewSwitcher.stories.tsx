import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ArticleView } from 'entities/Article';
import { ViewSwitcher } from './ViewSwitcher';

const meta: Meta<typeof ViewSwitcher> = {
    title: 'widget/ViewSwitcher',
    component: ViewSwitcher,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof ViewSwitcher>;

export const SmallViewSelected: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};

export const LargeViewSelected: Story = {
    args: {
        view: ArticleView.LARGE,
    },
};
