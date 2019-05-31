// for webpack use
import Tabulator from 'tabulator-tables';
import toastr from 'toastr';

//////////////////////////////////


import { View } from './view.js';
import { storage } from './storeManager.js';
import { database } from './storeManager.js';
import { Modal } from './modal.js';
import { ViewManager } from './view-manager.js';


export class Mydocs extends View {
    constructor () {
        super();
        this.loading = false;
        const that = this;
        this.workers = [];
        this.section = 'docs';
        this.columns = [ //Define Table Columns
            {title:"Documento", field:"Documento", width:150},
            {title:"Tipo de documento", field:"Tipo de documento", align:"left"},
            {title:"Asociado a ", field:"Asociado a",
                formatter:function(cell){
                    for(let i = 0 ; i < that.workers.length ; i++){
                        if (cell.getValue() === that.workers[i].workerKey){
                            return that.workers[i].worker;
                        }
                    }
                }
                
            },
            {title:"Fecha del documento", field:"Fecha del documento", sorter:"date", align:"center"},
            {title:"Tiempo para que expire", field:"Tiempo para que expire", sorter:"date", align:"center"},
            {title:"Archivo", field:"Archivo", sorter:"date", align:"center"},
            {
                title:"Editar", align:"center", field:"filePath",
                formatter: function(){
                    //cell - the cell component
                    //formatterParams - parameters set for the column
                    //onRendered - function to call when the formatter has been rendered
                    return "<button>Editar</button>" ; //return the contents of the cell;
                },
                cellClick: function(e, cell){
                    
                    that.showCloseModal(cell,that.section,that.workers);
                    
                }
            }
        ];
        
    }
    
    render () {
        return `
        <div class="content">
            <div class="sectionTitle"><h2> MIS DOCUMENTOS</h2></div>
            ${this.loading ? `<div class="spinner">
            <img src="./assets/img/spinner.gif"></div>` :
            `<div class="tabulatorTable"></div>`}
            <button class="loadFile">Cargar nuevo archivo</button>
           
            
        </div>  
        `
    }
    
    afterMount () {
        database.getWorkers().then((workers) => {
            this.workers = workers;
            this.drawTable(this.workers);
        });
        

    }

    addEventListeners () {
        this.query('.loadFile').addEventListener('click', () => this.showCloseModal(null,this.section,this.workers)); 
    }

    fileEventHandler(event){
        let file = event.target.files[0];
        let metadata = {
            'Documento': document.querySelector('.newDocumentName').value,
            'Tipo de documento': document.querySelector('.newDocumentType').value,
            'Asociado a': document.querySelector('.newDocumentLink').value,
            'Fecha del documento': document.querySelector('.newDocumentDate').value,
            'Tiempo para que expire': document.querySelector('.newDocumentExpire').value
        }
        storage.loadFile(file,metadata).then(()=>this.drawTable(this.workers));
        
    }

    drawTable(workers){
        this.loading = true;
        this.refreshView();
        let name;
        database.readDataSnapshot(this.section).then(data => {
            this.loading = false;
            this.refreshView();
            let table = new Tabulator(".tabulatorTable", {
                height:false, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
                data:this.dataFormat(data), //assign data to table
                layout:"fitColumns", //fit columns to width of table (optional)
                columns:this.columns,
                groupBy:'Asociado a'
            });
            table.setGroupHeader(function(value, count, data, group){
               
                workers.forEach((item)=> {
                    if (item.workerKey === value){name = item.worker}
                });
                return name ; //all groups with more than three rows start open, any with three or less start closed
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

    showCloseModal(cell,modalType,workers){
        let modal = new Modal(cell,modalType,workers);
        window.app.viewManager.showView(modal,'modal');
        modal.onClose.then((success) => {
            if (success) {
                this.drawTable(this.workers);
            }
        });
    }
}

/*
let changes = database.userUid.on("value", snapshot => {
        toastr.success('La base de datos ha cambiado');
   
    });
*/