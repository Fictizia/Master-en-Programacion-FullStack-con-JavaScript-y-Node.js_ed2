export class View {
    constructor () {
        if (typeof this.render !== 'function') {
            throw new Error('Necesitas implementar un metodo render');
        }
    }

    query (selector) {
        return this._domNode.querySelector(selector);
    }

    mount (domNode) {
       const html = this.render();
       
       this._domNode = domNode;

       domNode.innerHTML = html;

       if (typeof this.addEventListeners === 'function') {
            this.addEventListeners();
       }

       if (typeof this.afterMount === 'function') {
            this.afterMount();
       }
    }

    refreshView () {
        const html = this.render();

        this._domNode.innerHTML = html;

        if (typeof this.addEventListeners === 'function') {
            this.addEventListeners();
        }
    }

    removeNode () {
        this._domNode.innerHTML = '';
    }
}