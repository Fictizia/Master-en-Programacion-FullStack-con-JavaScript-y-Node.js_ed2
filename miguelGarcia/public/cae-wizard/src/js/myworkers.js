

// for webpack use
import Tabulator from 'tabulator-tables';
import toastr from 'toastr';

import { View } from './view.js';
import { storage } from './storeManager.js';
import { database } from './storeManager.js';
import { Modal } from './modal.js';
import { ViewManager } from './view-manager.js';

export class Myworkers extends View {
    constructor () {
        super();
        this.loading = false;
        const that = this;
        this.section = 'workers';
        this.columns = [ 
            {title:"Empleado", field:"worker", width:150},
            {title:"Dni", field:"dni", align:"left"},
            {title:"Puesto", field:"position"},
            {title:"Estado", field:"state", align:"center"},
            {title:"Nivel", field:"level", align:"center"},
            
            {
                title:"Editar", align:"center", field:"filePath",
                formatter: function(){
                    
                    return "<button>Editar</button>" ; 
                },
                cellClick: function(e,cell){

                    that.showCloseModal(cell,that.section);
                 
                    
                }
            }
        ];
        
    }
    
    render () {
        return `
        <div class="content">
            <div class="sectionTitle"><h2> TRABAJADORES</h2></div>
            ${this.loading ? `<div class="spinner">
            <img src="./assets/img/spinner.gif"></div>` :
            `<div class="tabulatorTable"></div>`}
            <button class="newWorker">Nuevo trabajador</button>
           
            
        </div>  
        `
    }
    
    afterMount () {
        this.drawTable();
        database.getWorkerKey('Fernando Flores');
    }

    addEventListeners () {
        this.query('.newWorker').addEventListener('click', () => this.showCloseModal(null,this.section)); 
    }

    drawTable(){
        this.loading = true;
        this.refreshView();
        // window.app.viewManager.showView(new CreateDocModal(), 'app-modal')
        database.readDataSnapshot(this.section).then(data => {
            this.loading = false;
            this.refreshView();
            let table = new Tabulator(".tabulatorTable", {
                height:false, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
                data:this.dataFormat(data), //assign data to table
                layout:"fitColumns", //fit columns to width of table (optional)
                columns:this.columns,
            });
          
        });
        this.remove;
    }

    

    dataFormat(data){
        let filteredData=[];
        
        for (let property in data){
            if(property!='userPhotoUrl'){
                data[property].key = property;
                filteredData.push(data[property])
            }
        }
        
        return filteredData;
    }

    showCloseModal(cell,modalType){
        
        let modal = new Modal(cell,modalType);
        window.app.viewManager.showView(modal,'modal');
        modal.onClose.then((success) => {
            if (success) {
                this.drawTable();
            }
        });
    }
}

    


