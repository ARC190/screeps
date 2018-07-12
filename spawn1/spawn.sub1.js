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
    
    if(ScreepCounter[0][2] < 1 && ScreepCounter[0][0] >= 2 && ScreepCounter[0][1] >= 1) {
        
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'builder'}});        
    }
    
    if(ScreepCounter[0][1]< 1 && ScreepCounter[0][0] >= 1) {
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'upgrader1'}});        
    }
        
     if(ScreepCounter[0][0] < 4) {
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester1'}});        
    }
}
}

module.exports = SpawnSub;