//opptional dog on the quest

//might knight and a cunning archer

//fast attack: knight is sleeping 

//spy: if one og them is awake, otherwise not works

//signal prisioner: if the presioner is awale ant the archer is sleeping

//free prisioner: if the dog is with her, and the archer is asleep
//and if her dog is not with her if the prisioner is awake and them bolth are sleeping if the 
//prisioner is sleeping they cant be rescued

const dogIsWithHer = true;
const knightIsSleeping = true;
const archerIsSleeping = true;
const prisionerIsSleeping = true;

export function fastAtack() {
    if (knightIsSleeping) {
        return true
    }
}

export function spy() {
    if (!knightIsSleeping || !archerIsSleeping) {
        return true
    }
}

export function signalPrisioner() {
    if (!prisionerIsSleeping && archerIsSleeping) {
        return true
    }
}

export function freePrisioner() {
    if (dogIsWithHer && archerIsSleeping) {
        return true
    } else {
        if (!prisionerIsSleeping && (prisionerIsSleeping && archerIsSleeping)) {
            return true
        }
    }
}