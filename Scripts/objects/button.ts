module objects {
    export class Button extends objects.SpriteGameObject {
    
        // constructor

        /**
         * Creates an instance of Button.
         * @param {string} imageString
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        constructor(imageString:string, x:number = 0, y:number = 0, isCentered:boolean = false) {
            super(imageString);

            if(isCentered) {
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }

            this.x = x;
            this.y = y;

            
            this.scaleX = 2;
            this.scaleY = 2;

            // event listeners
            this.on("mouseover", this._over);
            this.on("mouseout", this._out);
        }
        
        // private methods

        // event handlers
        private _over(event:createjs.MouseEvent):void {
            this.alpha = 0.7; // 70% opacity
        }

        private _out(event:createjs.MouseEvent):void {
            this.alpha = 1.0; // 100% opacity
        }

        // public methods
        public Reset(): void {

        }

        public Start(): void {
        }

        public Update(): void {

        }

        public Destroy(): void {

        }
    }
}