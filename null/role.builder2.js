var export ={
    run: function(creep){
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
	        var sources = creep.room.find(FIND_STRUCTURES, filter:(structure)=>{
	            return (structure.structureType==STRUCTURE_CONTAINER||structure.structureType==STRUCTURE_STORAGE)&&structure.energy>creep.energyCapacity;
	        } });
            if(creep.harvest(sources[source]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[source], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
        }else{
            var roleprogression=require ('role.upgrader');
            module.exports = roleprogression.run(creep,source,ThisRoom);
        }
    }
}

module.exports = export;