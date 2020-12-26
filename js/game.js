class Game{

    constructor(){}
    // reading gamestate
    getState()
    {

        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }
    // updating gamestate
    update(state)
    {
        database.ref('/').update({

            gameState: state
        });
    }
    start()
    {
        // only if gamestate is 0, we will create a new player 
        if(gameState===0)
        {
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();

        }
    }

}