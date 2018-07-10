var Roles = [require('role.harvester'), require('role.upgrader'), require('role.builder')];
var SpawnSub = require('sub.spawn');
var ScreepCounter = [[0,0,0],
                    [],
                    ['Harvesters','Upgraders','Builders'],
                    ['harvester','upgrader','builder']];

module.exports.loop = function () {
    
    var OutputLog='';
    
    OutputLog += ('Enegry availabale in room "sim" ' + Game.rooms['sim'].energyAvailable + '\n');
    var i;
    
    for(i=0; i<Roles.length; i++){
        ScreepCounter[1][i] = _.filter(Game.creeps, (creep) => creep.memory.role == ScreepCounter[3][i]);
        if(ScreepCounter[1][i].length != ScreepCounter[0][i]){ 
            OutputLog += (ScreepCounter[2][i] +  ': ' + ScreepCounter[1][i].length + '\n');
            ScreepCounter[0][i] = ScreepCounter[1][i].length;
        }
    }
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    if(ScreepCounter[1][0].length < 2) {
        var newName = 'Creep' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: ScreepCounter[3][0]}});        
    }
    
    if(ScreepCounter[1][1].length < 1 && ScreepCounter[1][0].length >= 1 && Game.rooms['sim'].energyAvailable>200) {
        var newName = 'Creep' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: ScreepCounter[3][1]}});        
    }
    
    if(ScreepCounter[1][2].length < 1 && ScreepCounter[1][0].length >= 2 && Game.rooms['sim'].energyAvailable>200) {
        var newName = 'Creep' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: ScreepCounter[3][2]}});        
    }
    
    if(Game.spawns['Spawn1'].spawning) { 
       var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        OutputLog += ('Spawning new ' + spawningCreep.memory.role + ': ' + Game.spawns['Spawn1'].spawning.name);
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
    } 
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        for(i=0; i<Roles.length; i++){
        if(creep.memory.role == ScreepCounter[3][i]) {
            Roles[i].run(creep);
        }
        }
    }
    if(Game.time % 10 == 0 && OutputLog!='')
    console.log(OutputLog);
}