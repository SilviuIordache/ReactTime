export function msToTime(ms, showMs) {
  const msReal = ms % 1000;

  let msDisplay = Math.round(msReal / 10);
  if (msReal === 0) {
    msDisplay = '00';
  } else if (msDisplay < 10) {
    msDisplay = '0' + msDisplay;
  }
  ms = (ms - msReal) / 1000;

  const secs = ms % 60 ;
  const secDisplay = (secs >= 10) ? secs : '0' + secs;
  ms = (ms - secs) / 60;
  
  const mins = ms % 60;
  const minsDisplay = (mins >= 60) ? mins : '0' + mins;

  let timer = minsDisplay + ':' + secDisplay

  if (showMs) {
    timer += (':' + msDisplay)
  }
  return timer;
}