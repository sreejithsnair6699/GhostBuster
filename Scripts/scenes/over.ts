namespace scenes {
  export class Over extends objects.Scene {
    // private instance variable
    private _gameOverLabel: objects.Label;
    private _ocean: objects.Ocean;
    private _restartButton: objects.Button;
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
      this._gameOverLabel = new objects.Label(
        "Game Over",
        "60px",
        "Consolas",
        "#FFFF00",
        750,
        400,
        true
      );
      this._restartButton = new objects.Button("restartButton", 750, 520, true);

      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
    }

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Reset(): void {}

    public Main(): void {
      // adds ocean to the stage
      this.addChild(this._background);

      this.addChild(this._ocean);

      this.addChild(this._gameOverLabel);

      this.addChild(this._restartButton);

      this._restartButton.on("click", function() {
        managers.Game.currentState = config.Scene.PLAY;
        managers.Game.scoreBoard.Reset();
      });

      managers.Game.scoreBoard.AddHighScore(this);
    }
  }
}
