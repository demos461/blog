import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { BuildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
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

    config!.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify('https://testapi.com'),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
