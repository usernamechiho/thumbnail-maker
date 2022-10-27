import './App.css';
import styles from './poster.module.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function Poster() {
  const [title, setTitle] = useState('SOMETHING');
  const [isLight, setIsLight] = useState(false);

  const handleChangeTitle = (e) => setTitle(e.currentTarget.value);
  const handleChangeTheme = () => setIsLight((prev) => !prev);

  const downloadAsImage = () => {
    html2canvas(document.querySelector('#poster'), { allowTaint: true }).then((canvas) => {
      document.body.append(canvas);
    });
  };

  return (
    <div className={styles.posterContainer}>
      <h2>Cobb Poster</h2>
      <div className={styles.poster} style={{ background: isLight ? 'rgba(252, 253, 252)' : '#1c1c21' }} id="poster">
        <h1
          style={{
            color: isLight ? '#1c1c21' : 'rgba(252, 253, 252)',
          }}
        >
          {title}
        </h1>
      </div>

      <div className={styles.controller}>
        TITLE
        <input onChange={handleChangeTitle} />
        <button type="button" onClick={handleChangeTheme}>
          {isLight ? 'Dark' : 'Light'}
        </button>
        <button type="button" onClick={downloadAsImage}>
          저장
        </button>
      </div>
    </div>
  );
}

export default Poster;
