class Form{
    constructor(){}
    display(){
        // creating a heading
        var title = createElement('h1');
        title.html("CAR RACING GAME");
        title.position(130,10);

        //creating input box
        var input = createInput("Name");
        input.position(130,160);

        //creating button
        var button = createButton("PLAY");
        button.position(250,200);

        button.mousePressed(function(){
            // hiding inputbox & button
            input.hide();
            button.hide();

            //getting value of input box
            var name = input.value();

            // increase playerCount by 1 as player enters
            playerCount = playerCount+1;

            //update player name in database
            player.updateName(name);

            //update player count in database
            player.updateCount(playerCount);
            

            // showing a greeting on screen
            var greeting = createElement('h3');
            greeting.html("Hello "+name);
            greeting.position(130,180);
        });

    }
}