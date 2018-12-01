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
        Collision.CheckEnemyCollision = function (object1, object2) {
            object2.forEach(function (enemy) {
                if (!enemy.IsColliding) {
                    var distance = util.Vector2.Distance(object1.Position, enemy.Position);
                    var totalHeight = object1.HalfHeight + enemy.HalfHeight;
                    // check if object 1 is colliding with object 2
                    if (distance < totalHeight) {
                        enemy.IsColliding = true;
                        if (object1.name == "bullet") {
                            var explosionSound = createjs.Sound.play("explosionSound");
                            explosionSound.volume = 0.1;
                            managers.Game.scoreBoard.Score += 100;
                            Collision.createExplosion(enemy);
                            enemy.Reset();
                            object1.Reset();
                            console.log("enemy hit by bullet");
                        }
                        else {
                            var explosionSound = createjs.Sound.play("explosionSound");
                            explosionSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;
                            Collision.createExplosion(object1);
                        }
                    }
                }
            });
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