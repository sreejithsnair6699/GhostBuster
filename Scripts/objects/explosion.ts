module objects {
    export class Explosion extends objects.SpriteGameObject {

        // public properties

        // constructor
        constructor(flag:number) {
            if(flag == 1)
                super("playerexplosion");
            else
            super("explosion");

            this.Start();
        }

        // private methods


        // public methods

        public Reset(): void {

        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        }

        public Update(): void {

        }

        public Destroy(): void {
            this.parent.removeChild(this);
        }

    }
}