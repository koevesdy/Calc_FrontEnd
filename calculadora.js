const btn_Suma= document.getElementById("suma");
const btn_Resta = document.getElementById("resta");
const btn_Multiplicacion = document.getElementById("multiplicacion");
const btn_Division = document.getElementById("division");
const div_resultado = document.getElementById("resultado")

//Oidor +
btn_Suma.addEventListener("click",
    async (event)=>{
        event.preventDefault(); 
        console.log(event);
        const numero_1 = parseFloat( document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        console.log(JSON.stringify({numero_1,numero_2}));
        const respuesta = await fetch(
            'http://localhost:5500/api/suma',
            {
                "method": "POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2}),
            }
        );
        const dato =await  respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;
});

//Oidor -
btn_Resta.addEventListener("click",
    async (event)=>{
        event.preventDefault(); 
        console.log(event);
        const numero_1 = parseFloat( document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        console.log(JSON.stringify({numero_1,numero_2}));
        const respuesta = await  fetch(
            'http://127.0.0.1:5500/api/resta',
            {
                "method": "POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2}),
            }
        );
        const dato =await  respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;
});

//Oidor *
btn_Multiplicacion.addEventListener("click",
    async (event)=>{
        event.preventDefault(); 
        console.log(event);
        const numero_1 = parseFloat( document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        console.log(JSON.stringify({numero_1,numero_2}));
        const respuesta = await  fetch(
            'http://127.0.0.1:5500/api/multiplicacion',
            {
                "method": "POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2}),
            }
        );
        const dato =await  respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;
});

//Oidor /
btn_Division.addEventListener("click",
    async (event)=>{
        event.preventDefault(); 
        console.log(event);
        const numero_1 = parseFloat(document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        console.log(JSON.stringify({numero_1,numero_2}));
        const respuesta = await  fetch(
            'http://127.0.0.1:5500/api/division',
            {
                "method": "POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2}),
            }
        );
        const dato =await  respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;
});


