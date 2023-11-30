import path from 'path';

import { StorybookConfig } from '@storybook/react-webpack5';
import webpack, { RuleSetRule } from 'webpack';

import { BuildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        '@storybook/addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config: webpack.Configuration) => {
        const paths: BuildPaths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };
        config!.resolve!.modules!.push(paths.src);
        config!.resolve!.extensions!.push('.ts', 'tsx');
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };
        // eslint-disable-next-line no-param-reassign
        // @ts-ignore
        config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });

        config!.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config!.module!.rules.push(BuildCssLoader(true));

        config!.plugins!.push(
            new webpack.DefinePlugin({
                __IS_DEV__: true,
                __API__: JSON.stringify('https://testapi.com'),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        );

        return config;
    },
};

export default config;
