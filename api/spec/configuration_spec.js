//test configuration in this file
//get inspiration from here: https://github.com/wfreeman/simple-neo

//make these tests pass
describe("Configuration setup", function() {
    it("should load local configurations", function(next) {
        var config = require('../config')();
        expect(config.mode).toBe('local');
        next();
    });
    it("should load staging configurations", function(next) {
        var config = require('../config')('staging');
        expect(config.mode).toBe('staging');
        next();
    });
    it("should load production configurations", function(next) {
        var config = require('../config')('production');
        expect(config.mode).toBe('production');
        next();
    });
});

//fill out these tests
describe("Neo4j", function() {
    it("is there a Neo4j server running", function(next) {

        });
    });
});

