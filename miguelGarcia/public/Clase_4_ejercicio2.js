


function tiempoLog(){
    console.time();
    console.log("Este mensaje ha tardado en generarse:"); 
    console.timeEnd();
}
function tiempoInfo(){
    console.time();
    console.info("Esta info ha tardado en generarse:");
    console.timeEnd();
    }

function tiempoWarn(){
    console.time();
    console.warn("Este aviso ha tardado en generarse");
    console.timeEnd();
        }  
