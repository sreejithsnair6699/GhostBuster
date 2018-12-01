var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var PlayerBullet = /** @class */ (function (_super) {
        __extends(PlayerBullet, _super);
        // Constructors
        function PlayerBullet() {
            var _this = _super.call(this, "playerbullet") || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(PlayerBullet.prototype, "Direction", {
            // public properties
            get: function () {
                return this._direction;
            },
            set: function (newDirection) {
                this._direction = newDirection;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerBullet.prototype, "IsInPlay", {
            get: function () {
                return this._isInPlay;
            },
            set: function (newState) {
                this._isInPlay = newState;
                if (!this._isInPlay) {
                    this.Reset();
                }
                this._velocity = util.Vector2.Mulitply(this.Direction, this._speed);
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        PlayerBullet.prototype._move = function () {
            this._updatePosition();
            this.Position = util.Vector2.Add(this.Position, this._velocity);
            this.x = this.Position.x;
            this.y = this.Position.y;
        };
        PlayerBullet.prototype._checkBounds = function () {
            if ((this.y > (800 + this.HalfHeight)) || (this.y < -this.HalfHeight)) {
                this.IsInPlay = false;
                this.Reset();
            }
        };
        // public methods
        PlayerBullet.prototype.Reset = function () {
            this.x = -10000;
            this.y = -10000;
            this._updatePosition();
            this.Direction = util.Vector2.zero();
        };
        PlayerBullet.prototype.Start = function () {
            this._speed = 15;
            this.IsInPlay = false;
        };
        PlayerBullet.prototype.Update = function () {
            if (this.IsInPlay) {
                this._move();
                this._checkBounds();
            }
        };
        PlayerBullet.prototype.Destroy = function () {
        };
        return PlayerBullet;
    }(objects.SpriteGameObject));
    objects.PlayerBullet = PlayerBullet;
})(objects || (objects = {}));
//# sourceMappingURL=playerbullet.js.map