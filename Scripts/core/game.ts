//IIFE - Immediately Invoked Function Expression
(function() {
  // game variables
  let canvas: HTMLCanvasElement;
  let stage: createjs.Stage;
  let assetManager: createjs.LoadQueue;

  let currentScene: objects.Scene;
  let currentState: config.Scene;

  let scoreBoard: managers.ScoreBoard;

  let textureMap:createjs.SpriteSheet;

  let assetManifest = [
    { id: "ocean", src: "./Assets/images/ocean.gif" },
    
    { id: "cloud", src: "./Assets/images/cloud.png" },
    { id: "skybackground", src: "./Assets/images/skybackground.jpg" },
    { id: "textureMap", src: "./Assets/sprites/texturemap.png" },
    { id: "engineSound", src: "./Assets/audio/engine.ogg" },
    { id: "thunderSound", src: "./Assets/audio/thunder.ogg" },
    { id: "yaySound", src: "./Assets/audio/yay.ogg" },
    { id: "bulletSound", src: "./Assets/audio/bullet.mp3" },
    { id: "explosionSound", src: "./Assets/audio/explosion.mp3" }
  ];

  function Init(): void {
    assetManager = new createjs.LoadQueue();
    managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
    assetManager.installPlugin(createjs.Sound); // enable sound preloading
    assetManager.loadManifest(assetManifest); // preloads all assets listed in the manifest
    assetManager.on("complete", Start); // call Start when assets are finished loading
  }

  function Start(): void {
    console.log(`%c Game Started...`, "color: blue; font-size: 20px;");
    canvas = document.getElementsByTagName("canvas")[0];
    stage = new createjs.Stage(canvas);
    managers.Game.stage = stage; // passing a reference to the stage globally
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60; // game will run at 60fps
    createjs.Ticker.on("tick", Update);

    let textureData = {
      images: [assetManager.getResult("textureMap")],
  
      "frames": [
        [0, 0, 100, 75, 0, 0, 0],
    [100, 0, 100, 75, 0, 0, 0],
    [0, 75, 100, 75, 0, 0, 0],
    [100, 75, 100, 75, 0, 0, 0],
    [0, 150, 226, 178, 0, 0, 0],
    [0, 328, 44, 40, 0, 0, 0],
    [44, 328, 44, 40, 0, 0, 0],
    [88, 328, 20, 30, 0, 0, 0],
    [108, 328, 100, 50, 0, 0, 0],
    [0, 378, 100, 50, 0, 0, 0],
    [100, 378, 100, 50, 0, 0, 0],
    [0, 428, 100, 50, 0, 0, 0],
    [100, 428, 100, 50, 0, 0, 0],
    [0, 478, 62, 63, 0, 0, 0],
    [62, 478, 100, 100, 0, 0, 0],
    [0, 578, 100, 100, 0, 0, 0],
    [100, 578, 20, 30, 0, 0, 0],
    [120, 578, 100, 100, 0, 0, 0],
    [0, 678, 100, 100, 0, 0, 0],
    [100, 678, 100, 100, 0, 0, 0],
    [0, 778, 100, 100, 0, 0, 0],
    [100, 778, 100, 100, 0, 0, 0],
    [0, 878, 100, 100, 0, 0, 0]
    ],
  
      animations: {
        bullet: { frames: [7] },
        cloud: { frames: [4] },
        coin: {
          frames: [5,6],
          speed: 0.5
        },
        enemy: {
          frames: [0,1,2,3],
          speed: 0.6
        },
        explosion: {
          frames: [8,9,10,11,12],
          speed: 0.2
        },
        island: { frames: [13] },
        plane: {
          frames: [15]
        },
        restartButton: { frames: [22] },
        startButton: { frames: [14] }
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
  function Update(): void {
    currentScene.Update();

    if (currentState != managers.Game.currentState) {
      currentState = managers.Game.currentState;
      Main();
    }

    stage.update();
  }

  function Main(): void {
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
