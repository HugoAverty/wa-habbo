/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    var globalSound = WA.sound.loadSound("src/ocean.wav");
    var config = {
        volume : 0.01,
        loop : true,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0,
        mute : false
    }
    globalSound.play(config);
    

    WA.room.onEnterLayer('Settings/zoneBuilding').subscribe(() => {
        WA.room.showLayer("InAbove/inBuilding1");
        WA.room.showLayer("InAbove/inBuilding2");
        WA.room.showLayer("Settings/inCollide");

        WA.room.hideLayer("Settings/outCollide");
        WA.room.hideLayer("OutAbove/outBuilding1");
        WA.room.hideLayer("OutAbove/outBuilding2");
    })

    WA.room.onLeaveLayer('Settings/zoneBuilding').subscribe(() => {
        WA.room.hideLayer("Settings/inCollide");
        WA.room.hideLayer("InAbove/inBuilding1");
        WA.room.hideLayer("InAbove/inBuilding2");

        WA.room.showLayer("Settings/outCollide");
        WA.room.showLayer("OutAbove/outBuilding1");
        WA.room.showLayer("OutAbove/outBuilding2");
    })

    WA.room.onEnterLayer('Settings/zoneTante').subscribe(() => {  
        WA.room.showLayer("Settings/inCollide");
        WA.room.showLayer("InUnder/inTante1");
        WA.room.showLayer("InUnder/inTante2");
        WA.room.showLayer("InAbove/inTante3");

        WA.room.hideLayer("Settings/outCollide");
        WA.room.hideLayer("OutUnder/outTante1");
        WA.room.hideLayer("OutAbove/outTante2");
    })

    WA.room.onLeaveLayer('Settings/zoneTante').subscribe(() => {
        WA.room.hideLayer("Settings/inCollide");
        WA.room.hideLayer("InUnder/inTante1");
        WA.room.hideLayer("InUnder/inTante2");
        WA.room.hideLayer("InAbove/inTante3");

        WA.room.showLayer("Settings/outCollide");
        WA.room.showLayer("OutUnder/outTante1");
        WA.room.showLayer("OutAbove/outTante2");
    })


    WA.room.onEnterLayer('Settings/zoneBoat').subscribe(() => {  
        WA.room.showLayer("Settings/inCollide");
        WA.room.showLayer("InUnder/inBoatFloor1");
        WA.room.showLayer("InUnder/inBoatFloor2");
        WA.room.showLayer("InUnder/inBoatWall1");
        WA.room.showLayer("InUnder/inBoatWall2");
        WA.room.showLayer("InUnder/inBoatDetails1");
        WA.room.showLayer("InUnder/inBoatDetails2");
        WA.room.showLayer("InAbove/inBoatAboveWall");
        WA.room.showLayer("InAbove/inBoatAbove1");
        WA.room.showLayer("InAbove/inBoatAbove2");

        WA.room.hideLayer("Settings/outCollide");
        WA.room.hideLayer("OutAbove/outBoatAbove1");
        WA.room.hideLayer("OutAbove/outBoatAbove2");
        WA.room.hideLayer("OutAbove/outBoatAbove3");
        WA.room.hideLayer("OutAbove/outBoatAbove4");
        WA.room.hideLayer("OutAbove/outBoatAbove5");
        WA.room.hideLayer("OutAbove/outBoatAbove6");
    })

    WA.room.onLeaveLayer('Settings/zoneBoat').subscribe(() => {
        WA.room.hideLayer("Settings/inCollide");
        WA.room.hideLayer("InUnder/inBoatFloor1");
        WA.room.hideLayer("InUnder/inBoatFloor2");
        WA.room.hideLayer("InUnder/inBoatWall1");
        WA.room.hideLayer("InUnder/inBoatWall2");
        WA.room.hideLayer("InUnder/inBoatDetails1");
        WA.room.hideLayer("InUnder/inBoatDetails2");
        WA.room.hideLayer("InAbove/inBoatAboveWall");
        WA.room.hideLayer("InAbove/inBoatAbove1");
        WA.room.hideLayer("InAbove/inBoatAbove2");

        WA.room.showLayer("Settings/outCollide");
        WA.room.showLayer("OutAbove/outBoatAbove1");
        WA.room.showLayer("OutAbove/outBoatAbove2");
        WA.room.showLayer("OutAbove/outBoatAbove3");
        WA.room.showLayer("OutAbove/outBoatAbove4");
        WA.room.showLayer("OutAbove/outBoatAbove5");
        WA.room.showLayer("OutAbove/outBoatAbove6");
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
