import { createRenderer } from 'fela';
import devPreset from 'fela-preset-dev';
import webPreset from 'fela-preset-web';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedMediaQuery from 'fela-plugin-named-media-query';

let renderer;

export function getMountNode() {
    if (typeof window !== 'undefined') {
        return document.getElementById('fela-stylesheet');
    }

    return undefined;
}

export function getRenderer() {
    if (!renderer) {
        renderer = createRenderer({
            plugins: [
                friendlyPseudoClass(),
                namedMediaQuery(),
                ...webPreset,
            ].concat(process.env.NODE_ENV === 'development' ? devPreset : []),
        });

        renderer.renderFont('boycottregular', [
            '/static/boycott.eot',
            '/static/boycott.svg',
            '/static/boycott.ttf',
            '/static/boycott.woff',
        ]);
    }

    return renderer;
}
