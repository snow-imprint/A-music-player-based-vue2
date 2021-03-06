// rem 适配手机屏幕
export default function (): void {
  // const evt = "onorientationchange" in window ? "onorientationchange" : "resize";
  const isIphone = window.navigator.appVersion.match(/iphone/gi);
  let dpr = window.devicePixelRatio;
  if (isIphone) {
    if (dpr >= 3 && (!dpr || dpr >= 3)) {
      dpr = 3;
    } else if (dpr >= 2 && (!dpr || dpr >= 2)) {
      dpr = 2;
    } else {
      dpr = 1;
    }
  } else {
    dpr = 1;
  }

  const scale = 1 / dpr;
  const docEl = document.documentElement;
  let metaEl = document.querySelector("meta[name='viewport']");
  const headEl = document.querySelector('head');

  if (!metaEl) {
    metaEl = document.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    if (headEl) {
      headEl.appendChild(metaEl);
    }
  }
  const fn = (): void => {
    let docElWidth = docEl.getBoundingClientRect().width;
    if (docElWidth / dpr > 540) {
      docElWidth = 540 * dpr;
    }
    const fontSize = docElWidth / 10;
    if (metaEl) {
      metaEl.setAttribute(
        'content',
        'initial-scale=' +
          scale +
          ',maximum-scale=' +
          scale +
          ', minimum-scale=' +
          scale +
          ',user-scalable=no'
      );
    }
    docEl.setAttribute('data-dpr', dpr.toString());
    docEl.style.fontSize = fontSize + 'px';
  };
  window.addEventListener('resize', fn, false);
  document.addEventListener('DOMContentLoaded', fn, false);
}
