import { Story } from '@storybook/blocks';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
};
