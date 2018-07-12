var role = {

    /** @param {Creep} creep **/
    run: function(creep,source,ThisRoom) {
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[source]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[source], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
                    var targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {
                                return (structure.structureType == STRUCTURE_CONTAINER);
                            }
                    });
                    for(var target in targets){
                        creep.transfer(targets[target], RESOURCE_ENERGY);
                    }
            }
            };

module.exports = role;