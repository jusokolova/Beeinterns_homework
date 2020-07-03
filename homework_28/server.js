function createText(text) {
    let div = document.createElement('div');
    div.className = "text";
    div.innerHTML = text;
    document.body.appendChild(div);
}

async function sendRequest(url) {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(resp => {
            if (resp.status >=300) {
            console.log('Server error')
        }
        resp.json()
        .then((resp) => createText(resp.text))
        })
        .catch((error) => console.log(error))
}

const fetchStart = () => {
    fetch('/serviceavailable/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(async resp => {
            if (resp.status >=300) {
            createText('Произошла ошибка')
        } else {
            await sendRequest('/getinfo/')
            await sendRequest('/getdescription/')
        }  
        })
        .catch((error) => console.log(error))
}

const button = document.querySelector('#btn');
button.addEventListener('click', fetchStart)