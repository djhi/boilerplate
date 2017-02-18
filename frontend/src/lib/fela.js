import { createRenderer } from 'fela';
import devPreset from 'fela-preset-dev';
import webPreset from 'fela-preset-web';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedMediaQuery from 'fela-plugin-named-media-query';
import customFonts from '../customFonts';
import mediaQueries from '../mediaQueries';

export function getMountNode() {
    if (typeof window !== 'undefined') {
        return document.getElementById('fela-stylesheet');
    }

    return undefined;
}

let renderer;

export function getRenderer() {
    if (!renderer) {
        renderer = createRenderer({
            plugins: [
                friendlyPseudoClass(),
                namedMediaQuery(mediaQueries),
                ...webPreset,
                ...(process.env.NODE_ENV === 'development' ? devPreset : []),
            ],
        });

        Object.keys(customFonts).forEach((fontFamily) => {
            renderer.renderFont(fontFamily, customFonts[fontFamily]);
        });
    }

    return renderer;
}
