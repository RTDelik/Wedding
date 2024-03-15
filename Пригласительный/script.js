window.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector('form');

    function req(e){
        e.preventDefault();
        let formDate = new FormData (form);
        // formDate.append("id",Math.random());
        // let obj = {};
        // formDate.forEach((value, key) => {
        //     obj[key] = value;
        // });

        // getResourse("http://localhost:3000/people", obj)
        getResourse("./public/site.html", formDate)
        .then(date => console.log(date))
        // .then(date => card(date))
        .catch(err => console.error(err));
    }
    form.addEventListener("submit", (e) => req(e), {"once": true});
    req()
})
async function getResourse(url, date){
    const res = await fetch(`${url}`,{
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(date)
    });

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}
// async function getResourse(url, date){
//     const res = await fetch(`${url}`,{
//     method: "POST",
//     body: date
//     });

//     if(!res.ok){
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }

//     return await res.text();
// }
function card(date) {
    date.forEach(element => {
        // console.log(element)
        let div = document.createElement('div');
        div.innerHTML = `<p>Имя: ${element.name}
                    <p>Фамилия: ${element.surname}
                    <p>Возраст: ${element.age}`;
        document.body.appendChild(div);
    });
}

