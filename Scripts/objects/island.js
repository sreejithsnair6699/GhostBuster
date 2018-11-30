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
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // constructor
        function Island() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Island.prototype, "Coin", {
            // public properties
            get: function () {
                return this._coin;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        Island.prototype._move = function () {
            this.y += this._verticalSpeed;
            this._updatePosition();
        };
        Island.prototype._checkBounds = function () {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
        };
        Island.prototype._resetCoin = function () {
            this._coin.Reset();
            this._coin.Position = this.Position;
            this._coin.x = this.x;
            this._coin.y = this.y;
        };
        // public methods
        Island.prototype.Reset = function () {
            this._verticalSpeed = 5;
            this.y = -this.Height;
            this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
            this._resetCoin();
        };
        Island.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this._coin = new objects.Coin();
            this.Reset();
        };
        Island.prototype.Update = function () {
            this._move();
            this._checkBounds();
            this._coin.Update();
        };
        Island.prototype.Destroy = function () {
        };
        return Island;
    }(objects.SpriteGameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map