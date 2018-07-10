var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(Game.rooms['E55N23'].energyAvailable<Game.rooms['E55N23'].energyCapacityAvailable){
	        if(creep.carry.energy < creep.carryCapacity) {
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
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