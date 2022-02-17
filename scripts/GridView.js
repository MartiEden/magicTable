export class GridView {

    //Props
    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this._attribute = [];
    }

    //Methods

    set header(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    set headerClass(headerClass) {
        if (typeof header === 'object') {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    set element(element) {
        if (document.querySelector(element)) {
            this._element = document.querySelector(element);
            return true;
        }
        return false;
    }

    render() {

    }

}