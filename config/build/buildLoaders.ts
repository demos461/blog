import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { BuildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                },
            },
        ],
    };

    // Если не используем typescript - нужен babel-loader
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = BuildCssLoader(isDev);

    return [
        babelLoader,
        svgLoader,
        fileLoader,
        typeScriptLoader,
        cssLoader,
    ];
}
