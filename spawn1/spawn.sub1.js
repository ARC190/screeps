var SpawnSub = {
    
    run:function(ScreepCounter){
    
    if(ScreepCounter[0][2].length < 1 && ScreepCounter[0][0].length >= 2 && ScreepCounter[0][1].length >= 1) {
        var newName = 'Creep' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'builder'}});        
    }
    
    if(ScreepCounter[0][1].length < 1 && ScreepCounter[0][0].length >= 1) {
        var newName = 'Creep' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'upgrader'}});        
    }
        
     if(ScreepCounter[0][0].length < 4) {
        var newName = 'Creep' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});        
    }
}
}

module.exports = SpawnSub;