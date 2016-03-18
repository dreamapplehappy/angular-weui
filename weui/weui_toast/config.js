import ToastController from './controllers/toast.controller';
import toastHtml from './templates/toast.html';
import loadingToastHtml from './templates/loading-toast.html';

const ToastComponent = {
    controller: ToastController,
    template: toastHtml
};

const LoadingToastComponent = {
    controller: ToastController,
    template: loadingToastHtml
};

export {ToastComponent, LoadingToastComponent};

