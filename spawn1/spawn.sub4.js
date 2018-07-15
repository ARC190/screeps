var SpawnSub = {
    
    run:function(ScreepCounter){
        
    var newName='creep'+Game.time;
    
    if(ScreepCounter[1][1].length < 3 && ScreepCounter[1][0].length >= 1) {
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'upgrader1',AssignedSource: 0}});        
    }
        
     if(ScreepCounter[1][0].length < 4) {
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'harvester1',AssignedSource: 1}});        
    }
}
}

module.exports = SpawnSub;