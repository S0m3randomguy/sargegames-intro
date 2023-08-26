/**
 * SargeGames intro
*/
//% color="#147cb5" weight=0 icon="\uf03d" block="SargeGames"

namespace SargeGames {

    /**
     * Show the SargeGames intro
     */
    //% block="show SargeGames intro and run"
    //% handlerStatement
    export function showIntro(handler: () => void) {
        scene.setBackgroundImage(assets.image`logo`);
        color.startFade(color.Black, color.originalPalette, 1000);
        pause(1500);
        color.startFade(color.originalPalette, color.Black, 500);
        color.pauseUntilFadeDone()
        handler();
    }

}
