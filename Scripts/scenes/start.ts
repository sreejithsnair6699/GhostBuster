module scenes {
    export class Start extends objects.Scene {
        // private instance variable
         private _welcomeLabel:objects.Label;
         private _ocean:objects.Ocean;
         private _startButton:objects.Button;
         private _background:objects.Background;
         private _overbackground:objects.OverlayBackground;
         private _backgroundSound:createjs.AbstractSoundInstance;

        // public properties

        // constructor
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Start(): void {
            this._background = new objects.Background();
            this._overbackground = new objects.OverlayBackground("background");

            this._ocean = new objects.Ocean();
            this._startButton = new objects.Button("startButton", 450, 650, true);

            this._backgroundSound = createjs.Sound.play("backgroundSound");
            this._backgroundSound.volume = 0.05;
            this._backgroundSound.loop = -1;

            this.Main();
        }        
        
        public Update(): void {
            this._background.Update();
            this._ocean.Update();
        }
        
        public Destroy(): void {
            this.removeAllChildren();
        }
        
        public Reset(): void {

        }
        
        public Main(): void {
            // adds ocean to the stage
        this.addChild(this._background);
        this.addChild(this._overbackground);
        
        this.addChild(this._ocean);

        this.addChild(this._welcomeLabel);

        this.addChild(this._startButton);

        this._startButton.on("click", ()=>{
            managers.Game.currentState = config.Scene.PLAY;
        });

    }


    }
}