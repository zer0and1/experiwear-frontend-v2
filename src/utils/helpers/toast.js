import { toast } from 'react-toastify';

const showErrorToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};

const showSuccessToast = (message) => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};

const showInfoToast = (message) => {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};

export { showInfoToast, showErrorToast, showSuccessToast };
