var role = {

    run: function(creep,source,ThisRoom) {
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length!=0){
            if(!creep.memory.state){
                creep.memory.state=0;
            }
	    /*if(creep.ticksToLive>1400 && creep.carry.energy < creep.carryCapacity*0.25) {
            creep.memory.state = 0;
            creep.say('🔄 harvest');
	    }else{
	        creep.memory.state = 1;
	        creep.say('🚧 build');
	    }
	    if(creep.ticksToLive<100){
	        creep.memory.state=2;
	    }*/
	    
	    if(creep.memory.state==1 && creep.carry.energy == 0) {
	        creep.memory.state = 0;
	        creep.say('🔄 harvest');
	    }
	    if(creep.memory.state==0 && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.state = 1;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.state==1) {
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#00ff00'}});
                }
            }
	    }
	    if(creep.memory.state==0) {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[source]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[source], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }/*
	    if(creep.memory.state==2){
	        if(Game.spawns('Spawn1').renewCreep(creep)==ERR_NOT_IN_RANGE)
	        creep.moveTo(Game.spawns('Spawn1').pos);
	    }*/
        }else{
            var roleprogression=require ('role.upgrader1');
            module.exports = roleprogression.run(creep,source,ThisRoom);
        }
	}
};

module.exports = role;