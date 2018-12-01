module managers {
    export class Bullet {
        // private instance variables
        private _bullets: objects.Bullet[];
        private _playerBullets: objects.PlayerBullet[];
        private _bulletNum: number;
        private _pbulletNum: number;
        private _currentBullet: objects.Bullet;
        private _pcurrentBullet: objects.PlayerBullet;
        private _currentBulletIndex: number;
        private _pcurrentBulletIndex: number;
        private _slotSound:createjs.AbstractSoundInstance;

        // public properties
        get Bullets():objects.Bullet[] {
            return this._bullets;
        }

        set Bullets(newBulletArray:objects.Bullet[]) {
            this._bullets = newBulletArray;
        }

        get PlayerBullets():objects.PlayerBullet[] {
            return this._playerBullets;
        }

        set PlayerBullets(newBulletArray:objects.PlayerBullet[]) {
            this._playerBullets = newBulletArray;
        }

        get BulletNum():number {
            return this._bulletNum;
        }

        set BulletNum(numberOfBullets:number) {
            this._bulletNum = numberOfBullets;
        }

        get PlayerBulletNum():number {
            return this._pbulletNum;
        }

        set PlayerBulletNum(numberOfBullets:number) {
            this._pbulletNum = numberOfBullets;
        }

        get CurrentBullet():objects.Bullet {
            return this._currentBullet;
        }

        set CurrentBullet(newBulletPointer:objects.Bullet) {
            this._currentBullet = newBulletPointer;
        }

        get PlayerCurrentBullet():objects.PlayerBullet {
            return this._pcurrentBullet;
        }

        set PlayerCurrentBullet(newBulletPointer:objects.PlayerBullet) {
            this._pcurrentBullet = newBulletPointer;
        }

        // constructor
        constructor(bulletNum:number = 100) {

            this.BulletNum = bulletNum;
            this.PlayerBulletNum = bulletNum;

            this.Start();
        }

        // private methods


        // public methods
        public Start():void {
            // create the bullets container
            this.Bullets = new Array<objects.Bullet>();
            this.PlayerBullets = new Array<objects.PlayerBullet>();

            // fill up bullet container
            for (let count = 0; count < this.BulletNum; count++) {
                this.Bullets[count] = new objects.Bullet();
            }

            for (let count = 0; count < this.PlayerBulletNum; count++) {
                this.PlayerBullets[count] = new objects.PlayerBullet();
            }

            // set the current bullet to the first bullet object
            this._currentBulletIndex = 0;
            this.CurrentBullet = this.Bullets[this._currentBulletIndex];

            this._pcurrentBulletIndex = 0;
            this.PlayerCurrentBullet = this.PlayerBullets[this._pcurrentBulletIndex];
            
            
        }

        public Update():void {
            this.Bullets.forEach(bullet => {
                bullet.Update();
            });
            this.PlayerBullets.forEach(bullet => {
                bullet.Update();
            });
        }

        public FireBullet(spawnPoint:util.Vector2, direction:util.Vector2, flag:number):void {
            
            this.CurrentBullet.Position = spawnPoint;
            this.CurrentBullet.x = spawnPoint.x;
            this.CurrentBullet.y = spawnPoint.y;
            this.CurrentBullet.Direction = direction;
            this.CurrentBullet.IsInPlay = true;
            
            this._currentBulletIndex++;
            if(this._currentBulletIndex >= this.Bullets.length) {
                this._currentBulletIndex = 0;
            }

            if(flag == 1){
                this._slotSound = createjs.Sound.play("bulletSound");
                this._slotSound.volume = 0.1;
            }
            this.CurrentBullet = this.Bullets[this._currentBulletIndex];
            
        }
    }
}