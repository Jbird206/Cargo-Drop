export class CargoDrop {
  constructor(player, dropSession, playerRun, playerRest, playerEvade, dropBegining ){
    this.player = player; //name
    this.dropSession = dropSession; //age
    this.playerRun = playerRun; //food
    this.playerRest = playerRest; //sleep
    this.playerEvade = playerEvade; //play
    this.happyLevel = true;
    this.dropBeginning = dropBegining; //originallevel
  }
  // constructor(name, age, foodLevel, sleepLevel, playLevel, originalLevel){
  //   this.name = name;
  //   this.age = age;
  //   this.foodLevel = foodLevel;
  //   this.sleepLevel= sleepLevel; 
  //   this.playLevel = playLevel;
  //   this.happyLevel = true;
  //   this.originalLevel = originalLevel;
  // }

  setRun(){
    setInterval(() => {
      this.playerRun--;
    }, 1000);
  }

  setRest(){
    setInterval(() => {
      this.playerRest--;
    }, 2000);
  }

  setEvade(){
    setInterval(() => {
      this.playerEvade--;
    }, 1500);
  }

  setSession(){
    setInterval(() => {
      this.dropSession++;
    }, 5000);
  }

  sleepCargoDrop(){
    this.playerRest = this.dropBeginning;
  }

  runCargoDrop(){
    this.playerRun += Math.round(this.dropBegining / 3);
    if (this.playerRun > this.dropBegining){
      this.playerRun = this.dropBegining;
    }
  }
  // feedTamagotchi(){
  //   this.foodLevel += Math.round(this.originalLevel / 3);
  //   if (this.foodLevel  > this.originalLevel){
  //     this.foodLevel = this.originalLevel;
   // }
 // }
  evadeCargoDrop(){
    this.playerEvade += Math.round(this.dropBegining / 2);
    if (this.playerEvade > this.dropBeginning){
      this.playerEvade = this.dropBeginning;
    }
  }
  // playTamagotchi(){
  //   this.playLevel += Math.round(this.originalLevel / 2);
  //   if (this.playLevel  > this.originalLevel){
  //     this.playLevel = this.originalLevel;
    
  //}
}


