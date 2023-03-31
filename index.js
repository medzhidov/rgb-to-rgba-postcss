const plugin = () => {
    return {
        postcssPlugin: 'rgb-to-rgba-plugin',
        Once (root) {
            // console.log(Object.keys(root));
            root.walkRules(function(rule) {
                rule.walkDecls(function(decl) {
                    decl.value = decl.value.replace(/rgb\((\d+)\s+(\d+)\s+(\d+)+(?:\s+)?\/(?:\s+)?([\d.]+|var\([A-Z-]+\))(?:\s+)?\)/gi, 'rgba($1, $2, $3, $4)');

                    // if (decl.value.includes('rgb(')) {
                    //     console.log(decl.value);
                    // }
                });
            });
        },
    }
};

plugin.postcss = true

module.exports = plugin;
