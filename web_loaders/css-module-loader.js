var utils = require('loader-utils');

module.exports = function(source, map) {
    var content = utils.stringifyRequest(this, source);
    // var query = utils.parseQuery(this.query);

    // console.log('\n\n\n');
    // console.log('query', query);
    console.log('\n\n\n');
    console.log('typeof source', typeof source);
    console.log('\n');
    console.log(source);
    console.log('\n\n\n');
    console.log('typeof content', typeof content);
    console.log('\n\n\n');
    console.log(content);
    console.log('\n\n\n');
    // console.log(this.options)
    // console.log(this.context);
    // console.log(this.loaders);

    // console.log(this.resourcePath);

    // console.log(this.query.split('='));
    // return source;
    this.callback(null, source, map);
}
