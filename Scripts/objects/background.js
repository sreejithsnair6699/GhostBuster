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
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // public properties
        // constructor
        function Background() {
            var _this = _super.call(this, "skybackground") || this;
            _this.flag = 0;
            _this.Start();
            return _this;
        }
        // private methods
        Background.prototype._checkBounds = function () {
            if (this.y >= 0) {
                if (this.flag == 0) {
                    this.scaleY = -1;
                    this.scaleX = -1;
                    this.rotation = 180;
                    this.flag = 1;
                }
                if (this.flag == 1) {
                    this.scaleY = 1;
                    this.scaleX = 1;
                    this.rotation = 360;
                    this.flag = 0;
                }
                this.Reset();
            }
        };
        Background.prototype._move = function () {
            this.y += this.verticalSpeed;
        };
        // public methods
        Background.prototype.Reset = function () {
            this.y = -1000;
        };
        Background.prototype.Start = function () {
            this.Reset();
            this.verticalSpeed = 12;
        };
        Background.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Background.prototype.Destroy = function () {
        };
        return Background;
    }(objects.BitmapGameObject));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map