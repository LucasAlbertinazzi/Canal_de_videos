function logar() {

    event.preventDefault();
    verificaIP();

}

async function verificaIP() {

    let url;
    let ip;
    response = await axios.get('https://api.ipify.org?format=json');
    ip = response.data.ip;

    url = 'API';
    const token = 'Bearer TOKEN';
    const user = document.getElementById("loginuser").value;
    const password = document.getElementById("senhauser").value;

    let data = {
        "userName": user,
        "password": password
    };

    executaPost(url, data, token);
}

function executaPost(url, data, token) {

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json-patch+json",
            "Authorization": token,
        },

        body: JSON.stringify(data),
    })

        .then((resp) => {
            if (resp.status == 200) {
                document.getElementById('aviso').style.display = "none";
                localStorage.setItem('usuario', JSON.stringify(resp));
                location.href = "home.html";

            } else {
                document.getElementById('aviso').style.display = "block";
            }
        })

        .catch((error) => {
            alert(error)

        });

}