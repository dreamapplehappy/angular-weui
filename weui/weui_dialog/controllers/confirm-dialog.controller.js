'use strict';

class ConfirmDialogController {
    constructor() {
        this.show = false;
    }

    showConfirmDialog() {
        this.show = true;
    }
    hideConfirmDialog() {
        this.show = false;
    }
}

ConfirmDialogController.$inject = [];

export default ConfirmDialogController;