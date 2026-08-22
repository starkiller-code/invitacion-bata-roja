document.addEventListener("DOMContentLoaded", function () {

    const tarjeta = document.querySelector(".tarjeta");

    document
        .getElementById("comenzar")
        .addEventListener("click", preguntaUno);



    function preguntaUno() {

        tarjeta.innerHTML = `
            <div class="emoji">📝</div>

            <h1>Pregunta 1 👀</h1>

            <p>
                ¿Estás dispuesta a ayudarme con mi tarea?
            </p>

            <div class="botones">
                <button id="si1">SÍ 😇</button>
                <button id="no1">NO 💔</button>
            </div>
        `;

        configurarBotones(
            "si1",
            "no1",
            preguntaDos
        );
    }




    function preguntaDos() {

        tarjeta.innerHTML = `
            <div class="emoji">🤔</div>

            <h1>Pregunta 2</h1>

            <p>
                Prometo que esta tarea es muy importante,
                puede cambiar tu vida...
            </p>

            <p>
                ¿Quieres continuar?
            </p>

            <div class="botones">
                <button id="si2">SÍ 😏</button>
                <button id="no2">NO 🙈</button>
            </div>
        `;

        configurarBotones(
            "si2",
            "no2",
            preguntaFinal
        );
    }


    function preguntaFinal() {

        tarjeta.innerHTML = `
            <div class="emoji">❤️</div>

            <h1>La pregunta final...</h1>

            <p>
                Bueno, Chica de Bata Roja...
            </p>

            <p>
                En realidad esta no era una tarea normal. 😏
            </p>

            <p>
                <strong>
                    ¿Quieres salir conmigo?
                </strong>
            </p>

            <div class="botones">
                <button id="siFinal">
                    SÍ ❤️
                </button>

                <button id="noFinal">
                    NO 🙈
                </button>
            </div>
        `;

        configurarBotones(
            "siFinal",
            "noFinal",
            aceptar,
            rechazar
        );
    }




    function configurarBotones(
        idSi,
        idNo,
        funcionSi,
        funcionNo = null
    ) {

        const botonSi =
            document.getElementById(idSi);

        const botonNo =
            document.getElementById(idNo);

        let intentosNo = 0;

        let tamaño = 1;


        botonNo.addEventListener("click", function () {

            intentosNo++;


      

            if (intentosNo >= 3 && funcionNo) {

                funcionNo();

                return;
            }

            tamaño += 0.15;

            botonSi.style.transform =
                `scale(${tamaño})`;

            const x =
                Math.random() * 80 - 40;

            const y =
                Math.random() * 40 - 20;

            botonNo.style.transform =
                `translate(${x}px, ${y}px)`;




            const mensajes = [

                "¿Segura? 👀",

                "Piénsalo otra vez 😏"

            ];

            botonNo.textContent =
                mensajes[intentosNo - 1];

        });


        botonSi.addEventListener(
            "click",
            funcionSi
        );

    }


    function aceptar() {

        tarjeta.innerHTML = `

            <div class="emoji">
                🎉
            </div>

            <h1>
                Aprueba mis SOP PORFA
                y te doy una pizza ❤️
            </h1>

            <p>
                Bueno, continuando con la tarea 😏
            </p>

            <p>
                Ahora viene la parte importante...
            </p>

            <p>
                <strong>
                    Elige nuestra aventura:
                </strong>
            </p>


            <div class="planes">

                <button
                    class="plan"
                    data-plan="Cena 🍽️"
                >
                    🍽️ Cena

                    <small>
                        PIZZA / SUSHI / PASTA
                    </small>
                </button>


                <button
                    class="plan"
                    data-plan="Cine 🎬"
                >
                    🎬 Cine

                    <small>
                        Spider-Man / Toy Story /
                        lo que te guste 😅
                    </small>
                </button>


                <button
                    class="plan"
                    data-plan="Parque 🌳"
                >
                    🌳 Parque

                    <small>
                        Algo tranqui
                    </small>
                </button>


                <button
                    class="plan"
                    data-plan="Planetario 🌌"
                >
                    🌌 Planetario

                    <small>
                        Una aventura entre estrellas
                    </small>
                </button>

            </div>
        `;




        document
            .querySelectorAll(".plan")
            .forEach(function (boton) {

                boton.addEventListener(
                    "click",
                    function () {

                        const planElegido =
                            this.dataset.plan;

                        mostrarCalendario(
                            planElegido
                        );

                    }
                );

            });

    }




    function mostrarCalendario(plan) {

        tarjeta.innerHTML = `

            <div class="emoji">
                📅
            </div>

            <h1>
                Ahora viene el calendario ❤️
            </h1>

            <p>
                Elegiste:
            </p>

            <p>
                <strong>
                    ${plan}
                </strong>
            </p>

            <p>
                ¿Qué día te gustaría?
            </p>


            <input
                type="date"
                id="fecha"
            >


            <button
                id="confirmarFecha"
            >
                Confirmar fecha ❤️
            </button>

        `;


        document
            .getElementById("confirmarFecha")
            .addEventListener(
                "click",
                function () {

                    const fecha =
                        document
                            .getElementById("fecha")
                            .value;


                    if (!fecha) {

                        alert(
                            "Primero elige una fecha 😏"
                        );

                        return;
                    }


                    mostrarConfirmacion(
                        plan,
                        fecha
                    );

                }
            );

    }




function mostrarConfirmacion(plan, fecha) {

    const partes = fecha.split("-");

    const fechaBonita =
        `${partes[2]}/${partes[1]}/${partes[0]}`;

    tarjeta.innerHTML = `

        <div class="emoji">
            💕
        </div>

        <h1>
            ¡Cita desbloqueada! 🎉
        </h1>

        <p>
            Bueno, Muchacha de Bata Roja...
        </p>

        <p>
            Parece que tenemos una cita 😏❤️
        </p>

        <div class="resumen">

            <p>
                🎯 <strong>Plan:</strong><br>
                ${plan}
            </p>

            <p>
                📅 <strong>Fecha:</strong><br>
                ${fechaBonita}
            </p>

        </div>

        <p>
          . ❤️
        </p>

        <button id="confirmacion">
            💌 Mandar la confirmación
        </button>

        <p id="mensajeFinal"
           style="display:none; margin-top:20px;">
            ❤️ ¡Perfecto! avisa al encargado...no medio tiempo de hacer la base de datos asi que mandame la confirmacion con una foto o dime, jajaja 😏
        </p>

    `;

    document
        .getElementById("confirmacion")
        .addEventListener("click", function () {

            this.textContent = "✅ Confirmación lista";

            this.disabled = true;

            document
                .getElementById("mensajeFinal")
                .style.display = "block";

        });
}


    function rechazar() {

        tarjeta.innerHTML = `

            <div class="emoji">
                😂
            </div>

            <h1>
                Bueno... 😅
            </h1>

            <p>
                Mi corazón acaba de recibir
                <strong>-10 de daño</strong> 💔
            </p>

            <p>
                Pero gracias por ser sincera
                conmigo ❤️
            </p>

            <p>
                Ya no te molesto...
            </p>

        `;

    }

});
