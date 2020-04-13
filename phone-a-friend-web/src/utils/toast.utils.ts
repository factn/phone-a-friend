import { toast, ToastOptions } from 'react-toastify';

export function successToast(message: string, toastOptions?: ToastOptions) {
  toast(message, { type: 'success', ...toastOptions });
}

export function infoToast(message: string, toastOptions?: ToastOptions) {
  toast(message, { type: 'info', ...toastOptions });
}

export function errorToast(message: string, toastOptions?: ToastOptions) {
  toast(message, { type: 'error', ...toastOptions });
}
