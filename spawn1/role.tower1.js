var TowerSub = {
        run: function(tower){
            /*if(Game.time%10==0){
                var walls=tower.room.find(FIND_STRUCTURES,{filter: (structure)=> (structure.structureType==STRUCTURE_WALL||structure.structureType==STRUCTURE_RAMPART)&&structure.hits < structure.hitsMax});
            if(walls.length!=0){
            var mostDamagedWall=walls[0];
            for(var wall in walls){
                console.log(wall.hits);
                if (wall.hits<mostDamagedWall.hits){
                    mostDamagedWall=wall;
                }
            }
                tower.repair(mostDamagedWall);
            }
            }*/
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax&&!(structure.structureType==STRUCTURE_WALL||structure.structureType==STRUCTURE_RAMPART)
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