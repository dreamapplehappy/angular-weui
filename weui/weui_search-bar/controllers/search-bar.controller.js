'use strict';

import '../styles/search-bar.scss';

class SearchBarController {
    constructor() {
        this.click = false;
    }

    focus() {
        this.click = true;
    }

    blur() {
        this.click = false;
    }
}

SearchBarController.$inject = [];

export default SearchBarController;