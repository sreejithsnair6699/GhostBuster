module objects {
    export class Player extends objects.SpriteGameObject {
        // private instance variables
        _bulletSpawn:util.Vector2;

        // public properties
        get BulletSpawn():util.Vector2 {
            return this._bulletSpawn;
        }

        set BulletSpawn(newSpawnPoint:util.Vector2) {
            this._bulletSpawn = newSpawnPoint;
        }
        
        // constructors
        constructor() {
            super("plane");

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.y = 435;
            this.x = 320;
        }

        public Update():void {
            this.Move();
            this._updatePosition();
            this.BulletSpawn = new util.Vector2(this.x - 6, this.y - this.HalfHeight - 2);

            // checks the right boundary
            if(this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }

            // check the left boundary
            if(this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
        }

        public Move():void {
            // this.x = managers.Game.stage.mouseX;

            let direction = (this.rotation -90) * -1;
            let degToRad = Math.PI / 180.0;


            // standard movement for top scroller - left and right
            
            if(managers.Input.moveRight) {
                this.x += 10;
            }

            if(managers.Input.moveLeft) {
                this.x -= 10;
            }
            

            /*

            // standard movement - forward - back

            if(managers.Input.moveForward) {
                this.y -= 5;
            }

            if(managers.Input.moveBackward) {
                this.y += 5;
            }
            */

            /* move in direction that player is facing */

            /*
            if(managers.Input.moveForward) {
                this.x += 5 * Math.cos(direction * (degToRad));
                this.y -= 5 * Math.sin(direction * degToRad);
            }

            if(managers.Input.moveBackward) {
                this.x -= 5 * Math.cos(direction * (degToRad));
                this.y += 5 * Math.sin(direction * degToRad);
            }

            if(managers.Input.moveLeft) {
                this.rotation -= 5;
            }

            if(managers.Input.moveRight) {
                this.rotation += 5;
            }
            */


            /* gamepad controls 
            if(managers.Input.gamepad1.Axis[config.Gamepad.HORIZONTAL] > 0) {
                this.x += 10;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.HORIZONTAL] < 0) {
                this.x -= 10;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.VERTICAL] > 0) {
                this.y += 5;
            }

            if(managers.Input.gamepad1.Axis[config.Gamepad.VERTICAL] < 0) {
                this.y -= 5;
            }
            */
        }

        public Reset():void {

        }

        public Destroy():void {
            
        }
    }
}