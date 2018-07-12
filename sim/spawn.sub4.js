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
    
    if(ScreepCounter[1][2].length < 3 && ScreepCounter[1][0].length >= 1) {
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'fatbuilder'}});        
    }
    
    if(ScreepCounter[1][1].length < 3 && ScreepCounter[1][0].length >= 1) {
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'fatupgrader'}});        
    }
        
     if(ScreepCounter[1][0].length < 4) {
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'fatharvester'}});        
    }
}
}

module.exports = SpawnSub;