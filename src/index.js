import React from 'react';
import { render } from 'react-dom';

import './style.css';
import Logo from './Logo';
import GitHubBadge from './GitHubBadge';
import jsbookmarks from './data';

function App() {
  return (
    <>
      <div className="container">
        <Logo name="🔖 JS BOOKMARK" />
        <p>
          {/* eslint-disable-next-line */}
          拖拽下面的 <a>书签</a> 到你的书签栏，点击调用，Try it！🦄
        </p>
        <ul>
          {jsbookmarks.map(bookmark => (
            <li key={bookmark.name}>
              <a href={bookmark.code}>{bookmark.name}</a>
              <span>：{bookmark.desc}</span>
            </li>
          ))}
        </ul>
      </div>
      <GitHubBadge slug="ifyour/js-bookmark" />
    </>
  );
}

render(<App />, document.getElementById('root'));
