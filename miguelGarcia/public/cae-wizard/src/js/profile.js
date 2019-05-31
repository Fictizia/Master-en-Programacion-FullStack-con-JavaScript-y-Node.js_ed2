
import { View } from './view.js';

export class Profiles extends View {

    constructor () {
        super();
    }
    
    render () {
        return `
        <div class="content">
            <div><p><h2> USUARIO </h2></p></div>
            <p>Configura tu perfil de usuario</p>
            <input class="userName" placeholder="Introduce tu nombre de ususario">
            <div class="userMail"> </div>
            <div><p>
                 
            </div>
        </div>
        `
    }
}