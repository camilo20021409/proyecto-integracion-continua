const app = require('./app');

async function main() { 
    app.listen(3000);
    console.log( 'server is running');
}
main();