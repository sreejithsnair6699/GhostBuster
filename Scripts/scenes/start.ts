module scenes {
    export class Start extends objects.Scene {
        // private instance variable
         private _welcomeLabel:objects.Label;
         private _ocean:objects.Ocean;
         private _startButton:objects.Button;
         private _background:objects.Background;

        // public properties

        // constructor
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Start(): void {
            this._background = new objects.Background("skybackground");

            this._ocean = new objects.Ocean();
            this._welcomeLabel = new objects.Label("Mail Pilot", "60px", "Consolas", "#FFFF00", 750, 400, true);
            this._startButton = new objects.Button("startButton", 750, 520, true);

            this.Main();
        }        
        
        public Update(): void {
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
        
        this.addChild(this._ocean);

        this.addChild(this._welcomeLabel);

        this.addChild(this._startButton);

        this._startButton.on("click", ()=>{
            managers.Game.currentState = config.Scene.PLAY;
        });

    }


    }
}