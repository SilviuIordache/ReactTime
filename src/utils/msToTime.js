export function msToTime(ms) {
  const msReal = ms % 1000;

  let msDisplay;
  if (msReal === 0)
    msDisplay = '00';
  else if (msReal < 10)
    msDisplay = '0' + msReal;
  else
    msDisplay = Math.round(msReal / 10)
  ms = (ms - msReal) / 1000;

  const secs = ms % 60 ;
  const secDisplay = (secs >= 10) ? secs : '0' + secs;
  ms = (ms - secs) / 60;
  
  const mins = ms % 60;
  const minsDisplay = (mins >= 60) ? mins : '0' + mins;

  let timer = minsDisplay + ':' + secDisplay // + ':' + msDisplay;
  return timer;
}