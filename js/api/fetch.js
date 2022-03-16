//FETCH API

/* Equal as Ajax, it allow us to send information to the server 
   or get information from the server
*/

/*
   You can recieve a local file or a json
*/

/*
   Uses promises and async/await 
*/

function getEmployers() {
    const url = 'json/employers.json';
    fetch(url)
        .then(result => result.json())
        .then(data => {
            const { employers } = data;

            employers.forEach(employer => {
                console.log(employer.name);

                //Paint the component in the HTML
                document.querySelector('.content').textContent += employer.job;
            });
        })
}

getEmployers();

//Fetch with aync await

async function getEmployers2() {
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
}