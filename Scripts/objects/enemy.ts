module objects {
    export class Enemy extends objects.SpriteGameObject {
        // private instance variables
        private _verticalSpeed:number;
        private _horizontalSpeed:number;
        private _frame:number;
        private _bulletSpawn: util.Vector2;

        // public properties

        // constructor
        constructor() {
            super("enemy");
            this._frame = 0;

            this.Start();
        }

        // private methods
        private _move():void {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.y > 800 + this.Height) {
                this.Reset();
            }

            if(createjs.Ticker.getTicks()){
                this._frame++;
            }
            if((this._frame % 90 == 0) && (this.y > 0)) {
                managers.Game.bulletManager.FireBullet(
                    util.Vector2.Add(this.Position, this._bulletSpawn), util.Vector2.down(), 0);
                    this._frame = 0;
            }
            
        }

        // public methods

        public Reset(): void {
            this._verticalSpeed = Math.floor((Math.random() * 2) + 2);
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2);
            this.y = -this.Height * Math.floor((Math.random() * 5) + 2);
            this.x = Math.floor((Math.random() * (1500 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this._bulletSpawn = new util.Vector2(0, 5 + this.HalfHeight);
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
        }
    }
}