import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (message) => {
     toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
               backgroundColor: '#4caf50', // Yeşil arka plan rengi
               color: 'white', // Beyaz yazı rengi
               fontWeight: 'bold', // Kalın yazı stili
               borderRadius: '8px', // Yuvarlatılmış köşeler
               border: '1px solid white', // Beyaz çerçeve
          },
          icon: '👍',
     });
};


export const notifyError = (message) => {
     toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
               backgroundColor: '#f44336', // Kırmızı arka plan rengi
               color: 'white', // Beyaz yazı rengi
               fontWeight: 'bold', // Kalın yazı stili
               borderRadius: '8px', // Yuvarlatılmış köşeler
               border: '1px solid white', // Beyaz çerçeve
          },
          icon: '⚠️',
     });
};

export const notifyWarning = (message) => {
     toast.warn(message, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
               backgroundColor: '#ff9800', // Turuncu arka plan rengi
               color: 'white', // Beyaz yazı rengi
               fontWeight: 'bold', // Kalın yazı stili
               borderRadius: '8px', // Yuvarlatılmış köşeler
               border: '1px solid white', // Beyaz çerçeve
          },
          icon: 'ℹ️',
     });
};