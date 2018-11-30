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
    var Coin = /** @class */ (function (_super) {
        __extends(Coin, _super);
        // public properties
        // constructor
        function Coin() {
            var _this = _super.call(this, "coin") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Coin.prototype._move = function () {
            this.y += this._verticalSpeed;
            this._updatePosition();
        };
        Coin.prototype._checkBounds = function () {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
        };
        // public methods
        Coin.prototype.Reset = function () {
            this.IsColliding = false;
            this.alpha = 1.0;
        };
        Coin.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this._verticalSpeed = 5;
            this.Reset();
        };
        Coin.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Coin.prototype.Destroy = function () {
        };
        return Coin;
    }(objects.SpriteGameObject));
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map