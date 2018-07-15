var role ={
    run: function(creep,source,ThisRoom){
        var targets = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity||
                                structure.structureType == STRUCTURE_TOWER&&structure.energy < (structure.energyCapacity*0.8);
                    }
                    });
                    if(targets.length>0){
         if(!creep.memory.withdrawing && creep.carry.energy == 0) {
            creep.memory.withdrawing = true;;
	    }
	    if(creep.memory.withdrawing && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.withdrawing = false;
	    }
	    if(creep.memory.withdrawing){
        var g = creep.room.find(FIND_STRUCTURES, {
            filter: (k) => {
                return (k.structureType == STRUCTURE_CONTAINER||
                        k.structureType == STRUCTURE_STORAGE)&&
                        k.store.energy>creep.carryCapacity;
            }
        });
        var Esource=creep.pos.findClosestByPath(g);
            if(creep.withdraw(Esource,RESOURCE_ENERGY,creep.carryCapacity-creep.carry.energy)==ERR_NOT_IN_RANGE)
            creep.moveTo(Esource, {visualizePathStyle: {stroke: '#ffaa00'}});
	    }else{
	       // var target=creep.pos.findClosestByPath(targets);
	        if(creep.transfer(targets[0],RESOURCE_ENERGY)==ERR_NOT_IN_RANGE)
            creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
	    }
        }
    }
}

module.exports = role;