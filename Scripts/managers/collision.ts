module managers {
    export class Collision {
        // private instance variables

        // public properties

        // constructor

        // private methods

        // public methods
        public static Check(object1: objects.SpriteGameObject, object2: objects.SpriteGameObject): void {

            if (!object2.IsColliding) {
                let distance = util.Vector2.Distance(object1.Position, object2.Position);
                let totalHeight = object1.HalfHeight + object2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    object2.IsColliding = true;

                    switch(object2.name) {
                        case "coin":
                            let yaySound = createjs.Sound.play("yaySound");
                            yaySound.volume = 0.1;
                            managers.Game.scoreBoard.Score += 100;
                            object2.alpha = 0;
                        break;
                        case "cloud":
                            let thunderSound = createjs.Sound.play("thunderSound");
                            thunderSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;

                            Collision.createExplosion(object1);
                            

                        break;
                        case "enemy":
                            if(object1.name == "bullet") {
                                    let explosionSound = createjs.Sound.play("explosionSound");
                                    explosionSound.volume = 0.1;
                                    managers.Game.scoreBoard.Score += 100;
                                    Collision.createExplosion(object2);
                                    object2.Reset();
                                    object1.Reset();
                                    console.log("enemy hit by bullet"); 
                            }
                            else
                            {
                                let explosionSound = createjs.Sound.play("explosionSound");
                                explosionSound.volume = 0.1;
                                managers.Game.scoreBoard.Lives -=1;
                                Collision.createExplosion(object1);
                            }
                            


                        break;

                        case "bullet":
                            let explosionSound = createjs.Sound.play("explosionSound");
                            explosionSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -=1;
                            object2.Reset();

                            Collision.createExplosion(object1);
                        break;
                    }

                    if(managers.Game.scoreBoard.Lives <= 0) {
                        managers.Game.currentState = config.Scene.OVER;
                        if(managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                            managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                        }
                    }
                }
            }


        }

        private static createExplosion(object1: objects.SpriteGameObject) {
            let newExplosion = new objects.Explosion();
            newExplosion.x = object1.x;
            newExplosion.y = object1.y;
            managers.Game.currentScene.addChild(newExplosion);
            newExplosion.on("animationend", () => {
                newExplosion.Destroy();
                newExplosion = null;
            });
        }
    }
}