var managers;
(function (managers) {
    var Bullet = /** @class */ (function () {
        // constructor
        function Bullet(bulletNum) {
            if (bulletNum === void 0) { bulletNum = 100; }
            this.BulletNum = bulletNum;
            this.PlayerBulletNum = bulletNum;
            this.Start();
        }
        Object.defineProperty(Bullet.prototype, "Bullets", {
            // public properties
            get: function () {
                return this._bullets;
            },
            set: function (newBulletArray) {
                this._bullets = newBulletArray;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bullet.prototype, "PlayerBullets", {
            get: function () {
                return this._playerBullets;
            },
            set: function (newBulletArray) {
                this._playerBullets = newBulletArray;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bullet.prototype, "BulletNum", {
            get: function () {
                return this._bulletNum;
            },
            set: function (numberOfBullets) {
                this._bulletNum = numberOfBullets;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bullet.prototype, "PlayerBulletNum", {
            get: function () {
                return this._pbulletNum;
            },
            set: function (numberOfBullets) {
                this._pbulletNum = numberOfBullets;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bullet.prototype, "CurrentBullet", {
            get: function () {
                return this._currentBullet;
            },
            set: function (newBulletPointer) {
                this._currentBullet = newBulletPointer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bullet.prototype, "PlayerCurrentBullet", {
            get: function () {
                return this._pcurrentBullet;
            },
            set: function (newBulletPointer) {
                this._pcurrentBullet = newBulletPointer;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        Bullet.prototype.Start = function () {
            // create the bullets container
            this.Bullets = new Array();
            this.PlayerBullets = new Array();
            // fill up bullet container
            for (var count = 0; count < this.BulletNum; count++) {
                this.Bullets[count] = new objects.Bullet();
            }
            for (var count = 0; count < this.PlayerBulletNum; count++) {
                this.PlayerBullets[count] = new objects.PlayerBullet();
            }
            // set the current bullet to the first bullet object
            this._currentBulletIndex = 0;
            this.CurrentBullet = this.Bullets[this._currentBulletIndex];
            this._pcurrentBulletIndex = 0;
            this.PlayerCurrentBullet = this.PlayerBullets[this._pcurrentBulletIndex];
        };
        Bullet.prototype.Update = function () {
            this.Bullets.forEach(function (bullet) {
                bullet.Update();
            });
            this.PlayerBullets.forEach(function (bullet) {
                bullet.Update();
            });
        };
        Bullet.prototype.FireBullet = function (spawnPoint, direction, flag) {
            this.CurrentBullet.Position = spawnPoint;
            this.CurrentBullet.x = spawnPoint.x;
            this.CurrentBullet.y = spawnPoint.y;
            this.CurrentBullet.Direction = direction;
            this.CurrentBullet.IsInPlay = true;
            this._currentBulletIndex++;
            if (this._currentBulletIndex >= this.Bullets.length) {
                this._currentBulletIndex = 0;
            }
            if (flag == 1) {
                this._slotSound = createjs.Sound.play("bulletSound");
                this._slotSound.volume = 0.1;
            }
            this.CurrentBullet = this.Bullets[this._currentBulletIndex];
        };
        return Bullet;
    }());
    managers.Bullet = Bullet;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map