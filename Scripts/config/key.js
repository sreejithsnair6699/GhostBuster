var config;
(function (config) {
    var Key = /** @class */ (function () {
        function Key() {
        }
        // Keyboard Values
        Key.A = 65;
        Key.CRTL = 17;
        Key.D = 68;
        Key.DOWN_ARROW = 40;
        Key.ESCAPE = 27;
        Key.LEFT_ARROW = 37;
        Key.RIGHT_ARROW = 39;
        Key.S = 83;
        Key.SHIFT = 16;
        Key.SPACEBAR = 32;
        Key.UP_ARROW = 38;
        Key.W = 87;
        Key.P = 80; // often used for pause
        return Key;
    }());
    config.Key = Key;
})(config || (config = {}));
//# sourceMappingURL=key.js.map