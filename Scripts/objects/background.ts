module objects {
    export class Background extends objects.BitmapGameObject {
        // private instance variables
        private verticalSpeed:number;
        private flag:number;

        // public properties

        // constructor
        constructor() {
            super("skybackground");
            this.flag = 0;

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            if(this.y >=0) {
                if(this.flag == 0){
                    this.scaleY = -1;
                    this.scaleX = -1;
                    this.rotation = 180;
                    this.flag = 1;
                }  
                if(this.flag == 1){
                    this.scaleY = 1;
                    this.scaleX = 1;
                    this.rotation = 360;
                    this.flag = 0;
                }  
                this.Reset();             
            }
        }

        private _move():void {
            this.y += this.verticalSpeed;
        }

        // public methods

        public Reset(): void {
            this.y = -1000;

        }        
        
        public Start(): void {
            this.Reset();
            this.verticalSpeed = 12;
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
            
        }

    }
}