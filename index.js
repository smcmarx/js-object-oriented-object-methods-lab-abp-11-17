function BoardMember(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training

  }

  let polishedBoardMember = new BoardMember("Mr.Polished","New York", "law" )

  BoardMember.prototype.veto = function(){
    return 'No, I must disagree'
  }

  BoardMember.prototype.approve = function(){
    return "You can do that!"
  }

  BoardMember.prototype.doCharity = function(){
    return "I like to help people."
  }

  BoardMember.prototype.releasePressStatement = function(){
    return "You will see great things from Scuber."
  }

  BoardMember.prototype.sayHi = function(){
    return "Hi, my name is ${this.name}, I am from ${this.homeState}, and I was trained in ${this.training}."
  }

new BoardMember().veto()






/*
  veto(){`No, I must disagree`}
  approve(){`You can do that!`}
  doCharity(){`I like to help people.`}
  releasePressStatement(){`You will see great things from Scuber.`}
  sayHi(){}

}

class Ceo extends BoardMember{

}
/*
function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training

  }
  BoardMember.prototype.veto = function(){
    return "No, I must disagree"
  }

  BoardMember.prototype.approve = function(){
    return "You can do that!"
  }

  BoardMember.prototype.doCharity = function(){
    return "I like to help people."
  }

  BoardMember.prototype.releasePressStatement = function(){
    return "You will see great things from Scuber."
  }

  BoardMember.prototype.sayHi = function(){
    return "Hi, my name is ${this.name}, I am from ${this.homeState}, and I was trained in ${this.training}."
  }

*/


let polishedBoardMember = new BoardMember("Mr.Polished","New York", "Law" )
