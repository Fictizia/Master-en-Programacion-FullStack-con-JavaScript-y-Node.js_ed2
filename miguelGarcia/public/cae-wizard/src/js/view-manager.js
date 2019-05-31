import { View } from './view.js';

export class ViewManager {
    constructor (layoutConfig) {
        if (typeof layoutConfig !== 'object') {
            throw new Error('Es necesario configurar un layout para el ViewManager');
        }
    
        this.layoutConfig = layoutConfig;
        this.sections = this._createSections(layoutConfig);
    }

    _createSections (layoutConfig) {
        const sections = {};

        for (let key of Object.keys(layoutConfig)) {
            const value = layoutConfig[key];

            if (typeof value !== 'string') {
                throw new Error('Formato de seccion no valido. Tiene que ser en formato string');
            }

            const node = document.querySelector(value);
            
            if (!node) {
                throw new Error(`No existe la seccion ${key} en el DOM`);
            }

            sections[key] = node;
        }

        return sections;
    }

    showView (view, sectionName) {
        if (!view instanceof View) {
            throw new Error('La vista no es una instancia de View');
        }

        if (!this.sections[sectionName]) {
            throw new Error ('La seccion no existe');
        }

        const inst = sectionName

        view.mount(this.sections[sectionName]);
    }

    removeSection(sectionName){
        this.sections[sectionName].innerHTML = '';

    }
}

