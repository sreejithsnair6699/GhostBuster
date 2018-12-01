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
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        // public properties
        // constructor
        function Ocean() {
            var _this = _super.call(this, "cloud") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Ocean.prototype._checkBounds = function () {
            if (this.y >= 800) {
                this.Reset();
            }
        };
        Ocean.prototype._move = function () {
            this.y += this.verticalSpeed;
            this.x += this.horizontalSpeed;
        };
        // public methods
        Ocean.prototype.Reset = function () {
            this.y = -960;
            this.x = Math.floor((Math.random() * 1000) - this.HalfWidth);
        };
        Ocean.prototype.Start = function () {
            this.Reset();
            this.alpha = .15;
            this.scaleX = 1.5;
            this.scaleY = 1.5;
            this.verticalSpeed = Math.floor((Math.random() * 5) + 5);
            this.horizontalSpeed = Math.floor((Math.random() * 3) + 3);
        };
        Ocean.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Ocean.prototype.Destroy = function () {
        };
        return Ocean;
    }(objects.BitmapGameObject));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map