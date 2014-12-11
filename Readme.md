# CySVG Library
By [David Samson](mailto://david.samson@cyaninc.com)

This typescript library is a simple yet powerful tool for creating and dynamically changing SVG.  The library provides the ability to build complex SVG objects and treat them as a single entity.  This library also includes an event based pub/sub system for handling user interaction with the SVG objects.

## Getting Started

This library is intended to be used as a [TypeScript](http://www.typescriptlang.org/) library.  While TypeScript is needed for the best experience working with this libarry, it is not required.  Raw JavaScript can be used.  That being said, all the examples and documentation will assume a familiarity with TypeScript.  

First let's take a look at the Hello World Example.

```javascript
/// <reference path='../dist/cysvg.d.ts'/>

class HelloWorld {

    constructor() {
    
        // create root container for svg block
        var svgroot = new CySVG.SVGRoot({   
            id: 'content', 
            size: ['800px', '600px'], 
            backgroundColor:'lightgrey', 
            borderColor:'black', 
            borderSize:2, 
            borderStyle:'solid' });

        // add frame - svg block
        var frame: CySVG.SVGFrame = new CySVG.SVGFrame(svgroot, {   
            id: 'frame1', 
            size: [800, 600], 
            position: [0, 0] });

        // now add svg elements (some examples of svg shapes)
        var text: CySVG.SVGText = new CySVG.SVGText(frame, { 
            id: 'text1', 
            position: [400, 300], 
            fontSize: 50, 
            fill: 'green', 
            text: "Hello World", 
            stroke: 'black', 
            autoCenter:true });
    }

}
```

The first order of business in this ts file is to reference the cysvg.d.ts file.  This file is included in the distribution and lets TypeScript have access to the CySVG declarations.  

The constructor of the HelloWorld class contains the functionality of this example.  In order to contain an SVG object in a project, an HTML div element is needed.  This is the purpose of the [SVGRoot](CySVG.SVGRoot.html) class.  This class will either attach to an existing div or create one within the document body.  This is determined by the value of the 'id' attribute passed to the constructor.  If the 'id' matches an existing div elements 'id' attribute that element will be used, otherwise one will be created with the attributes passed to the constructor.

Note that all CySVG objects are created by passing a list of optional attributes to the constructor.  These attributes determine the initial conditions the object will have at creation.  An attempt has been made to unify attribute names accross all SVG objects for consistency.  All attributes may be altered later by using the name of the attribute as a property of the instance.  In this example, the id of this object can be changed by using  `svgroot.id = 'a_new_id'`.  When tbis line is executed, SVGRoot will change the div's 'id' attribute to 'a_new_id'.  Setting any CySVG object property will trigger a change to the DOM.

The next object created is the SVGFrame.  This object produces an svg element within the div element created by SVGRoot.  At least one  instance of this class is required for all projects.  It is possible to have more than one SVGFrame within a single SVGRoot or across several SVGRoot instances.  Note that the first parameter passed to the SVGFrame constructor is the instance of the SVGRoot that will be the 'parent' of this SVGFrame.  This pattern is used consistently for all SVG objects.

Finally, an SVGText is added with the SVGFrame instance as parent.  The position attribute is used here to place the text at the center of the SVGFrame.  Other attributes are used to specify the appearance of the text.  Details about what attributes are available and what they mean are available in the documentation.

This is the hello world HTML file.

```html
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>SVG Shapes</title>

    <script type="text/javascript" src="../bower_components/d3/d3.min.js"></script>
    <script type="text/javascript" src="../bower_components/tweenjs/build/tween.min.js"></script>
    <script type="text/javascript" src="../bower_components/cysvg/dist/cysvg.js"></script>

    <script src="helloworld.js"></script>
</head>
<body>
    <div id="content">
    </div>
    <script type="text/javascript">
        var app = new HelloWorld();
    </script>
</body>
</html>
```

To use this library you will need to include the cysvg.js or the cysvg.min.js script in your project.  Note that the d3 and tween libraries are also required.  These will be automatically added by bower when the CySVG library is installed.

## Building the library, examples, and docs.

To build this library, clone this repository and execute the following commands.

`npm install`

`npm install jsdoc -g`

`bower install`


### Building the library

Running `grunt exec:build` in this repo will compile the TypeScript source into the complete javascript distribution package.  The results are placed into the "dist" folder.

### Building the examples

Running `grunt exec:buildExamples` will compile the TypeScript examples and place the results in the "examples" folder.

### Building the documentation

Running `grunt exec:buildDocs` will execute the tsdoc scripts on the source files and produce the documentation in a "docs" folder.


## Changes

### V1.0.0
* Initial Version