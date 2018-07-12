var SpawnSub = {
    
    run:function(ScreepCounter){
    
    /*for(var i=1;i<=(ScreepCounter[0][0]+ScreepCounter[0][1]+ScreepCounter[0][2]);i++){
        for(var name in Memory.creeps){
            if(name != ('Creep' + i)){
                var newName = ('Creep'+i);
            }
        }
    }*/
    var newName='creep'+Game.time;
    
    if(ScreepCounter[1][1].length < 3 && ScreepCounter[1][0].length >= 1) {
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'upgrader',AssignedSource: 0}});        
    }
        
     if(ScreepCounter[1][0].length < 5) {
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'harvester',AssignedSource: 0}});        
    }
}
}

module.exports = SpawnSub;