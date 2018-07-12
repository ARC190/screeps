var Roles = [require('role.harvester1'), require('role.upgrader1'), require('role.builder1'),require('role.harvester2')];
//var ScreepCounter = [[0,0,0,0],
//                    [],
//                    ['harvester','upgrader','builder','fatharvester']];
var SpawnSubs = [require('spawn.sub1'),require('spawn.sub2'),require('spawn.sub3'),require('spawn.sub4')];
var TowerSubs=[require('role.tower1')];

module.exports.loop = function () {
    
    for(var ThisRoom in Memory.rooms){
    
    var towers = Game.rooms[ThisRoom].find(FIND_STRUCTURES, {
        filter: (structure) => {
            return structure.structureType == STRUCTURE_TOWER;
        }
    });
    // console.log(towers);
    if(towers.length>0){
    for(var i=0;i<towers.length;i++){
        TowerSubs[0].run(towers[0]);}
    }
    var OutputLog='';
    
    var ScreepCounter=Memory.rooms[ThisRoom].ScreepCounter;
    
    if(Game.time%10==0){
        OutputLog += ('Enegry availabale in room "' + ThisRoom + '" ' + Game.rooms[ThisRoom].energyAvailable + '\n');
    
    
    for(var i=0; i<Roles.length; i++){
        ScreepCounter[1][i] = _.filter(Game.creeps, (creep) => creep.memory.role == Memory.roles[i]);
        if(ScreepCounter[1][i].length != ScreepCounter[0][i]){ 
            ScreepCounter[0][i] = ScreepCounter[1][i].length;
        }
    }
    }
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    var w=WORK;
    var c=CARRY;
    var m=MOVE;
    if(Game.rooms[ThisRoom].energyCapacityAvailable==300){
        SpawnSubs[0].run(ScreepCounter);
    }else{
        if(Game.rooms[ThisRoom].energyCapacityAvailable==350){
            SpawnSubs[1].run(ScreepCounter);
        }else{
            if(Game.rooms[ThisRoom].energyCapacityAvailable==400){
                SpawnSubs[2].run(ScreepCounter);
            }else{
                if(Game.rooms[ThisRoom].energyCapacityAvailable==450){
                    SpawnSubs[3].run(ScreepCounter);
                }else{
                    if(Game.rooms[ThisRoom].energyCapacityAvailable>=500){
                        SpawnSubs[3].run(ScreepCounter);
                    }
                }
            }
        }
    }
    
    if(Game.spawns['Spawn1'].spawning) { 
       var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        OutputLog += ('Spawning new ' + spawningCreep.memory.role + ': ' + Game.spawns['Spawn1'].spawning.name);
        Game.spawns['Spawn1'].room.visual.text('🛠️' + spawningCreep.memory.role,
        Game.spawns['Spawn1'].pos.x + 1,Game.spawns['Spawn1'].pos.y,
        {align: 'left', opacity: 0.8});
    } 
    
   for(var name in Game.creeps) {
       var creep = Game.creeps[name];
       var source=Game.creeps[name].memory.AssignedSource
        for(i=0;i<Roles.length;i++){
            if(creep.memory.role == Memory.roles[i]) {
                Roles[i].run(creep,source,ThisRoom);
        }
    }
    }
    if(Game.time % 5 == 0 && OutputLog!='')
    console.log(OutputLog);
    }
}
