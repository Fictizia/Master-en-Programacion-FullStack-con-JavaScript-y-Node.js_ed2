// for webpack use

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

/////////////////////////////////

export let session;
import { View } from './view.js';
import { storage ,database} from './storeManager.js'


export class UserLogin extends View {

    constructor () {
        super();
        
    }
    
    render () {
        return `
        
            <div class="login">
                <div><img id="loginIcon" src="./assets/img/wizard.svg"></img><h2> caeWizard</h2>
                </div>
                <div>
                    <p>Inicie sesion para entrar</p>
                </div>
                <div>
                    <p><input class="inputMail" placeholder="mail"></p>
                    <p><input class="inputPass" type="password" placeholder="password"></p>
                    <button id="submitLogin">login</button>
                </div>
                <p><div class="errors"></div></p>
            </div>    
            
        
        `
    }
    addEventListeners(){
        

        this.query('#submitLogin').addEventListener('click',this.login);
    }


    login(){
        
        let email = document.querySelector('.inputMail').value;
        let pass = document.querySelector('.inputPass').value;

        session.loginFire(email, pass)
        .then((userCredential)=>{

            window.app.viewManager.removeSection('login');

        }).catch(function(error) {

            let errorCode = error.code;
            let errorMessage = error.message; 
            let divErrors = document.querySelector('.errors');
            divErrors.innerHTML = (errorCode + ": " + errorMessage);
         });
          
    }
}

session = {

    loginFire(email,pass){
       return firebase.auth().signInWithEmailAndPassword(email, pass)
    },
    logout(){
        firebase.auth().signOut();
    },

    async updatePhotoUrl(file,user){
        
        let fileRef = await storage.loadFile(file);
        let filePath = await fileRef.location.path;
        let photoUrl = await storage.downloadFile(filePath);
        user.updateProfile({
            photoURL: photoUrl
            
        });
        
    }

}