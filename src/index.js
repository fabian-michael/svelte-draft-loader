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

    // console.log(`id: ${id}`);

    // it's typedraft or typescript file
    if (id.endsWith('.js.tsx') || id.endsWith('.ts'))
    {
        transformed = await TranscribeTypeDraftAsync(id);
    }
    // it's svelte-draft
    else if (id.endsWith('.tsx'))
    {
        transformed = await TranscribeSvelteDraftAsync(id);
        const css_path = id.replace('.tsx', '.css');
        if (await ExistsAsync(css_path))
        {
            this.addDependency(path.resolve(css_path));
        }
    }
    callback(null, transformed, map, meta);
}