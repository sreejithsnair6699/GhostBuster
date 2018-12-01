module objects {
    export class Ocean extends objects.BitmapGameObject {
        // private instance variables
        private verticalSpeed:number;
        private horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("cloud");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            if(this.y >=800) {
                this.Reset();
            }
        }

        private _move():void {
            this.y += this.verticalSpeed;
            this.x += this.horizontalSpeed;
        }

        // public methods

        public Reset(): void {
            this.y = -960;
            this.x = Math.floor((Math.random() * 1000) - this.HalfWidth);

        }        
        
        public Start(): void {
            this.Reset();
            this.alpha = .15;
            this.scaleX = 1.5;
            this.scaleY = 1.5;
            this.verticalSpeed = Math.floor((Math.random() * 5) + 5);
            this.horizontalSpeed = Math.floor((Math.random() * 3) + 3);
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
            
        }

    }
}