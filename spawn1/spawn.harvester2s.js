var SpawnBase ={
    run: function(spawn,newname,ThisRoom){
        var sources=Game.spawns[spawn].room.find(FIND_SOURCES);
        console.log(Memory.rooms[ThisRoom].ScreepCounter[1][3]);
        var harvesters=Memory.rooms[ThisRoom].ScreepCounter[1][3];
        if(sources.length>0){
        for(var i=0;i<sources.length;i++){
            var harvested=false;
            for(var j=0;j<harvesters.length;j++){
                var harvester=Game.creeps[harvesters[j]];
                console.log(harvester);
            if(harvester.AssignedSource==i){
                harvested==true
            }
            if(!harvested)
                Game.spawns[spawn].spawnCreep[[WORK,WORK,WORK,WORK,WORK,CARRY,MOVE],newname,{memory:{role: 'harvester2',AssignedSource: i}}]
            }
        }}
        
            
    }
}

module.exports = SpawnBase;