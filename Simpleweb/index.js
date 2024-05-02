const express = require('express');
const os = require('os');

const app = express();
const port = 8080;

// Definicja ścieżki głównej ("/") 
app.get('/', (req, res) => {
    let response = `Adres IP serwera: ${getIPAddress()}\n`;
    response += `Nazwa serwera (hostname): ${os.hostname()}\n`;
    response += `Wersja aplikacji: ${process.env.VERSION}\n`;
    // Wysyłamy odpowiedź jako HTML
    res.send(response);
});

// Serwowanie pliku HTML
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Aplikacja jest dostępna na porcie ${port}`);
});

function getIPAddress() {
    // Pobierz interfejsy sieciowe
    const interfaces = os.networkInterfaces();
    for (const dev in interfaces) {
        // Filtruj adresy IPv4, wykluczając adresy wewnętrzne
        const iface = interfaces[dev].filter(details => details.family === 'IPv4' && !details.internal);
        // Zwróć pierwszy znaleziony adres
        if (iface.length > 0) return iface[0].address;
    }
    // Zwróć wartość domyślną
    return '0.0.0.0';
}
