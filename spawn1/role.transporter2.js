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
        var g = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_CONTAINER||structure.structureType == STRUCTURE_STORAGE)&&structure.energy>=creep.carryCapacity;}});
        // console.log(g[0]);
        // var Esource=creep.pos.findClosestByPath(storages);
            if(creep.withdraw(g[0],RESOURCE_ENERGY,creep.carryCapacity)==ERR_NOT_IN_RANGE)
            creep.moveTo(g[0], {visualizePathStyle: {stroke: '#ffaa00'}});
	    }else{
	        var target=creep.pos.findClosestByPath(targets);
	        if(creep.transfer(target,RESOURCE_ENERGY)==ERR_NOT_IN_RANGE)
            creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
	    }
        }
    }
}

module.exports = role;