var sub={
    run:function(ThisRoom){
       if(Game.time%10==0){
        console.log('Enegry availabale in room "' + ThisRoom + '" ' + Game.rooms[ThisRoom].energyAvailable + '\n');
    
    
    var ScreepCounter=Memory.rooms[ThisRoom].ScreepCounter;
    
    for(var i=0; i<Memory.roles.length; i++){
        ScreepCounter[1][i] = _.filter(Game.creeps, (creep) => creep.memory.role == Memory.roles[i]);
        if(ScreepCounter[1][i].length != ScreepCounter[0][i]){ 
            ScreepCounter[0][i] = ScreepCounter[1][i].length;
        }
    }
           Memory.rooms[ThisRoom].Structures[0] = Game.rooms[ThisRoom].find(FIND_STRUCTURES,{filter:(s)=>{
            return s.structureType==STRUCTURE_SPAWN;
        }});}
        
       if(Game.time%10==1){
           Memory.rooms[ThisRoom].Structures[1] = Game.rooms[ThisRoom].find(FIND_STRUCTURES,{filter:(s)=>{
            return s.structureType==STRUCTURE_EXTENSION;
        }});}
        
       if(Game.time%10==2){
           Memory.rooms[ThisRoom].Structures[2] = Game.rooms[ThisRoom].find(FIND_STRUCTURES,{filter:(s)=>{
            return s.structureType==STRUCTURE_CONTAINER;
        }});}
        
       if(Game.time%10==3){
           Memory.rooms[ThisRoom].Structures[3] = Game.rooms[ThisRoom].find(FIND_STRUCTURES,{filter:(s)=>{
            return s.structureType==STRUCTURE_STORAGE;
        }});}
        
       if(Game.time%10==4){
           Memory.rooms[ThisRoom].Structures[4] = Game.rooms[ThisRoom].find(FIND_STRUCTURES,{filter:(s)=>{
            return s.structureType==STRUCTURE_TOWER;
        }});}
        
       if(Game.time%10==5){
           Memory.rooms[ThisRoom].Structures[5] = Game.rooms[ThisRoom].find(FIND_STRUCTURES,{filter:(s)=>{
            return s.structureType==STRUCTURE_WALL;
        }});}
        
       if(Game.time%10==6){
           Memory.rooms[ThisRoom].Structures[6] = Game.rooms[ThisRoom].find(FIND_STRUCTURES,{filter:(s)=>{
            return s.structureType==STRUCTURE_RAMPART;
        }});}
        
       if(Game.time%10==7)
           Memory.rooms[ThisRoom].Structures[7] = Game.rooms[ThisRoom].find(FIND_CONSTRUCTION_SITES);
    }
}

module.exports=sub;