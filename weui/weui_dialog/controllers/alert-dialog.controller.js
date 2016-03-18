'use strict';

class AlertDialogController {
    constructor() {
        this.show = false;
    }

    showAlertDialog() {
        this.show = true;
    }
    hideAlertDialog() {
        this.show = false;
    }
}

AlertDialogController.$inject = [];

export default AlertDialogController;