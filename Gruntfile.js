module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                reporter: require('jshint-junit-reporter'),
                reporterOutput: "build/reports/jshint.xml",
                jshintrc: '.jshintrc',
                ignores: ['**/*.min.js']
            },
            build: [
                "client/src/**/*.js"
            ]
        }
        //karma: {
        //    unit: {
        //        configFile: 'client/karma.conf.js',
        //        logLevel: 'ERROR',
        //        singleRun: true,
        //        browsers: ['PhantomJS']
        //    }
        //}
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['jshint']);
};