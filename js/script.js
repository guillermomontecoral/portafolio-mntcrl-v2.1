window.onload = function () {
    document.getElementById("btnEnviar").addEventListener("click", function () {
        document.getElementById("error-nomApe").innerHTML = " ", 
        document.getElementById("error-email").innerHTML = " ", 
        document.getElementById("error-msg").innerHTML = " ", 
        document.getElementById("pRespuesta").innerHTML = " "; 
        let b = document.getElementById("floatingNomApe").value, 
        c = document.getElementById("floatingEmail").value, 
        d = document.getElementById("floatingTextarea").value, 
        a = "background-color: #cc2626; padding: 8px 12px; color: #fffffe; display: inline; border-radius: 5px; font-size: 0.8rem; letter-spacing: 1px;"; "" == b && (document.getElementById("error-nomApe").innerHTML = `<p style="${a}">Debe ingresar su nombre y apellido.</p>`), "" == c && (document.getElementById("error-email").innerHTML = `<p style="${a}">Debe ingresar un correo electr\xf3nico.</p>`), "" == d && (document.getElementById("error-msg").innerHTML = `<p style="${a}">Debe ingresar un mensaje.</p>`); var e = document.getElementById("my-form"); async function f(f) {
            if (f.preventDefault(), "" != b && "" != c && "" != d) {
                var h = document.getElementById("pRespuesta"), g = new FormData(f.target); fetch(f.target.action, { method: e.method, body: g, headers: { Accept: "application/json" } }).then(b => {
                    b.ok ? (h.innerHTML = '<p style="background-color: #125a1f; padding: 8px 12px; color: #fffffe; display: inline; border-radius: 5px; font-size: 0.9rem; letter-spacing: 1px;">Mensaje enviado correctamente</p>', e.reset()) : b.json().then(b => {
                        Object.hasOwn(b, "errors") ? h.innerHTML = `<p style="${a}">Formato de email incorrecto.</p>
                                <p style="margin-top: 10px; color: #fffffe; font-size: 0.8rem; letter-spacing: 1px;">Ejemplo: correo@correo.com</p>`: h.innerHTML = `<p style="${a}">Hubo un error al enviar el formulario, por favor vuelva a intentarlo</p>`
                    })
                }).catch(b => { h.innerHTML = `<p style="${a}" class="mb-2">Hubo un error al enviar el formulario, por favor vuelva a intentarlo</p>` })
            }
        } return e.addEventListener("submit", f), !1
    })
}