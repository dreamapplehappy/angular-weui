'use strict';

import '../styles/progress.scss';

const _Timeout = new WeakMap();

class ProgressController {
    constructor($timeout) {
        _Timeout.set(this, $timeout);
        this.progress = 0;
    }

    increment() {
        _Timeout.get(this)(() => {
            if(this.progress <= 100) {
                this.progress++;
                this.increment();
            }
        }, 50);
    }
}

ProgressController.$inject = ['$timeout'];

export default ProgressController;