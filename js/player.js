class Player
{

constructor(){}
// getting the count of players from database
getCount()
{
    // to get database reference we use function database.ref
    var playerCountRef = database.ref('playerCount');
    // on any value change in playerCount database , we are reading it
    playerCountRef.on("value",function(data){
        playerCount = data.val();
    });
}
updateCount(count)
{
    // updating the playercount in database, ('/') means using the last reffered database
    database.ref('/').update({
        playerCount: count
    });
}
// Jason = > updateName("Jason") => player1 =>name = Jason
updateName(playerName)
{
    // Table name =>  "player "+playerCount
    //playerCount => 0
    // Name => Jason =>SUbmit button =>  playerCount = 1 
    // player1 = Jason

    //Name =>Rajbir => PlayerCount = 2
    // player2 = Rajbir

    // Name = >ABC =>PlayerCount = 3
    //player3 = ABC

    var playerIndex = "player" +playerCount;
    database.ref(playerIndex).set({
        name: playerName
    });
}

}