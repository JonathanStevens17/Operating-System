function App(n, m, s){

    //Declare your instance variables here.
    this.name = n
    this.memory = m
    this.state = s

    //Declare the instance function open here.
    this.open = function(){
      this.s = "active";


    };
    //Declare the instance function sleep here.
    this.sleep = function(){
      if(this.s= "active"){
      this.s = "sleep";
      this.m = (this.m)/2

    }
  };


    //Declare the instance function active here.
    this.active = function(){
      if(this.s="sleep"){
        this.s="active";
        this.m=2*(this.m)
      };

    }


    //Declare the instance function close here.
    this.close = function(){
      if(this.s!=null){
        this.s=null;
        this.m=0;
      }
    };



}

//Use the constructor to create 4 App objects below.
var spotify = new App("spotify",350,"active");
var candycrush = new App("candycrush",400,"sleep")
var netflix = new App("netflix",600,"active")
var twitch = new App("twitch",700,"sleep")
//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
