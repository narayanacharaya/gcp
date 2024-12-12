"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebPage = void 0;
const WebPage = (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Button Click</title>
    </head>
    <body>
      <h1>Button Click App</h1>
      <button onclick="sendClick('red')">Red Button</button>
      <button onclick="sendClick('blue')">Blue Button</button>

      <script>
        async function sendClick(color) {
          try {
            const response = await fetch('/button/' + color, {
              method: 'POST'
            });

            const result = await response.json();
            alert(result.message);
          } catch (error) {
            alert('Error: ' + error.message);
          }
        }
      </script>
    </body>
    </html>
  `);
};
exports.WebPage = WebPage;
