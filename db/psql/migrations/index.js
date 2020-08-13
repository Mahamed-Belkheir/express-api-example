const fs = require('fs')
const pool = require('../db');

class Migrations {
    constructor(versions, pool) {
        this.versions = versions;
        this.pool = pool;
    }

    showMigrations(showSQL = false) {
        let i = 1;
        for (let version in this.versions) {
            console.log(`${i++}: ${version}` + (showSQL? `, SQL: ${this.versions[version]}`: ""))
        }
    }

    runMigration(id) {
        let migration = this.versions[Object.keys(this.versions)[id-1]];
        this.pool.query(migration)
        .then(()=>console.log("successfully migrated"))
        .catch(e=>console.error("error occured while running migration: ", e))
    }
}

function MigrationsFactory() {
    return getVersions()
    .then(versions => new Migrations(versions, pool))
}


function getVersions() {
    return new Promise((resolves, rejects) => {
        fs.readdir(__dirname + '/versions', (err, res) => {
            if (err) rejects(err)
            if (res) resolves(res)
        })
    })
    .then(res => {
        let versions = {};
        for (filename of res) {
            let [name, sql] = require('./versions/' + filename);
            versions[name] = sql;
        }
        return versions;
    })
    .catch(err => console.log(err))
}