//NAV BAR BURGER

let boton_nav = document.querySelector('.navbar-burger');
let nav_menu = document.querySelector('.navbar-menu');

boton_nav.addEventListener('click', function() {
	nav_menu.classList.toggle('is-active');
});


//TITULO DE LA PAGINA ANIMADO
$(document).ready(function(){
    $('#title').slideDown(2000, function(){
        $("#title").animate({fontSize: '50px'}
        , 2000, function(){
            $('#subtitle').fadeIn('slow');
        });
    })
  }); 


//CERRAR MODALES

$('.modal-close').click (function(){
    window.location.reload();
});


//ABRIR MODAL 1 (AMBULANCIA) 


$('#show-modal-ambulancia').click (function(){
    $('#modal-ambulancia').addClass('is-active');
    $('#modal-ambulancia').toggle('slow');
})



//COMPLETAR LA DIRECCION Y ENVIAR AMBULANCIA 

$('#validar-direc').click (function(){
    $('#modal-esperar-ambulancia').addClass('is-active');
    setTimeout (function(){
        $('#modal-envio-ambulancia').addClass('is-active');
    }
    ,3000)

})


//CANCELAR ENVIO DE LA AMBULANCIA

$('#cancelar-ambulancia').click (function(){
    $('#modal-cancelar-ambulancia').addClass('is-active');
});


//ABRIR MODAL 2 (MEDICO A DOMICILIO)

$('#show-modal-medico').click (function(){
    $('#modal-descartar-covid').addClass('is-active')
    $('#modal-descartar-covid').toggle('slow');
});


//EVALUAR SI SE TRATA DE UN CASO COVID
//SI ES COVID, DERIVAR A CENTROS HOSPITALORIOS, SI NO ES COVID CONTINUAR CON EL FORMULARIO

function validarFormulario() {
    let opcion1 = document.getElementById('r1');
  
    let opcion3 = document.getElementById('r3');
  
    let opcion5 = document.getElementById('r5');
  
    let opcion7 = document.getElementById('r7');
  
  
    if(opcion3.checked || opcion5.checked && (opcion1.checked ||opcion3.checked || opcion5.checked || opcion7.checked)) {
  
      $('#modal-covid').addClass('is-active');
      } else {
          $('#modal-form').addClass('is-active');
      };
  };
  

//GUARDAR LOS DATOS EN EL LOCAL STORAGE
let guardarForm1 = document.getElementById('form');
guardarForm1.addEventListener('click', localStorageForm)

function localStorageForm (){

    let nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre', nombre);
    let apellido = document.getElementById('apellido').value;
    localStorage.setItem('apellido', apellido);
    let doc = document.getElementById('doc').value;
    localStorage.setItem('documento', doc);
    let direc = document.getElementById('direc').value;
    localStorage.setItem('direccion', direc);
    let fecha = document.getElementById('fecha').value;
    localStorage.setItem('fecha de nacimiento', fecha);
    let tel = document.getElementById('tel').value;
    localStorage.setItem('numero de telefono', tel);
    let obraSocial = document.getElementById('obra-social').value;
    localStorage.setItem('obra social', obraSocial);

    //CONTINUAR AL SIGUIENTE MODAL

    let confirmarDatos = document.getElementById ('modal-confirmar-datos');
    confirmarDatos.classList.add('is-active');

    //MOSTRAR LOS DATOS PARA CONFIRMAR SI SON CORRECTOS

    let nuevoNombre = document.getElementById('check-n');
    nuevoNombre.innerHTML = `Nombre: ${localStorage.getItem('nombre')}`;
    
    let nuevoApellido = document.getElementById('check-a');
    nuevoApellido.innerText = `Apellido: ${localStorage.getItem('apellido')}`;
    
    let nuevoDoc = document.getElementById('check-doc');
    nuevoDoc.innerText = `Número de documento: ${localStorage.getItem('documento')}`;
    
    let nuevoDirec = document.getElementById('check-dir');
    nuevoDirec.innerText = `Dirección: ${localStorage.getItem('direccion')}`;
    
    let nuevoFecha = document.getElementById('check-f');
    nuevoFecha.innerText = `Fecha de nacimiento: ${localStorage.getItem('fecha de nacimiento')}`;
    
    let nuevoTel = document.getElementById('check-t');
    nuevoTel.innerText = `Número de teléfono: ${localStorage.getItem('numero de telefono')}`;
    
    let nuevoObra = document.getElementById('check-o');
    nuevoObra.innerText = `Obra social: ${localStorage.getItem('obra social')}`;
};

//SI LOS DATOS NO SON CORRECTOS, MODIFICARLOS

$('#datos-incorrectos').click (function(){
    $('#modal-confirmar-datos').removeClass('is-active');

})


//SI LOS DATOS SON CORRECTOS, ELEGIR AREA MEDICA

