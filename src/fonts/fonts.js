import { css } from 'styled-components';

import ConsolasWoff from './Consolas.woff';
import ConsolasWoff2 from './Consolas.woff2';

import ConsolasBoldWoff from './Consolas-Bold.woff';
import ConsolasBoldWoff2 from './Consolas-Bold.woff2';

import PressStart2pRegularWoff from './press-start-2p-v9-latin_cyrillic-regular.woff';
import PressStart2pRegularWoff2 from './press-start-2p-v9-latin_cyrillic-regular.woff2';

export const fontFaces = css`
  @font-face {
    font-family: 'Consolas';
    font-weight: normal;
    font-style: normal;
    src: url('${ConsolasWoff}') format('woff'), url('${ConsolasWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'Consolas';
    font-weight: bold;
    font-style: normal;
    src: url('${ConsolasBoldWoff}') format('woff'), url('${ConsolasBoldWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'Press Start 2P';
    font-style: normal;
    font-weight: 400;
    src: url('${PressStart2pRegularWoff}') format('woff'),
      url('${PressStart2pRegularWoff2}') format('woff2');
  }
`;
