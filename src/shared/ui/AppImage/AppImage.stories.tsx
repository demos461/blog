import { Meta, StoryObj } from '@storybook/react';

import { Loader } from '../Loader';
import { Text, TextTheme } from '../Text';

import { AppImage } from './AppImage';

const meta:Meta<typeof AppImage> = {
    title: 'shared/AppImage',
    component: AppImage,
};
export default meta;

type Story = StoryObj<typeof AppImage>

export const Primary: Story = {
    args: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg',
    },
};

export const Loading: Story = {
    args: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg',
        fallback: <Loader />,
    },
};

export const ErrorFallback: Story = {
    args: {
        src: '',
        errorFallback: <Text theme={TextTheme.ERROR} text="Error loading" />,
    },
};
