document.addEventListener("DOMContentLoaded", function () {

    const tarjeta = document.querySelector(".tarjeta");

    // =========================
    // PANTALLA INICIAL
    // =========================

    document
        .getElementById("comenzar")
        .addEventListener("click", preguntaUno);


    // =========================
    // PREGUNTA 1
    // =========================

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


    // =========================
    // PREGUNTA 2
    // =========================

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


    // =========================
    // PREGUNTA FINAL
    // =========================

    function preguntaFinal() {

        tarjeta.innerHTML = `
            <div class="emoji">❤️</div>

            <h1>La pregunta final...</h1>

            <p>
                Bueno, Muchacha de Bata Roja...
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


    // =========================
    // BOTONES SÍ / NO
    // =========================

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


            // =========================
            // TERCER NO
            // =========================

            if (intentosNo >= 3 && funcionNo) {

                funcionNo();

                return;
            }


            // =========================
            // HACER CRECER EL SÍ
            // =========================

            tamaño += 0.15;

            botonSi.style.transform =
                `scale(${tamaño})`;


            // =========================
            // MOVER EL NO
            // =========================

            const x =
                Math.random() * 80 - 40;

            const y =
                Math.random() * 40 - 20;

            botonNo.style.transform =
                `translate(${x}px, ${y}px)`;


            // =========================
            // MENSAJES
            // =========================

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


    // =========================
    // ACEPTAR
    // =========================

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


        // =========================
        // SELECCIONAR PLAN
        // =========================

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


    // =========================
    // CALENDARIO
    // =========================

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


    // =========================
    // CONFIRMACIÓN
    // =========================

 function mostrarConfirmacion(plan, fecha) {

    const partes = fecha.split("-");

    const fechaBonita =
        `${partes[2]}/${partes[1]}/${partes[0]}`;

    // Mensaje que llegará por WhatsApp
    const mensaje =
        `❤️ ¡Tarea aprobada!%0A%0A` +
        `Elegí nuestra cita:%0A` +
        `🎯 Plan: ${plan}%0A` +
        `📅 Fecha: ${fechaBonita}%0A%0A` +
        `¡Tenemos una cita! 😏❤️`;

    // Número de WhatsApp
    const numeroWhatsApp = "3323935534";

    // Enlace de WhatsApp
    const enlaceWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;


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
            Ahora solo falta avisarle
            al encargado de esta misión 😂
        </p>

        <a
            href="${enlaceWhatsApp}"
            target="_blank"
            class="boton-whatsapp"
        >
            📲 Enviar mi elección
        </a>

        <div class="emoji">
            ❤️
        </div>

    `;
}

    // =========================
    // RECHAZAR
    // =========================

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