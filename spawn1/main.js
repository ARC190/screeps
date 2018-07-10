var Roles = [require('role.harvester'), require('role.upgrader'), require('role.builder')];
var ScreepCounter = [[0,0,0],
                    [],
                    ['Harvesters','Upgraders','Builders'],
                    ['harvester','upgrader','builder']];
var SpawnSubs = [require('spawn.sub1'),require('spawn.sub2'),require('spawn.sub3'),require('spawn.sub4')];

module.exports.loop = function () {
    var OutputLog='';
    
    if(Game.time%10==0){
        OutputLog += ('Enegry availabale in room "E55N23" ' + Game.rooms['E55N23'].energyAvailable + '\n');
    }
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
    
    if(Game.rooms['E55N23'].energyCapacityAvailable<350){
        SpawnSubs[0].run(ScreepCounter);
    }else{
        if(Game.rooms['E55N23'].energyCapacityAvailable<400){
            SpawnSubs[1].run(ScreepCounter);
        }else{
            if(Game.rooms['E55N23'].energyCapacityAvailable<450){
                SpawnSubs[2].run(ScreepCounter);
            }else{
                if(Game.rooms['E55N23'].energyCapacityAvailable<500){
                    SpawnSubs[3].run(ScreepCounter);
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
        for(i=0;i<Roles.length;i++){
            if(creep.memory.role == ScreepCounter[3][i]) {
                Roles[i].run(creep);
        }
    }
    }
    if(Game.time % 5 == 0 && OutputLog!='')
    console.log(OutputLog);
}