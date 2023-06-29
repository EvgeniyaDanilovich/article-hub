import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/storybook/avatar.png';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

const dataProfile: Profile = {
    first: 'Eva',
    lastname: 'Di',
    age: 23,
    country: Country.BELARUS,
    currency: Currency.BYN,
    username: 'admin',
    city: 'Grodno',
    avatar: AvatarImg,
};

export const Light: Story = {
    args: {},
};
Light.decorators = [StoreDecorator({
    profile: {
        form: dataProfile,
    },
})];

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: dataProfile,
    },
})];