$('#datos-correctos').click (function(){
    $('#modal-areas').addClass('is-active');
});


// AL ELEGIR EL AREA MEDICA, SE DESPLIEGA EL MEDICO DISPONIBLE PARA IR AL DOMICILIO (OBTENIDO DE MANERA RANDOM)

let clinico = document.getElementById('clinico');
clinico.addEventListener('click', mostrarClinico)

function mostrarClinico() {
    let modalEsp = document.getElementById('modal-especialistas');
    modalEsp.classList.add ('is-active');
    
    const medico = ["Susana Martinez M.3852", "Mario Borgi M.8231", "Constanza Gomez M.5309"];
    const random = Math.floor(Math.random() * medico.length);
    let medicoRandom = document.createElement('p');
    medicoRandom.innerHTML = `El especialista en clínica, ${medico[random]} te visitará en tu casa en la próxima media hora!`
    let contenedorEspecialista = document.getElementById('contenedor-especialistas');
    contenedorEspecialista.appendChild(medicoRandom);
    medicoRandom.classList.add ('esp-domicilio');

};

let gastro = document.getElementById('gastro');
gastro.addEventListener('click', mostrarGastro)

function mostrarGastro() {
    let modalEsp = document.getElementById('modal-especialistas');
    modalEsp.classList.add ('is-active');
    
    const medico = ["Agustina Ochatti M.1124", "Sebastian Aguero M.5655", "Esteban Espinola M.9087"];
    const random = Math.floor(Math.random() * medico.length);
    let medicoRandom = document.createElement('p');
    medicoRandom.innerHTML = `El especialista en gastroenterología, ${medico[random]} te visitará en tu casa en la próxima media hora!`
    let contenedorEspecialista = document.getElementById('contenedor-especialistas');
    contenedorEspecialista.appendChild(medicoRandom);
    medicoRandom.classList.add ('esp-domicilio');

};

let pisq = document.getElementById('psiq');
psiq.addEventListener('click', mostrarPsiq)

function mostrarPsiq() {
    let modalEsp = document.getElementById('modal-especialistas');
    modalEsp.classList.add ('is-active');

    const medico = ["Ana Peralta M.6574", "Ignacio Falconi M.3977", "Sofia Nobile M.4456"];
    const random = Math.floor(Math.random() * medico.length);
    let medicoRandom = document.createElement('p');
    medicoRandom.innerHTML = `El especialista en psiquiatría, ${medico[random]} te visitará en tu casa en la próxima media hora!`
    let contenedorEspecialista = document.getElementById('contenedor-especialistas');
    contenedorEspecialista.appendChild(medicoRandom);
    medicoRandom.classList.add ('esp-domicilio');

};

let neuro = document.getElementById('neuro');
neuro.addEventListener('click', mostrarNeuro)

function mostrarNeuro() {
    let modalEsp = document.getElementById('modal-especialistas');
    modalEsp.classList.add ('is-active');

    const medico = ["Sergio Posadas M.6593", "Daniel Petrusa M.8003", "Andrea Gonsalez M.1243", "Susana Benitez M.7825"];
    const random = Math.floor(Math.random() * medico.length);
    let medicoRandom = document.createElement('p');
    medicoRandom.innerHTML = `El especialista en neurología, ${medico[random]} te visitará en tu casa en la próxima media hora!`
    let contenedorEspecialista = document.getElementById('contenedor-especialistas');
    contenedorEspecialista.appendChild(medicoRandom);
    medicoRandom.classList.add ('esp-domicilio');

};

let ped = document.getElementById('ped');
ped.addEventListener('click', mostrarPed)

function mostrarPed () {
    let modalEsp = document.getElementById('modal-especialistas');
    modalEsp.classList.add ('is-active');

    const medico = ["Santiago Lopez M.2190", "Federico Puerta M.1134", "Camila Aguirre M.8732"];
    const random = Math.floor(Math.random() * medico.length);
    let medicoRandom = document.createElement('p');
    medicoRandom.innerHTML = `El especialista en pediatría, ${medico[random]} te visitará en tu casa en la próxima media hora!`
    let contenedorEspecialista = document.getElementById('contenedor-especialistas');
    contenedorEspecialista.appendChild(medicoRandom);
    medicoRandom.classList.add ('esp-domicilio');

};

let trau = document.getElementById('trau');
trau.addEventListener('click', mostrarTrau) 

function mostrarTrau () {
    let modalEsp = document.getElementById('modal-especialistas');
    modalEsp.classList.add ('is-active');

    const medico = ["Rocio Toreso M.1325", "Cristina Orias M.7863"];
    const random = Math.floor(Math.random() * medico.length);
    let medicoRandom = document.createElement('p');
    medicoRandom.innerHTML = `El especialista en traumatología, ${medico[random]} te visitará en tu casa en la próxima media hora!`
    let contenedorEspecialista = document.getElementById('contenedor-especialistas');
    contenedorEspecialista.appendChild(medicoRandom);
    medicoRandom.classList.add ('esp-domicilio');

};

