module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        exec: {
            build: {
                cmd: function (filename) {
                    var command = 
                        'find source -name "*.ts" | xargs typescript/built/local/tsc --sourceMap --noExtends -m "amd" --target ES5' + '\n' +
                        'mv source/*.js build' + '\n' +
                        'mv source/*.map build' + '\n' +
                        'cat \
                        typescript/extends.js \
                        build/Attribute.js \
                        build/Vector2.js \
                        build/SVGEvent.js \
                        build/EventObject.js \
                        build/BaseObject.js \
                        build/SceneObject.js \
                        build/Object2D.js \
                        build/ListItem.js \
                        build/Anchor.js \
                        build/Image.js \
                        build/Input.js \
                        build/Label.js \
                        build/Select.js \
                        build/DropMenu.js \
                        build/Frame.js \
                        build/Canvas2D.js \
                        build/SVGObject.js \
                        build/SVGGradient.js \
                        build/SVGLinearGradient.js \
                        build/SVGRadialGradient.js \
                        build/SVGStop.js \
                        build/SVGContainer.js \
                        build/SVGDef.js \
                        build/SVGFrame.js \
                        build/SVGGroup.js \
                        build/SVGUse.js \
                        build/SVGRoot.js \
                        build/SVGLoader.js \
                        build/SVGText.js \
                        build/SVGEditableText.js \
                        build/SVGImage.js \
                        build/SVGCircle.js \
                        build/SVGLine.js \
                        build/SVGPolyline.js \
                        build/SVGPolygon.js \
                        build/SVGRectangle.js \
                        build/SVGResizingRectangle.js \
                        build/SVGResizingCircle.js \
                        build/SVGResizingUse.js \
                        build/SVGEditableImage.js \
                        build/SVGForeignObject.js \
                        build/SVGLink.js \
                        build/SVGFilter.js \
                        build/SVGFilterElement.js \
                        build/SVGFEGaussianBlur.js \
                        build/SVGFEOffset.js \
                        build/SVGFELighting.js \
                        build/SVGFESpecularLighting.js \
                        build/SVGFEPointLight.js \
                        build/Text.js \
                        build/TextInput.js > dist/cysvg_1.js' + '\n' +
                        'sed "/\\/\\/\\//d" dist/cysvg_1.js > dist/cysvg.js' + '\n' +
                        'rm dist/cysvg_1.js' + '\n' +
                        'node_modules/uglify-js/bin/uglifyjs \
                        typescript/extends.js \
                        build/Attribute.js \
                        build/Vector2.js \
                        build/SVGEvent.js \
                        build/EventObject.js \
                        build/BaseObject.js \
                        build/SceneObject.js \
                        build/Object2D.js \
                        build/Input.js \
                        build/Select.js \
                        build/Anchor.js \
                        build/Label.js \
                        build/ListItem.js \
                        build/Image.js \
                        build/DropMenu.js \
                        build/Frame.js \
                        build/Canvas2D.js \
                        build/SVGObject.js \
                        build/SVGGradient.js \
                        build/SVGLinearGradient.js \
                        build/SVGRadialGradient.js \
                        build/SVGStop.js \
                        build/SVGContainer.js \
                        build/SVGDef.js \
                        build/SVGFrame.js \
                        build/SVGGroup.js \
                        build/SVGUse.js \
                        build/SVGRoot.js \
                        build/SVGLoader.js \
                        build/SVGText.js \
                        build/SVGEditableText.js \
                        build/SVGImage.js \
                        build/SVGCircle.js \
                        build/SVGLine.js \
                        build/SVGPolygon.js \
                        build/SVGPolyline.js \
                        build/SVGRectangle.js \
                        build/SVGResizingRectangle.js \
                        build/SVGResizingCircle.js \
                        build/SVGResizingUse.js \
                        build/SVGEditableImage.js \
                        build/SVGForeignObject.js \
                        build/SVGLink.js \
                        build/SVGFilter.js \
                        build/SVGFilterElement.js \
                        build/SVGFEGaussianBlur.js \
                        build/SVGFEOffset.js \
                        build/SVGFELighting.js \
                        build/SVGFESpecularLighting.js \
                        build/SVGFEPointLight.js \
                        build/Text.js \
                        build/TextInput.js -m -c -o dist/cysvg.min.js &> build/uglify.log' + '\n' +
                        'typescript/built/local/tsc -d -m "amd" --target ES5 --outDir build --removeComments source/*.ts' + '\n' +
                        'cat build/*.d.ts > dist/cysvg_1.d.ts' + '\n' +
                        'sed "/\\/\\/\\//d" dist/cysvg_1.d.ts > dist/cysvg_2.d.ts' + '\n' +
                        'rm dist/cysvg_1.d.ts' + '\n' +
                        'echo \"/// <reference path=\'../3rdparty/ts-defs/d3.d.ts\' />\r\n\" > dist/temp.d.ts' + '\n' +
                        'cat dist/temp.d.ts dist/cysvg_2.d.ts > dist/cysvg.d.ts' + '\n' +
                        'rm dist/temp.d.ts' + '\n' +
                        'rm dist/cysvg_2.d.ts';
                    return command;
                },
                stdout: false,
                stderr: true
            },
            buildDocs: {
                cmd: function (filename) {
                    var command =   'node ./node_modules/tsdoc/bin/tsdoc' + '\n' +
                                    'cp examples/otherAssets/* docs';
                    return command;
                },
                stdout: false,
                stderr: true
            },
            buildExamples: {
                cmd: function (filename) {
                    var command =   'find examples -name "*.ts" | xargs typescript/built/local/tsc --sourceMap --noExtends -m "amd" --target ES5';
                    return command;
                },
                stdout: false,
                stderr: true
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks("grunt-exec");

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};