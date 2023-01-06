/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra"

console.log('Script started successfully')

let currentPopup: any = undefined

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready')
    console.log('Player tags: ',WA.player.tags)

    // Popups
    WA.room.area.onEnter("intro").subscribe(() => {
        currentPopup = WA.ui.openPopup("introPopup", "Welcome Gen 1 Holders! This is your treasure island community! Here we will host events, gatherings, and many other opportunities for you!", [])
    })<<
    WA.room.area.onLeave("intro").subscribe(closePopup)

    WA.room.area.onEnter("cave").subscribe(() => {
        currentPopup = WA.ui.openPopup("cavePopup", "It looks like this cavern is blocked from within. There might be a way to open it. (coming soon)", [])
    })
    WA.room.area.onLeave("cave").subscribe(closePopup)

    WA.room.area.onEnter("exitToWA").subscribe(() => {
        currentPopup = WA.ui.openPopup("exitToWAPopup", "In this cauldron is simmering a secret recipe from the future", [
            {
                label: 'Taste it...',
                className: 'primary',
                callback: () => WA.nav.goToPage("https://play.staging.workadventu.re/@/tcm/workadventure/wa-village#from-gen1"),
            }
        ])
    })
    WA.room.area.onLeave("exitToWA").subscribe(closePopup)

    WA.room.area.onEnter("boatEntrance").subscribe(() => {
        currentPopup = WA.ui.openPopup("boatEntrancePopup", "Coming soon!", [])
    })
    WA.room.area.onLeave("boatEntrance").subscribe(closePopup)

    WA.room.area.onEnter("shipCockpit").subscribe(() => {
        currentPopup = WA.ui.openPopup("shipCockpitPopup", "Coming soon!", [])
    })
    WA.room.area.onLeave("shipCockpit").subscribe(closePopup)


    // Layers
    WA.room.area.onEnter("building").subscribe(() => {
        WA.room.showLayer("InAbove/inBuilding1")
        WA.room.showLayer("InAbove/inBuilding2")
        WA.room.showLayer("Settings/inCollide")

        WA.room.hideLayer("Settings/outCollide")
        WA.room.hideLayer("OutAbove/outBuilding1")
        WA.room.hideLayer("OutAbove/outBuilding2")
    })
    WA.room.area.onLeave("building").subscribe(() => {
        WA.room.hideLayer("Settings/inCollide")
        WA.room.hideLayer("InAbove/inBuilding1")
        WA.room.hideLayer("InAbove/inBuilding2")

        WA.room.showLayer("Settings/outCollide")
        WA.room.showLayer("OutAbove/outBuilding1")
        WA.room.showLayer("OutAbove/outBuilding2")
    })

    WA.room.area.onEnter("tent").subscribe(() => {
        WA.room.showLayer("Settings/inCollide")
        WA.room.showLayer("InUnder/inTent1")
        WA.room.showLayer("InUnder/inTent2")
        WA.room.showLayer("InAbove/inTent3")

        WA.room.hideLayer("Settings/outCollide")
        WA.room.hideLayer("OutUnder/outTent1")
        WA.room.hideLayer("OutAbove/outTent2")
    })
    WA.room.area.onLeave("tent").subscribe(() => {
        WA.room.hideLayer("Settings/inCollide")
        WA.room.hideLayer("InUnder/inTent1")
        WA.room.hideLayer("InUnder/inTent2")
        WA.room.hideLayer("InAbove/inTent3")

        WA.room.showLayer("Settings/outCollide")
        WA.room.showLayer("OutUnder/outTent1")
        WA.room.showLayer("OutAbove/outTent2")
    })

    WA.room.area.onEnter("insideShip").subscribe(() => {
        WA.room.showLayer("Settings/inCollide")
        WA.room.showLayer("InUnder/inBoatFloor1")
        WA.room.showLayer("InUnder/inBoatFloor2")
        WA.room.showLayer("InUnder/inBoatWall1")
        WA.room.showLayer("InUnder/inBoatWall2")
        WA.room.showLayer("InUnder/inBoatDetails1")
        WA.room.showLayer("InUnder/inBoatDetails2")
        WA.room.showLayer("InAbove/inBoatAboveWall")
        WA.room.showLayer("InAbove/inBoatAbove1")
        WA.room.showLayer("InAbove/inBoatAbove2")

        WA.room.hideLayer("Settings/outCollide")
        WA.room.hideLayer("OutAbove/outBoatAbove1")
        WA.room.hideLayer("OutAbove/outBoatAbove2")
        WA.room.hideLayer("OutAbove/outBoatAbove3")
        WA.room.hideLayer("OutAbove/outBoatAbove4")
        WA.room.hideLayer("OutAbove/outBoatAbove5")
        WA.room.hideLayer("OutAbove/outBoatAbove6")
        WA.room.hideLayer("Clouds")
        WA.room.hideLayer("Lights")
    })
    WA.room.area.onLeave("insideShip").subscribe(() => {
        WA.room.hideLayer("Settings/inCollide")
        WA.room.hideLayer("InUnder/inBoatFloor1")
        WA.room.hideLayer("InUnder/inBoatFloor2")
        WA.room.hideLayer("InUnder/inBoatWall1")
        WA.room.hideLayer("InUnder/inBoatWall2")
        WA.room.hideLayer("InUnder/inBoatDetails1")
        WA.room.hideLayer("InUnder/inBoatDetails2")
        WA.room.hideLayer("InAbove/inBoatAboveWall")
        WA.room.hideLayer("InAbove/inBoatAbove1")
        WA.room.hideLayer("InAbove/inBoatAbove2")

        WA.room.showLayer("Settings/outCollide")
        WA.room.showLayer("OutAbove/outBoatAbove1")
        WA.room.showLayer("OutAbove/outBoatAbove2")
        WA.room.showLayer("OutAbove/outBoatAbove3")
        WA.room.showLayer("OutAbove/outBoatAbove4")
        WA.room.showLayer("OutAbove/outBoatAbove5")
        WA.room.showLayer("OutAbove/outBoatAbove6")
        WA.room.showLayer("Clouds")
        WA.room.showLayer("Lights")
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready')
    }).catch(e => console.error(e))

}).catch(e => console.error(e))

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close()
        currentPopup = undefined
    }
}

export {};
