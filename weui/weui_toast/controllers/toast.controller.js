'use strict';

import '../styles/toast.scss';

const _Timeout = new WeakMap();

class ToastController {
    constructor($timeout) {
        _Timeout.set(this, $timeout);
        this.show = false;
    }

    showToast() {
        this.show = true;
        _Timeout.get(this)(() => {
            this.show = false;
        }, 2000);
    }
}

ToastController.$inject = ['$timeout'];

export default ToastController;