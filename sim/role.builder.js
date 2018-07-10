var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep,ThisRoom) {
        
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length!=0){
	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#00ff00'}});
                }
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
        }else{
            var roleprogression=require ('role.upgrader');
            module.exports = roleprogression.run(creep);
        }
	}
};

module.exports = roleBuilder;