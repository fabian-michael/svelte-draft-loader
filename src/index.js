const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');
const { TranscribeTypeDraftAsync, TranscribeSvelteDraftAsync } = require('svelte-draft/cli/literator');
const path = require('path');
const { exists } = require('fs');
const { promisify } = require('util');

const schema = {
    type: 'object'
};

module.exports = async function(source, map, meta) {
    this.cacheable();
    var callback = this.async();

    const options = getOptions(this);
    validateOptions(schema, options, 'Svelte Draft Loader');

    const ExistsAsync = promisify(exists);
    const id = this.resourcePath;
    let transformed = '';
    let error = null;

    try {
        transformed = await TranscribeSvelteDraftAsync(id);
        const css_path = id.replace('.tsx', '.css');
        if (await ExistsAsync(css_path))
            this.addDependency(path.resolve(css_path));
    } catch (e) {
        error = e
    } finally {
        callback(error, transformed, map, meta);
    }

}