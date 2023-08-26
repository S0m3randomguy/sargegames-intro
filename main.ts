

scene.setBackgroundImage(assets.image`logo`)

/**
 * Provides access to basic micro:bit functionality.
 */
//% color="#65b7e4" weight=0 icon="\uf03d" block="SargeGames"
namespace SargeGames {

    /**
     * Events can be made into statements that can be put in line with other events,
     * similar to loops or conditions.
     */
    //% block="show SargeGames intro"
    //% handlerStatement
    export function showIntro(handler: () => void) {
        handler();
    }

}