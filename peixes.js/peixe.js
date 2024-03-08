var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
     },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game(config);

var Baiacu;
var Tubarão;

function preload() {
    this.load.image('Mar', 'assets/bg_azul-escuro.png');
    this.load.image("Baiacu", "assets/Peixes/baiacu.png");
    this.load.image("Logo", "assets/logo-inteli_branco.png")
    this.load.image("Concha", "assets/concha.png")
    this.load.image("Tubarão", "assets/Peixes/tubarao.png")
}

function create() {
    this.add.image(400, 300, "Mar");
    this.add.image(400, 525, "Logo").setScale(0.5);
    this.add.image(600, 525, "Concha");

    Baiacu = this.add.image(400, 300, "Baiacu").setScale(0.5);
    Baiacu.setFlip(true, false);

    Tubarão = this.add.image(400, 300, "Tubarão");
    Tubarão.setFlip(true, false);

    //verifica orientação do dispositivo
    if(game.scale.orientation === Phaser.Scale.LANDSCAPE){
        this.add.image(400, 300, "Mar");
    } else if(game.scale.orientation === Phaser.Scale.PORTRAIT){
        this.add.image(400, 300, "Mar");
    }
    
    
    //verifica tipo de dispositivo
    if (game.device.os.desktop){
        Baiacu = this.add.image(400, 300, "Baiacu").setScale(0.5);
        Tubarão = this.add.image(400, 300, "Tubarão");
        Tubarão.setFlip(true, false);
    } else{
        
        Baiacu = this.add.image(400, 300, "Baiacu").setScale(0.5);
        Tubarão = this.add.image(400, 300, "Tubarão");
        Tubarão.setFlip(true, false);
    }

    //evento de mudança de orientação
    game.scale.on('orientationchange', function(orientation) {
        if (orientation === Phaser.Scale.PORTRAIT) {
            console.log('PORTRAIT')
        }  
        if (orientation === Phaser.Scale.LANDSCAPE) {
            console.log('LANDSCAPE')
        } 
    });

}

function update() {

    Baiacu.x = (this.input.x);
    Baiacu.y = (this.input.y);

    Tubarão.x = (this.input.x - (Baiacu.x*0.3))
    Tubarão.y = (this.input.y - (Baiacu.y*0.3))

     if(Tubarão.x < this.input.x) {
        Tubarão.setFlip(true, false); 
    }
        else if(Tubarão.x > this.input.x) {
            Tubarão.setFlip(false, false);
        }
        

    
}
    



