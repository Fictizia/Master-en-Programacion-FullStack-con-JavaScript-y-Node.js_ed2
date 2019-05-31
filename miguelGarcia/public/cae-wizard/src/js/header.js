


import { View } from './view.js';

export class Header extends View {

    constructor () {
        super();
        this.miVar = ''
    }
    
    render () {
        return `
        
        <img id="wizard" src="./assets/img/wizard.svg"></img>
        <h1>caeWizard</h1>
       
        
        `
    }
}
