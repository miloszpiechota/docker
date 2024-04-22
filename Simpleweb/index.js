
const express = require('express');
const os = require('os');


const app = express();
const port = 8080;

// Definicja ścieżki głównej ("/") 
app.get('/', (req, res) => {
  let response = `Adres IP serwera: ${getIPAddress()}\n`;
  response += `Nazwa serwera (hostname): ${os.hostname()}\n`;
  response += `Wersja aplikacji: ${process.env.VERSION}\n`;
  // wyslij do klineta
  res.send(response);
});


app.listen(port, () => {
  console.log(`Aplikacja jest dostępna na porcie ${port}`);
});


function getIPAddress() {
  // pobierz interfejsy sieciowe
  const interfaces = os.networkInterfaces();
  for (const dev in interfaces) {
    // filtracja adresów IPv4, wykluczając adresy wewnętrzne
    const iface = interfaces[dev].filter(details => details.family === 'IPv4' && !details.internal);
   // zwróć pierwszy z nich
    if (iface.length > 0) return iface[0].address;
  }
// zwróć wartość domyślną
  return '0.0.0.0';
}
