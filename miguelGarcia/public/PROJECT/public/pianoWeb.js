(function () {

    window.onload = function () {
        renderPiano(); 
    }

    // renderiza una octava

    function renderOctava(octava, keyIndex) {
        var piano = document.getElementById('piano');
        var index = keyIndex;

        notes = [
            { note: 'c', type: 'white' },
            { note: 'c#', type: 'black' },
            { note: 'd', type: 'white' },
            { note: 'd#', type: 'black' },
            { note: 'e', type: 'white' },
            { note: 'f', type: 'white' },
            { note: 'f#', type: 'black' },
            { note: 'g', type: 'white' },
            { note: 'g#', type: 'black' },
            { note: 'a', type: 'white' },
            { note: 'a#', type: 'black' },
            { note: 'b', type: 'white' }
        ] 

        for(var tecla = 0 ; tecla < 12 ; tecla++) {
            
            var key = document.createElement('div');
            var bc = document.createElement('div');
            bc.setAttribute('class','blackKeyContainer');
            key.setAttribute('data-note',notes[tecla].note + octava);
            key.setAttribute('class',notes[tecla].type);
            key.setAttribute('data-number', index)

            if (key.getAttribute('class') === 'white') {
                piano.appendChild(key);
            }

            if (notes[tecla].type === 'black') {
                piano.appendChild(bc);
                bc.appendChild(key); 
            }

            index++;
        }
    }

    function renderPiano(){
        var initialKeyIndex = 24;

        for (octava = 0 ; octava < 7 ; octava++){
            renderOctava(octava, initialKeyIndex);
            initialKeyIndex += 12;
        }
        
        // añadir event listener al piano
        piano.addEventListener('mousedown', evenHandler);
        piano.addEventListener('mouseup', evenHandler);
        piano.addEventListener('mouseout', evenHandler);
    }

    function evenHandler(evento) {
        evento.preventDefault;
        
        if (evento.type === 'mousedown' && evento.target.getAttribute('class') === 'black'){
            webAudioMachine(midiNoteToFrequency(evento.target.getAttribute('data-number')));
            evento.target.setAttribute('class','blackDown') ; 

        } else if ((evento.type === 'mouseup' || evento.type === 'mouseout') && evento.target.getAttribute('class') === 'blackDown'){
            evento.target.setAttribute('class','black') ; 

        } else if (evento.type === 'mousedown' && evento.target.getAttribute('class') === 'white'){
            webAudioMachine(midiNoteToFrequency(evento.target.getAttribute('data-number')));
            evento.target.setAttribute('class','whiteDown') ;  

        } else if ((evento.type === 'mouseup' || evento.type === 'mouseout') && evento.target.getAttribute('class') === 'whiteDown'){
            evento.target.setAttribute('class','white') ;   
        }
    }


    function webAudioMachine(frec){
        // Contenedor del sonido

        var context = new AudioContext();

        // creo un oscilador dentro del contenedor

        var oscillator = context.createOscillator();

        // delay

        delay = context.createDelay(5.0);

        // crear nodo de ganancia

        var gainNode = context.createGain();
        
        //ganancia
        gainNode.gain.setValueAtTime(0, context.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);
    
        // conectar el oscilador al GAIN

        oscillator.connect(delay);
        delay.connect(gainNode);

        // conectar el gainNode a los altavoces

        gainNode.connect(context.destination);


        // frecuencia de la nota:

        oscillator.frequency.setValueAtTime(frec,context.currentTime);

        // encendemos el oscilador para que reproduzca la nota

        oscillator.start();

        //tipo de onda
        oscillator.type = 'sine';

        // duracion de la nota en segundos
        lenghtNote = 1;

        //apagar el oscilador

        oscillator.stop(context.currentTime + lenghtNote);
    
    }


    // MIDI

    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess()
        .then((midi) => {
            var inputs = midi.inputs.values();

            for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
                // llama a onMIDIMessage cuando hay un mensaje midi
                input.value.onmidimessage = onMIDIMessage;
            }
        
            console.log('Got midi!', midi.inputs.values());
        })
        .catch(() => {
            console.error('No access to your midi devices.')
        });
    }

    function onMIDIMessage (message) {  
        var frequency = midiNoteToFrequency(message.data[1]);

        if (message.data[0] === 144 && message.data[2] > 0) {
            webAudioMachine(frequency);
        }
    }

    //funcion para trasformar el numero de nota (midi) a una frecuencia

    function midiNoteToFrequency (note) {
        return Math.pow(2, ((note - 69) / 12)) * 440;
    }

    //   IMSLP API

    // traer listado de trabajos
    // nodos del dom
    imslp = document.getElementById('imslp');
    spinner = document.createElement('img');
    spinner.setAttribute('src','loader.gif');
    spinner.setAttribute('class','spinner');
    // campo para introducir la busqueda

    var button = document.getElementById('search');

    button.addEventListener('click',() => {
        var nombreObra = document.getElementById('input').value;

        if (nombreObra) {
            buscarObras(nombreObra);
        }
    });

    // funcion que hace la llamada Ajax y a la funcion que renderiza resultados, 
    // a la que pinta el spinner, etc... 

    function buscarObras (nombreObra) {

        // mostrar spinner

        var prev = document.querySelector('.contenedor-obras');

        if (prev) prev.remove();
        
        imslp.appendChild(spinner);

        getWorks(nombreObra, 0)
        .then((obras) => {
            // quitar spinner
            imslp.removeChild(spinner);
            // renderizar works
            renderWorks(obras);

        })
    }

    function getWorks(partitura, posicion) {
        
        return fetch('/proxy?url=http://imslp.org/imslpscripts/API.ISCR.php?account=worklist/disclaimer=accepted/sort=id/type=2/start=' + posicion + '/retformat=json')
        .then((response) => {
            return response.json()
        })
        .then((works) => {
            var obras = busqueda(works, partitura);

            if (!obras.length) { 
                return getWorks(partitura, posicion + 1000);
            } else {
                return obras
            }
        })
    }




    function busqueda(obras, partitura){

        var matches = [];
        
        for (i = 0 ; i < 1000 ; i++) {
            if (obras[i].id.toLowerCase().indexOf(partitura) != -1){
                console.log(obras[i].id);
                matches.push(obras[i].id)
            }
        }

        return matches;
    }


    function renderWorks(obras){
        var resultados = document.createElement('div');
        resultados.setAttribute('class', 'contenedor-obras');
        imslp.appendChild(resultados);

        
        // añado cada elemento como un nodo de texto 
        for (var i=0 ; i < obras.length ; i++){
            var resultado = document.createElement('p');
            resultado.setAttribute('class', 'obra');
            resultado.setAttribute('data-name',i)
            var textoObra = document.createTextNode(obras[i])
            resultado.appendChild(textoObra);
            resultados.appendChild(resultado);
        }
    }

})();
