var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep,ThisRoom) {
        if(Game.rooms[ThisRoom].energyAvailable<Game.rooms[ThisRoom].energyCapacityAvailable){
        if(!creep.memory.harvesting && creep.carry.energy == 0) {
            creep.memory.harvesting = true;
            creep.say('🔄 harvest');
	    }
	    if(creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.harvesting = false;
	        creep.say('🚧 deliver');
	    }
	        if(creep.carry.energy < creep.carryCapacity&&creep.memory.harvesting) {
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }else{
                    var targets = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                                 structure.energy < structure.energyCapacity;
                            }
                    });
                    if(targets.length > 0) {
                        if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#0000ff'}});
                        }
                    } 
                }
            }
            else{
                var roleprogression=require ('role.builder');
                module.exports = roleprogression.run(creep);
            }
    }
};

module.exports = roleHarvester;