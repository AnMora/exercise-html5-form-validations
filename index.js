/*MODO ESTRICTO*/
'use strict';
console.log('Formulario con validacion de informacion');

window.addEventListener('load', function () {

    var objMuestraError = document.querySelector('#MuestraError');
    objMuestraError.style.display = "none";

    var getForm = document.querySelector('#Formulario');

    var CajaMuestra = document.querySelector('#CajaMuestra');
    CajaMuestra.style.display = "none";

    getForm.addEventListener('submit', function () {
        console.log('Validando datos...');

        /*REGEX de Validacion*/
        /*REGEX de Validacion*/
        /*REGEX de Validacion*/
        let cardRegex = /^([0-9])*$/;
        let regex = /^[0-9]{3,4}$/;
        let nameVal = /^[a-zA-Z]+[a-zA-Z]+$/;
        let nameCity = /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/;
        let mountRegex = /^\d*\.?\d*$/;
        /*REGEX de Validacion*/

        /*Variables para el formulario*/
        /*Variables para el formulario*/
        /*Variables para el formulario*/
        let Card = document.querySelector('#Card').value;
        let CVC = document.querySelector('#CVC').value;
        let Amount = document.querySelector('#Amount').value;
        let FirstName = document.querySelector('#FirstName').value;
        let LastName = document.querySelector('#LastName').value;
        let City = document.querySelector('#City').value;
        let PostalCode = document.querySelector('#PostalCode').value;
        let Message = document.querySelector('#Message').value;
        /*Variables para el formulario*/

        /*Variable para el ERROR*/
        var strError = document.querySelector('#MuestraError strong');
        /*Variable para el ERROR*/

        /*Comienzo de validacion*/
        /*Comienzo de validacion*/
        /*Comienzo de validacion*/

        /*COMIENZO DE VALIDACION DE CARD*/
        /*COMIENZO DE VALIDACION DE CARD*/
        /*COMIENZO DE VALIDACION DE CARD*/
        if (!cardRegex.test(Card)) {
            alert('El numero de tarjeta no es valido');
            document.querySelector('#MuestraError').innerHTML = 'Los datos ingresados son incorrectos, se mostrarán solo los ingresados correctamente';
            console.log('El numero de tarjeta no es valido, favor corregirlo');
            objMuestraError.style.display = "block";
        } else {
            var pCard = document.querySelector('#pCard span');
            pCard.innerHTML = Card;
        }
        /*COMIENZO DE VALIDACION DE CVC*/
        /*COMIENZO DE VALIDACION DE CVC*/
        /*COMIENZO DE VALIDACION DE CVC*/
        if (!regex.test(CVC)) {
            alert('El numero PIN de la tajerta no es valido');
            document.querySelector('#MuestraError').innerHTML = 'Los datos ingresados son incorrectos, se mostrarán solo los ingresados correctamente';
            console.log('El numero PIN de la tarjeta no es valido, favor corregirlo');
            objMuestraError.style.display = "block";
        } else {
            var pCVC = document.querySelector('#pCVC span');
            pCVC.innerHTML = CVC;
        }
        /*COMIENZO DE VALIDACION DE AMOUNT(MONTO QUE SE PEDIRA SACAR)*/
        /*COMIENZO DE VALIDACION DE AMOUNT(MONTO QUE SE PEDIRA SACAR)*/
        /*COMIENZO DE VALIDACION DE AMOUNT(MONTO QUE SE PEDIRA SACAR)*/
        if (!mountRegex.test(Amount)) {
            alert('El monto a solicitar solo permite ingresar numeros y puntos');
            document.querySelector('#MuestraError').innerHTML = 'Los datos ingresados son incorrectos, se mostrarán solo los ingresados correctamente';
            console.log('El monto a solicitar solo permite ingresar numeros y puntos');
            objMuestraError.style.display = "block";
        } else {
            var pAmount = document.querySelector('#pAmount span');
            pAmount.innerHTML = Amount;
        }
        /*VALIDACION DEL NOMBRE*/
        /*VALIDACION DEL NOMBRE*/
        /*VALIDACION DEL NOMBRE*/
        if (!nameVal.test(FirstName) || FirstName.trim() == null || FirstName.trim().length == 0 || isNaN(FirstName) == false) {
            alert('El nombre no es valido');
            document.querySelector('#MuestraError').innerHTML = 'Los datos ingresados son incorrectos, se mostrarán solo los ingresados correctamente';
            console.log('El nombre no es valido, favor corregirlo');
            objMuestraError.style.display = "block";
        } else {
            var pFirstName = document.querySelector('#pFirstName span');
            pFirstName.innerHTML = FirstName;
        }
        /*VALIDACION DEL APELLIDO*/
        /*VALIDACION DEL APELLIDO*/
        /*VALIDACION DEL APELLIDO*/
        if (!nameVal.test(LastName) || LastName.trim() == null || LastName.trim().length == 0 || isNaN(LastName) == false) {
            alert('El apellido no es valido');
            document.querySelector('#MuestraError').innerHTML = 'Los datos ingresados son incorrectos, se mostrarán solo los ingresados correctamente';
            console.log('El apellido no es valido, favor corregirlo');
            objMuestraError.style.display = "block";
        } else {
            var pLastName = document.querySelector('#pLastName span');
            pLastName.innerHTML = LastName;
        }
        /*VALIDACION DEL CIUDAD*/
        /*VALIDACION DEL CIUDAD*/
        /*VALIDACION DEL CIUDAD*/
        if (!nameCity.test(City)) {
            alert('El nombre de ciudad no es correcto');
            document.querySelector('#MuestraError').innerHTML = 'Los datos ingresados son incorrectos, se mostrarán solo los ingresados correctamente';
            console.log('El nombre de ciudad no es correcto');
            objMuestraError.style.display = "block";
        } else {
            var pCity = document.querySelector('#pCity span');
            pCity.innerHTML = City;
        }
        /*COMIENZO DE VALIDACION DE STATE*/
        /*COMIENZO DE VALIDACION DE STATE*/
        /*COMIENZO DE VALIDACION DE STATE*/
        var State = document.querySelector("#State");
        var selectedValue = parseInt(State.options[State.selectedIndex].value);

        switch (selectedValue) {
            case 1:
                var pState = document.querySelector('#pState span');
                pState.innerHTML = "San José";
                break;
            case 2:
                var pState = document.querySelector('#pState span');
                pState.innerHTML = "Heredia";
                break;
            case 3:
                var pState = document.querySelector('#pState span');
                pState.innerHTML = "Limón";
                break;
            case 4:
                var pState = document.querySelector('#pState span');
                pState.innerHTML = "Puntarenas";
                break;
            case 5:
                var pState = document.querySelector('#pState span');
                pState.innerHTML = "Alajuela";
                break;
            case 6:
                var pState = document.querySelector('#pState span');
                pState.innerHTML = "Guanacaste";
                break;
            case 7:
                var pState = document.querySelector('#pState span');
                pState.innerHTML = "Cartago";
                break;
            default:
                alert('Por favor seleccione una provincia');
                break;
        }
        /*COMIENZO DE VALIDACION DE POSTALCODE*/
        /*COMIENZO DE VALIDACION DE POSTALCODE*/
        /*COMIENZO DE VALIDACION DE POSTALCODE*/
        if (!regex.test(PostalCode)) {
            alert('El codigo postal no es valido');
            document.querySelector('#MuestraError').innerHTML = 'Los datos ingresados son incorrectos, se mostrarán solo los ingresados correctamente';
            console.log('El codigo postal no es valido');
            objMuestraError.style.display = "block";
        } else {
            var pPostalCode = document.querySelector('#pPostalCode span');
            pPostalCode.innerHTML = PostalCode;
        }
        /*COMIENZO DE VALIDACION DE WeAcceptCard*/
        /*COMIENZO DE VALIDACION DE WeAcceptCard*/
        /*COMIENZO DE VALIDACION DE WeAcceptCard*/

        /*VALIDACION DEL MENSAJE*/
        /*VALIDACION DEL MENSAJE*/
        /*VALIDACION DEL MENSAJE*/
        if (!nameCity.test(Message)) {
            alert('El mensaje dado no es correcto');
            document.querySelector('#MuestraError').innerHTML = 'Los datos ingresados son incorrectos, se mostrarán solo los ingresados correctamente';
            console.log('El mensaje dado no es correcto');
            objMuestraError.style.display = "block";
        } else {
            var pMessage = document.querySelector('#pMessage span');
            pMessage.innerHTML = Message;
        }

        console.log('Datos: ' + FirstName + ' ' + LastName);

        CajaMuestra.style.display = 'block';
    });
});
