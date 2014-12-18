module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({

		srcFiles: ["src/**/*.purs", "bower_components/**/src/**/*.purs"],
		psc: {
			options: {
				main: "Main",
				modules: ["Main"]
			},
			all: {
				src: ["<%=srcFiles%>"],
				dest: "public/js/Main.js"
			}
		},
		dotPsci: ["<%=srcFiles%>"],
		execute: {src : "public/js/Main.js"}
	});

	grunt.loadNpmTasks("grunt-purescript");
	grunt.loadNpmTasks("grunt-execute");

	grunt.registerTask("default", ["psc:all", "dotPsci"]);
	grunt.registerTask("run", ["execute"]);
};
