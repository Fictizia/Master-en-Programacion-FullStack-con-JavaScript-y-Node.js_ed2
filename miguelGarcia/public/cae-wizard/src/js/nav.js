import { View } from './view.js';
import * as firebase from 'firebase/app';
import 'firebase/auth';


export class Nav extends View {

    constructor (user) {
        super();
        this.user = user;
    }
    
    render () {
        console.log('en render nav:', this.user);
        return `
        <div class="nav">
            
            <p><a class="link" href="#home">dashboard</a></p>
            <p><a class="link" href="#perfil">perfil</a></p>
            <p><a class="link" href="#documentos">mis documentos</a></p>
            <p><a class="link" href="#trabajadores">trabajadores</a></p>
            <p><a class="link" href="#plataformas">mis centros</a></p>

              
        </div>

        <div class="user">
            <img src='${this.user && this.user.photoURL ? this.user.photoURL : 'https://api.adorable.io/avatars/200/abott@adorable.png' }' height="100" width="100"></img>
            ${this.user.displayName}
            ${this.user.email}
            <p><a href="#configuracion">configurar</a></p>
             <button id="logout">logout</button>
        </div>
        `
    }
    addEventListeners () {
        this.query('#logout').addEventListener('click', () => 
        firebase.auth().signOut().then(()=>console.log('logOut OK')
        ).catch(()=>console.log('hubo un error al desconectar'))
        );
        
    }
}