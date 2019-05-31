
import { View } from './view.js';

export class Mysites extends View {

    constructor () {
        super();
    }
    
    render () {
        return `
        <div class="content">
            <div><p><h2> MIS CENTROS </h2></p></div>
            <div class="underC">
            <p>
            <img src="./assets/img/underConstruction.gif">
                 </p>
            </div>
            <div class=table>
            </div>
        </div>
        `
    }
}