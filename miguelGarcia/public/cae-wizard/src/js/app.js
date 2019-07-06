
// for webpack
import "../css/style.css";
import "../css/tabulator.css";
import "../css/toastr.min.css";
import "../assets/img/spinner.gif";
import "../assets/img/underConstruction.gif";
import "../assets/img/wizard.svg";






////////////////
import { inicializefirebase } from './storeManager.js';
import { Header } from './header.js';
import { Home } from './home.js';
import { Footer } from './footer.js';
import { Nav } from './nav.js';
import { ViewManager } from './view-manager.js'
import { Mydocs } from './mydocs.js';
import { Myworkers } from './myworkers.js';
import { Mysites } from './mysites.js';
import { Profiles } from './profile.js';
import { database, storage} from './storeManager.js';
import { session } from './session-manager.js';
import { UserLogin } from './session-manager.js';
import { UserProfile } from './user-profile.js';


let fire = inicializefirebase();

let footer;
let head;
let nav;


let wrapper = document.querySelector('.wrapper');
let viewManager = new ViewManager({
    nav: '.app-nav',
    content: '.app-content',
    footer: '.app-footer',
    head: '.app-header',
    login:'.app-login',
    modal:'.app-modal'
})


window.app = {
    viewManager,
    firstEnter: true,
    login: false
}

//NO LOGIN STATE

function logger(){
    let login = new UserLogin();
    if (window.app.firstEnter){
        viewManager.showView(login,'login')
    }
    if (!window.app.firstEnter){
        window.removeEventListener('hashchange', route);
        window.location.hash = '';
        viewManager.removeSection('content');
        viewManager.removeSection('footer');
        viewManager.removeSection('head');
        viewManager.removeSection('nav');
        viewManager.showView(login,'login')
    }
};



fire.auth().onAuthStateChanged(function(user) {

    if (user) {
        
        
        window.location.hash = '';
        window.app.firstEnter = false;  
        window.location.hash = 'home';
        window.addEventListener('hashchange', route);
    }
    else{
        
        logger();
    }
});




            // enrutar

function route () {
    
    let viewToShow;

    switch (window.location.hash.substr(1)) {

        case 'home':
            let home1 = new Home();
            viewToShow = home1;
            break;
        case 'perfil':
            var userProfile = new UserProfile(fire.auth().currentUser)
            viewToShow = userProfile;
            break;
        case 'documentos':
            let mydocs = new Mydocs();
            viewToShow = mydocs;
            break;
        case 'trabajadores':
            let myworkers = new Myworkers();
            viewToShow = myworkers;
            break;
        case 'plataformas':
            let mysites = new Mysites();
            viewToShow = mysites;
            break;
        case 'configuracion':
            viewToShow = userProfile;
            break;
        }

        if(!footer){
            footer = new Footer();
        }
        if(!head){
            head = new Header();
        }
        if(!nav){
            nav = new Nav(fire.auth().currentUser);
        }

        viewManager.showView(footer, 'footer');
        viewManager.showView(nav, 'nav');
        viewManager.showView(head, 'head');

        viewManager.showView(viewToShow, 'content');
        
           
       
}







 










 














