Package.describe({
    summary: 'ia namespace container'
});

Package.on_use(function (api, where) {

    api.add_files([
        'namespace.js',
    ], ['client', 'server']);
	
	if(api.export){
    	api.export("InnoAccel");
    }
});