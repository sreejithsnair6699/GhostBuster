//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    var canvas;
    var stage;
    var assetManager;
    var currentScene;
    var currentState;
    var scoreBoard;
    var textureMap;
    var assetManifest = [
        { id: "ocean", src: "./Assets/images/ocean.gif" },
        { id: "textureMap", src: "./Assets/sprites/texturemap.png" },
        { id: "engineSound", src: "./Assets/audio/engine.ogg" },
        { id: "thunderSound", src: "./Assets/audio/thunder.ogg" },
        { id: "yaySound", src: "./Assets/audio/yay.ogg" },
        { id: "bulletSound", src: "./Assets/audio/bullet.mp3" },
        { id: "explosionSound", src: "./Assets/audio/explosion.mp3" }
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets listed in the manifest
        assetManager.on("complete", Start); // call Start when assets are finished loading
    }
    function Start() {
        console.log("%c Game Started...", "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage; // passing a reference to the stage globally
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        var textureData = {
            images: [assetManager.getResult("textureMap")],
            "frames": [
                [1, 1, 16, 16, 0, 0, 0],
                [19, 1, 226, 178, 0, 0, 0],
                [247, 1, 44, 40, 0, 0, 0],
                [293, 1, 44, 40, 0, 0, 0],
                [339, 1, 44, 40, 0, 0, 0],
                [385, 1, 44, 40, 0, 0, 0],
                [431, 1, 44, 40, 0, 0, 0],
                [1, 181, 44, 40, 0, 0, 0],
                [47, 181, 44, 40, 0, 0, 0],
                [93, 181, 44, 40, 0, 0, 0],
                [139, 181, 44, 40, 0, 0, 0],
                [185, 181, 44, 40, 0, 0, 0],
                [231, 181, 93, 74, 0, 0, 0],
                [326, 181, 93, 74, 0, 0, 0],
                [1, 257, 93, 74, 0, 0, 0],
                [96, 257, 65, 65, 0, 0, 0],
                [163, 257, 65, 65, 0, 0, 0],
                [230, 257, 65, 65, 0, 0, 0],
                [297, 257, 65, 65, 0, 0, 0],
                [364, 257, 65, 65, 0, 0, 0],
                [431, 257, 65, 65, 0, 0, 0],
                [1, 333, 65, 65, 0, 0, 0],
                [68, 333, 62, 63, 0, 0, 0],
                [132, 333, 65, 65, 0, 0, 0],
                [199, 333, 65, 65, 0, 0, 0],
                [266, 333, 65, 65, 0, 0, 0],
                [333, 333, 145, 47, 0, 0, 0],
                [1, 400, 145, 47, 0, 0, 0]
            ],
            animations: {
                bullet: { frames: [0] },
                cloud: { frames: [1] },
                coin: {
                    frames: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    speed: 0.5
                },
                enemy: {
                    frames: [12, 13, 14],
                    speed: 0.4
                },
                explosion: {
                    frames: [15, 16, 17, 18, 19, 20, 21],
                    speed: 0.1
                },
                island: { frames: [22] },
                plane: {
                    frames: [23, 24, 25],
                    speed: 0.4
                },
                restartButton: { frames: [26] },
                startButton: { frames: [27] }
            }
        };
        // setup global spritesheet
        textureMap = new createjs.SpriteSheet(textureData);
        managers.Game.textureMap = textureMap;
        // setup global scoreboard and UI
        scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = scoreBoard;
        // setup initial scene
        currentState = config.Scene.START;
        managers.Game.currentState = currentState;
        Main();
    }
    // this is the main game loop
    function Update() {
        currentScene.Update();
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }
        stage.update();
    }
    function Main() {
        // clean up current scene
        if (currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.Over();
                break;
        }
        managers.Game.currentScene = currentScene;
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map