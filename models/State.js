var mongoose = require('mongoose');
// Setup schema
const Schema = mongoose.Schema;

var stateSchema = new Schema({
    state: {
        type: Schema.Types.Mixed,
    }
},
    {
        collection: 'states',
    }
);

// Export State model
module.exports = mongoose.model('State', stateSchema);