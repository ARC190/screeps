var SpawnSub = {
    
    run:function(ScreepCounter,spawner,ThisRoom){
        var spawn=require('spawn.base');
        var sources = Game.rooms[ThisRoom].find(FIND_SOURCES);
        var newName='creep'+Game.time;
        console.log(spawner);
        for(var i=0;i<sources.length;i++)
        spawn.run(spawner,ScreepCounter[0][3],1,Memory.roles[3],[WORK,WORK,WORK,WORK,WORK,CARRY,MOVE],newName,i);//fat harvester
        
        // for(var i=0;i<sources.length;i++)
        // spawn.run(spawner,ScreepCounter[0][6],2,Memory.roles[6],[CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE],newName,i);//transporter
        
        // spawn.run(spawner,ScreepCounter[0][7],1,Memory.roles[7],[CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE],newName,);//energy distributor
        
        spawn.run(spawner,ScreepCounter[0][5],2,Memory.roles[5],[WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],newName,);//upgrader
        
        spawn.run(spawner,ScreepCounter[0][4],3,Memory.roles[4],[WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],newName,);//builder  
    }
}

module.exports = SpawnSub;