'use strict';

const schema = require('./notes_schema.js');

class Note {

    constructor() {
    }

    create(record) {
        let newRecord = new schema(record);
        return newRecord.save();
    }

    get(category) {
        if (category) {
            return schema.find(category);
            // return schema.findById(_id);
        } else {
            // return schema.find({});
            return schema.find();
        }
    }


    delete(_id) {
        return schema.findByIdAndDelete(_id);
    }


}

module.exports = new Note();