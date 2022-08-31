// import { useEffect } from 'react';

// const useCheckInternet = onNotify => {
//   useEffect(() => {
//     window.addEventListener('online', onNotify);
//     window.addEventListener('offline', onNotify);
//   }, [window]);
// };

function useCheckInternet() {
  window.ononline = () => {
    console.log('Back Online');
  };

  window.onoffline = () => {
    console.log('Connection Lost');
  };
}

export default useCheckInternet;
