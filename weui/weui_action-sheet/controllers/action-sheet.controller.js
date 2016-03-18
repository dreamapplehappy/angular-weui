'use strict';

import '../styles/action-sheet.scss';

class ActionSheetController {
    constructor() {
        this.show = false;
    }

    showActionSheet() {
        this.show = true;
    }
    hideActionSheet() {
        this.show = false;
    }
    toggleActionSheet() {
        this.show = !this.show;
    }
}

ActionSheetController.$inject = [];

export default ActionSheetController;