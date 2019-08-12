window.onload = () => {
    document
        .getElementById("contact-form")
        .addEventListener("submit", event => {
            const name = document.getElementsByName("name")[0].value;
            const email = document.getElementsByName("email")[0].value;
            const message = document.getElementsByName("message")[0].value;

            if (name.length == 0 || email.length == 0 || message.length == 0) {
                document.getElementById(
                    "form-validation-message"
                ).style.visibility = "visible";
                event.preventDefault();
            }
        });
};