let cardio = document.getElementById('cardio');
cardio.addEventListener('click', mostrarCardio) 

function mostrarCardio () {
    let modalEsp = document.getElementById('modal-especialistas');
    modalEsp.classList.add ('is-active');

    const medico = ["Pilar Ferreyra M. 3453", "Sabrina Estevez M.4218", "Marcelo Suarez M.9214"];
    const random = Math.floor(Math.random() * medico.length);
    let medicoRandom = document.createElement('p');
    medicoRandom.innerHTML = `El especialista en cardiología, ${medico[random]} te visitará en tu casa en la próxima media hora!`
    let contenedorEspecialista = document.getElementById('contenedor-especialistas');
    contenedorEspecialista.appendChild(medicoRandom);
    medicoRandom.classList.add ('esp-domicilio');

};

//CANCELAR MEDICO A DOMICILIO

$('#cancelar-medico').click (function(){
    $('#modal-cancelar-medico').addClass('is-active');
});


//ABRIR MODAL 3 MEDICO ONLINE

$('#show-modal-online').click(function(){
    $('#modal-atencion-online').addClass('is-active');
    $('#modal-atencion-online').toggle('slow');
});



    // MODAL ATENCION MEDICA ONLINE (PREGUNTAR EL AREA DE INTERES)
    function Especialista (id,nombre,apellido,especialidad, turno) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.turno = turno;
    };
    const especialista1 = new Especialista ('1','Lucía', 'Allende','Clínica', '09:00');
    const especialista2 = new Especialista ('2','Florencia', 'Sandoni', 'Gastroenterología', '10:30');
    const especialista3 = new Especialista ('3','Sergio', 'Gutierrez', 'Psiquiatría', '14:00');
    const especialista4 = new Especialista ('4','Camila', 'Toreso','Neurología', '17:00');
    const especialista5 = new Especialista ('5','Augusto', 'Santos', 'Pediatría', '11:20');
    const especialista6 = new Especialista ('6','Consuelo', 'Ferreyra','Traumatología', '10:15');
    const especialista7 = new Especialista ('7','Nicolas', 'Torresan','Cardiología', '18:30');
    
    const arrayEsp = [especialista1, especialista2, especialista3, especialista4, especialista5, especialista6, especialista7];
    
    localStorage.setItem('especialista1', JSON.stringify(especialista1));
    localStorage.setItem('especialista2', JSON.stringify(especialista2));
    localStorage.setItem('especialista3', JSON.stringify(especialista3));
    localStorage.setItem('especialista4', JSON.stringify(especialista4));
    localStorage.setItem('especialista5', JSON.stringify(especialista5));
    localStorage.setItem('especialista6', JSON.stringify(especialista6));
    localStorage.setItem('especialista7', JSON.stringify(especialista7));
    
    for (let i = 0; i < arrayEsp.length; i++) {
        let nuevoDiv = document.createElement('li');
        nuevoDiv.textContent = `${arrayEsp[i].id}) ${arrayEsp[i].especialidad}: ${arrayEsp[i].nombre} ${arrayEsp[i].apellido} próximo turno online disponible: ${arrayEsp[i].turno}`;
        divContenedor = document.getElementById('cont');
        nuevoDiv.classList.add('lista');
        divContenedor.appendChild(nuevoDiv);
    };

//ABRIR MODAL CHAT

$('#continue').click (function(){
    $('#modal-chat').addClass('is-active');
    $('#modal-atencion-online').removeClass('is-active');

    setTimeout(function(){ 
        $('#open-button').removeAttr('disabled');
        $('#open-button').addClass('is-info');
        $('#open-button').addClass('is-large');
    }, 5000);
});

$('#open-button').click(function(){
    $('#modal-chat-ready').addClass('is-active');
    $('#modal-chat').removeClass('is-active');
    $('#myForm').css("display","block");
});

$('#close-button').click(function(){
    $('#myForm').css("display","none");
    window.location.reload();
});

let botonEnviar = document.getElementById('enviar-msj');
botonEnviar.addEventListener('click', function(){
    let mensaje = document.getElementById('msj').value;
    localStorage.setItem('mensaje', mensaje);
    setTimeout(function(){ 
        let mensajeEspera = document.createElement('p');
        mensajeEspera.textContent = 'Aguarde un momento porfavor';
        mensajeEspera.classList.add('contenedor-msj')
        let contenedorMsj = document.getElementById('contenedor-msj');
        contenedorMsj.appendChild(mensajeEspera);
    }, 2000);
})


//CANCELAR CHAT
$('#cancel').click(function(){
    $('#modal-cancelar-chat').addClass('is-active');
});
