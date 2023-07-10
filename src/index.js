import React from 'react';
import { render } from 'react-dom';

import Counter from './components/Counter';
import Input from './components/Input';
import Moods from './components/Moods';
import Spinner from './components/Spinner';
import Squares from './components/Squares';
import Programmers from './components/Programmers';

render(
  <> 
    <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
    <Programmers />
  </>
  ,
  document.querySelector('#root')
);

/**
 * <> this is a react fragment </>
 * 
 * document.createElement('div');
 * elem.classList.add('words');
 * --- JSX end up being the above JS 
 * If you don't want to have possible issues with your layout, flex, characteristics, then we use a <> react fragment </>
 * A <> react fragment </> will allow us to target *ONE* element and makes it an array or object of elements.
 * It essentially collects things all into one place
 * This won't present any new markup on JSX or HTML output
 */