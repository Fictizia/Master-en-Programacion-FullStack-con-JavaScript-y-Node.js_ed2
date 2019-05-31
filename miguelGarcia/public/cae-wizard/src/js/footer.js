import { View } from './view.js';

export class Footer extends View {

    constructor () {
        super();
    }
    
    render () {
        return `
        
        <p><h2>Contacto</h2></p>
         <p><h2>Ayuda</h2></p>
         <p><h2>Acerca de caeWizard</h2></p> 
       
        `
    }
}