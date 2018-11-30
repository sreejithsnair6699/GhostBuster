var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        // private instance variables
        // public properties
        // constructor
        // private methods
        // public methods
        Collision.Check = function (object1, object2) {
            if (!object2.IsColliding) {
                var distance = util.Vector2.Distance(object1.Position, object2.Position);
                var totalHeight = object1.HalfHeight + object2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    object2.IsColliding = true;
                    switch (object2.name) {
                        case "coin":
                            var yaySound = createjs.Sound.play("yaySound");
                            yaySound.volume = 0.1;
                            managers.Game.scoreBoard.Score += 100;
                            object2.alpha = 0;
                            break;
                        case "cloud":
                            var thunderSound = createjs.Sound.play("thunderSound");
                            thunderSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;
                            Collision.createExplosion(object1);
                            break;
                        case "enemy":
                            if (object1.name == "bullet") {
                                var explosionSound_1 = createjs.Sound.play("explosionSound");
                                explosionSound_1.volume = 0.1;
                                managers.Game.scoreBoard.Score += 100;
                                Collision.createExplosion(object2);
                                object2.Reset();
                                object1.Reset();
                                console.log("enemy hit by bullet");
                            }
                            else {
                                var explosionSound_2 = createjs.Sound.play("explosionSound");
                                explosionSound_2.volume = 0.1;
                                managers.Game.scoreBoard.Lives -= 1;
                                Collision.createExplosion(object1);
                            }
                            break;
                        case "bullet":
                            var explosionSound = createjs.Sound.play("explosionSound");
                            explosionSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;
                            object2.Reset();
                            Collision.createExplosion(object1);
                            break;
                    }
                    if (managers.Game.scoreBoard.Lives <= 0) {
                        managers.Game.currentState = config.Scene.OVER;
                        if (managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                            managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                        }
                    }
                }
            }
        };
        Collision.createExplosion = function (object1) {
            var newExplosion = new objects.Explosion();
            newExplosion.x = object1.x;
            newExplosion.y = object1.y;
            managers.Game.currentScene.addChild(newExplosion);
            newExplosion.on("animationend", function () {
                newExplosion.Destroy();
                newExplosion = null;
            });
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map