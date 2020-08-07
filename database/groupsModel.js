const fs = require('fs');
const path = require('path');

// Micro desafío
// 1. crear funcion readFile()
// - Leer el archicho
// - Devolver los contenido en formato JavaScript
// - Si no hay nada, devolver un array vacío

// Micro desafío
// 1. crear funcion writeFile()
// - Recibe datos a escribir
// - Los convierte a JSON
// - Los guarda en el archivo

let groupsModel = {
    filePath: path.join(__dirname, '../data/groups.json'),
    readFile() {
        let fileContents = fs.readFileSync(this.filePath, 'utf8');
    
        if(fileContents) {
            return JSON.parse(fileContents);
        }
    
        return [];
    },
    writeFile(contents) {
        let fileContents = JSON.stringify(contents, null, " ");
        fs.writeFileSync(this.filePath, fileContents);
    },
    nextId() {
        let rows = this.readFile();
        let lastRow = rows.pop();

        if (lastRow) {
            return ++lastRow.id;
        }

        return 1;
    },
    all() {
        return this.readFile();
    },
    find(id) {
        let rows = this.readFile();
        return rows.find(row => row.id == id)
    },
    create() {
        
    }
}

module.exports = groupsModel;