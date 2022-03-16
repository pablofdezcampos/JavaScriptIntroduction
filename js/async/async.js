function downloadNewClients() {
    return new Promise(resolve => {
        console.log('Downloading clients...'); //print response

        setTimeout(() => {
            resolve('The clients were downloaded'); //every 3 seconds put the resolve
        }, 5000);
    });
}

function downloadLastsProducts() {
    return new Promise(resolve => {
        console.log('Downloading products...');

        setTimeout(() => {
            resolve('The products were dowloaded');
        }, 3000);
    });
}

async function app() {
    try {
        const clients = await downloadNewClients();
        console.log(clients);
    } catch (error) {
        console.log(error);
    }
}

//app();

//Execute two promises at the same time

/* For example in a shop page, download the clients and products at the same time */

async function app2() {
    try {
        const result = await Promise.all([downloadNewClients(), downloadLastsProducts()]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

app2();