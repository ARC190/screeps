var role ={
    run: function(creep,source,ThisRoom) {
        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.upgrading = true;
	        creep.say('⚡ upgrade');
	    }

	    if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ff0000'}});
            }
        }
        else {
             var batteries = creep.room.find(FIND_STRUCTURES, {filter:(structure)=>{
	            return (structure.structureType==STRUCTURE_CONTAINER||
	                    structure.structureType==STRUCTURE_STORAGE)/* &&structure.energy>creep.energyCapacity*/;
	        } });
	        var battery=creep.pos.findClosestByPath(batteries);
            if(creep.withdraw(batteries[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(batteries[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        }
	}

module.exports = role;