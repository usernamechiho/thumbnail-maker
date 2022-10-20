import styles from './main.module.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [title, setTitle] = useState('Title');
  const [description, setDescription] = useState('Description');
  const [isLight, setIsLight] = useState(true);
  const [imageBackground, setImageBackground] = useState(false);

  const changeTitle = (e) => setTitle(e.target.value);
  const changeDescription = (e) => setDescription(e.target.value);

  const changeTheme = () => setIsLight((prev) => !prev);

  const getRandomBackgroundImage = () => {
    fetch('https://source.unsplash.com/1600x900/?abstract').then((res) => setImageBackground(res.url));
  };

  const getBlurImageBackground = () => {
    fetch('https://source.unsplash.com/1600x900/?blur').then((res) => setImageBackground(res.url));
  };

  const noImageBackground = () => setImageBackground(false);

  const downloadAsImage = () => {
    html2canvas(document.querySelector('#capture'), { allowTaint: true }).then((canvas) => {
      document.body.append(canvas);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.template} style={{ background: '9b9fcc' }}>
        <div className={styles.header}>
          <h1>Thumnail for Cobb</h1>
        </div>

        <div
          className={styles.thumbnail}
          style={{
            background: isLight ? 'rgba(252, 253, 252)' : '#1c1c21',
            backgroundImage: imageBackground ? `url(${imageBackground})` : 'none',
            backgroundSize: imageBackground ? 'cover' : 'none',
          }}
          id="capture"
        >
          <div className={styles.descContainer}>
            <div className={styles.title} style={{ color: isLight ? '#1c1c21' : 'rgba(252, 253, 252)' }}>
              {title}
            </div>
            <div
              className={styles.divider}
              style={{ borderBottom: isLight ? '1px solid #1c1c21' : '1px solid rgba(252, 253, 252)' }}
            />
            <div className={styles.description} style={{ color: isLight ? '#1c1c21' : 'rgba(252, 253, 252)' }}>
              {description}
            </div>
          </div>

          <div className={styles.copyright}>
            <p style={{ color: isLight ? '#1c1c21' : 'rgba(252, 253, 252)' }}>ⓒ Cobb</p>
          </div>
        </div>

        <div className={styles.controller}>
          Title
          <input onChange={changeTitle} />
          Description
          <input onChange={changeDescription} />
          ThemeButton
          <button onClick={changeTheme}>{isLight ? 'Dark' : 'Light'}</button>
          Background Image
          <button onClick={getRandomBackgroundImage}>Get Random Image</button>
          Blur Image
          <button onClick={getBlurImageBackground}>Blur Image</button>
          Background Image 제거
          <button onClick={noImageBackground}>Random Image 제거</button>
          DownloadImage
          <button onClick={downloadAsImage}>Download</button>
        </div>
      </div>
    </div>
  );
}

export default App;
