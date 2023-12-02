import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/storybook/avatar.png';
import { Profile } from 'entities/Profile';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

const dataProfile: Profile = {
    id: '1',
    first: 'Eva',
    lastname: 'Di',
    age: 23,
    country: Country.BELARUS,
    currency: Currency.BYN,
    username: 'admin',
    city: 'Grodno',
    avatar: AvatarImg,
};

export const Primary: Story = {
    args: {
        data: dataProfile,
        readonly: true,
    },
};

Primary.decorators = [StoreDecorator({})];

export const WithError: Story = {
    args: {
        error: 'Error',
    },
};

WithError.decorators = [StoreDecorator({})];

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

Loading.decorators = [StoreDecorator({})];
