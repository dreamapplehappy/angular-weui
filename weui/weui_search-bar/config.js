import SearchBarController from './controllers/search-bar.controller';
import searchBarHtml from './templates/search-bar.html';

const SearchBarComponent = {
    controller: SearchBarController,
    replace: true,
    template: searchBarHtml
};

export {SearchBarComponent};

