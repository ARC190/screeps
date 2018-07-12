var SpawnBase ={
    run: function(spawn,current,target,Role,body,newname,source){
        if(current<target){
            Game.spawns[spawn].spawnCreep[body,newname,{memory:{role: Role,AssignedSource: source}}]
        }
    }
}

module.exports = SpawnBase;