var Roles = [require('role.harvester1'), require('role.upgrader1'), require('role.builder1'),
                require('role.harvester2'),require('role.upgrader2'), require('role.builder2'),
                require('role.transporter1'), require('role.transporter2')];
var survey=require('room.survey');
//var ScreepCounter = [[0,0,0,0],
//                    [],
//                    ['harvester','upgrader','builder','fatharvester']];
var SpawnSubs = [require('spawn.sub1'),require('spawn.sub2'),require('spawn.sub3'),require('spawn.sub4'),require('spawn.sub5')];
var TowerSubs=[require('role.tower1')];

module.exports.loop = function () {
    var TimeNow= Game.time;
    for(var ThisRoom in Memory.rooms){
    survey.run(ThisRoom);
    LocalStructures=Memory.rooms[ThisRoom].Structures;
    // console.log(LocalStructures[0][0]);
    // console.log(LocalStructures[1][0]);
    // console.log(LocalStructures[2][0]);
    // console.log(LocalStructures[4][0]);
    var towers = /*LocalStructures[4];*/Game.rooms[ThisRoom].find(FIND_STRUCTURES, {
        filter: (structure) => {
            return structure.structureType == STRUCTURE_TOWER;
        }
    });
    
    if(towers.length>0){
    for(var i=0;i<towers.length;i++){
        TowerSubs[0].run(towers[0]);}
    }
    var OutputLog='';
    
    var ScreepCounter=Memory.rooms[ThisRoom].ScreepCounter;
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    var maxBodyParts=(Game.rooms[ThisRoom].energyCapacityAvailable/50-2);
    
    if(maxBodyParts==4)
        SpawnSubs[0].run(ScreepCounter,Memory.rooms[ThisRoom].structures[0],);
    
    if(maxBodyParts==5)
        SpawnSubs[1].run(ScreepCounter);
    
    if(maxBodyParts==6)
        SpawnSubs[2].run(ScreepCounter);
    
    if(maxBodyParts>=7&&maxBodyParts<10)
        SpawnSubs[3].run(ScreepCounter);
    
    if(maxBodyParts>10)
        SpawnSubs[3].run(ScreepCounter,'Spawn1',ThisRoom);
    // console.log(Memory.rooms[ThisRoom].ScreepCounter[1][3]);
    
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
    if(TimeNow % 5 == 0 && OutputLog!='')
    console.log(OutputLog);
    }
}
