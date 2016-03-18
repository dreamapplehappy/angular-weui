import AlertDialogController from './controllers/alert-dialog.controller';
import ConfirmDialogController from './controllers/confirm-dialog.controller';
import alertDialogtHtml from './templates/alert-dialog.html';
import confirmDialogtHtml from './templates/confirm-dialog.html';

const AlertDialogComponent = {
    controller: AlertDialogController,
    template: alertDialogtHtml
};

const ConfirmDialogComponent = {
    controller: ConfirmDialogController,
    template: confirmDialogtHtml
};

export {AlertDialogComponent, ConfirmDialogComponent};