module objects {
    export class Island extends objects.SpriteGameObject {
        // private instance variables
        private _verticalSpeed:number;
        private _coin: objects.Coin;

        // public properties
        get Coin():objects.Coin {
            return this._coin;
        }

        // constructor
        constructor() {
            super("island");

            this.Start();
        }

        // private methods
        private _move():void {
            this.y += this._verticalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.y > 480 + this.Height) {
                this.Reset();
            }
        }

        private _resetCoin() {
            this._coin.Reset();
            this._coin.Position = this.Position;
            this._coin.x = this.x;
            this._coin.y = this.y;
        }

        // public methods

        public Reset(): void {
            this._verticalSpeed = 5;
            this.y = -this.Height;
            this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
            this._resetCoin();
        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this._coin = new objects.Coin();
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
            this._coin.Update();
        }

        public Destroy(): void {
        }
    }
}