var SpawnSub = {
    
    run:function(ScreepCounter){
        
     if(ScreepCounter[0][0].length < 3) {
        var newName = 'Creep' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});        
    }
    
    if(ScreepCounter[0][1].length < 1 && ScreepCounter[0][0].length >= 1) {
        var newName = 'Creep' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'upgrader'}});        
    }
}
}

module.exports = SpawnSub;