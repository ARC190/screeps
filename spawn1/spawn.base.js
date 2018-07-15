var SpawnBase ={
    run: function(spawn,current,target,Role,body,newname){
        if(current<target){
            Game.spawns[spawn].spawnCreep[body,newname,{memory:{role: Role}}]
        }
    }
}

module.exports = SpawnBase;