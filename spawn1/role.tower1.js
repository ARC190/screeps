var TowerSub = {
        run: function(tower){
            console
            if(Game.time%2==0){
                var walls=/*Memory.rooms[*/tower.room.find/*].Structures;*/(FIND_STRUCTURES,{
                    filter: (structure)=> {
                        return(structure.structureType==STRUCTURE_WALL||
                               structure.structureType==STRUCTURE_RAMPART)&&
                               structure.hits < structure.hitsMax;
                    
                }});
            if(walls.length!=0){
            var mostDamagedWall=walls[0];
            for(var wall=1;wall<walls.length;wall++){
                if (walls[wall].hits<mostDamagedWall.hits){
                    mostDamagedWall=walls[wall];
                }
            }
                tower.repair(mostDamagedWall);
            }
            }
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) =>{
                return structure.hits < structure.hitsMax&&
                     !(structure.structureType==STRUCTURE_WALL||
                       structure.structureType==STRUCTURE_RAMPART);
            } 
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
        }
}

module.exports = TowerSub;