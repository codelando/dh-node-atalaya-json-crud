const fs = require('fs');
const path = require('path');

module.exports = {
    index: (req, res) => {
        // Me traigo todos los grupos

        res.render('groups/index', ??? );
    },
    create: (req, res) => {
        res.render('groups/create');
    },
    store: (req, res) => {
        // creo el grupo con los datos del formulario

        // agrego el nuevo grupo a los existentes

        // guardado el nuevo listado en el archivo JSON

        res.redirect('/groups')
    },
    edit: (req, res) => {
        // creo el grupo con los datos del formulario

        // cambio el grupo en el listado

        // guardado el nuevo listado en el archivo JSON

        res.redirect('/groups')
    },
    update: (req, res) => {
        res.send(req.body);
    },
    show: (req, res) => {

        // Busco el grupo

        res.render('groups/detail', ???);
    },
    destroy: (req, res) => {

        // Traigo todos los grupos
        
        // Elimino el grupo

        // Guardado el nuevo listado en el archivo JSON

        res.redirect('/groups')
    },
    search: (req, res) => {
        // Traigo todos los grupos

        // Filtro los grupos

        // Envío los grupos y lo que busco el usuario a la vista

        res.render('groups/search', { ??? });
    },
}