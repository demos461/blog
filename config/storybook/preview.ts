import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import {
    SuspenseDecorator,
} from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        withThemeByClassName({
            themes: {
                light: Theme.LIGHT,
                dark: Theme.DARK,
                teal: Theme.TEAL,
            },
            defaultTheme: 'light',
        }),
        RouterDecorator,
        StyleDecorator,
        SuspenseDecorator,
    ],
};

export default preview;
