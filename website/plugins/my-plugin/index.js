module.exports=function(context,Options){

    return{ 
            name:'my-plugin',

            extendCli(Cli){

                Cli.command('custom-action').description('this is a custom command')
                .action(() =>{console.log('Hello guys,this is my custom plugin');} );
            }
    };


}