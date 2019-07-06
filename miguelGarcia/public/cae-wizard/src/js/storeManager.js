import toastr from 'toastr';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';


export function inicializefirebase () {
  
    var config = {
      apiKey: "AIzaSyAw_zg3_NZO4VEXDZYMLypf9PM3I3RSVXo",
      authDomain: "myfirebase-magg.firebaseapp.com",
      databaseURL: "https://myfirebase-magg.firebaseio.com",
      projectId: "myfirebase-magg",
      storageBucket: "myfirebase-magg.appspot.com",
      messagingSenderId: "432197009292"
      };
      
    return firebase.initializeApp(config);
    
    }
  

export const database = {

    ref: new Firebase("https://myfirebase-magg.firebaseio.com"),

    get usersRef () {
        
        return this.ref.child('documentManager');
    },
    get newUser () {
        return this.usersRef.child('users');
    },
    get userUid () {
        return this.newUser.child('lumiyiwUodWRJ9vNyVHvducKSJu2');
    },
    get workers () {
        return this.userUid.child('workers');
    },

    getWorkerKey(workerName){
        let orderByNameRef = this.workers.orderByChild('worker').equalTo(workerName);
        orderByNameRef.on("value",(node)=>{
            console.log(node.val());
            
        });

    
    },


    getWorkers(){
        return new Promise(function (resolve){
            let namesOfWorkers = [];
            let dbWorkers = new Promise(function(resolve){
                database.workers.once("value", snapshot => {
                    resolve(snapshot.val());  
                })  
            });
            dbWorkers.then(data =>{    
                for (let key in data){
                        namesOfWorkers.push({ ...data[key], workerKey: key });
                }
            resolve(namesOfWorkers);
            });
        });
          
    },
    readDataSnapshot(section) { 
        
      return new Promise(function(resolve){
        let dbSection = database.userUid.child(section)
        dbSection.once("value", snapshot => {
            resolve(snapshot.val());  
        })  
      });
    },
    writeData(data,section,file){
        if(file){
            data.filePath = file.location.path_;
            data.Archivo = file.name ;
        }
        let newDocumentKey = this.userUid.child(section).push(data).key();
        this.userUid.child(section).child(newDocumentKey).update(
            {
                key: newDocumentKey
            }
        )
            
        toastr.success('Datos añadidos ');
    },
    updateData(key,data,section){
        
        let updates = {};
        updates[key] = data;
        let databaseRef = this.userUid.child(section);
        databaseRef.update(updates);
        toastr.success('Datos actualizados ');
    },
    deleteDocument(key,section){
        let docToRemove = this.userUid.child(section).child(key);
        docToRemove.remove();
        toastr.success('Documento eliminado');
    },
    writeUserUrl(photoUrl){
        this.userUid.set({
            userPhotoUrl: photoUrl
        });


    }
}




export const storage = { 


    
    loadFile(file,metadata,section){
        return new Promise(function(resolve){
            const firebaseStorage = firebase.storage();
            let storageRef = firebaseStorage.ref();
            let newFileCharged = storageRef.child(file.name);
            let newFileRef = storageRef.child('documents/' + file.name);
            if (metadata){
                database.writeData(metadata,section,newFileRef);
            }

            newFileRef.put(file)
            .then(()=>{
                toastr.success('Archivo guardado');
                resolve (newFileRef);
            })
            .catch((error)=>{
                toastr.error(error.message);
                
                });
          
        })
    },

    downloadFile(fileRef){
        return new Promise(function (resolve){
            const firebaseStorage = firebase.storage();
            let fileToDownload = firebaseStorage.ref(fileRef);
            fileToDownload.getDownloadURL().then(function(downloadUrl){
            resolve (downloadUrl);
            })
        })
    },

    deleteFile(filePath){
        const firebaseStorage = firebase.storage();
        let fileToDelete = firebaseStorage.ref(filePath);
        fileToDelete.delete()
        .then((success)=>{
            toastr.success('Archivo eliminado');
            
        })
        .catch((error)=>{
            toastr.error(error.message);
            
            });
        
    }
}
