var MetricsPluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    MetricsPluginCommand.call(this, command, args);
    if (command === 'Track') {
        var request = new XMLHttpRequest();
        var decision = {};
        decision.content = args.join(" ");
        request.onreadystatechange = function() { 
            if (request.readyState != 4  || request.status != 200)
                return;
            console.log(request) 
        };
        request.open("POST", "https://enigmadragons-ld39metrics.azurewebsites.net/api/event?code=9sKkJ1clnDUSxEFEOpz/Bcaaqx1Pay/euwoImYvTfsRMjhazSr7Pbw==", true);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(decision));
    }
} ;