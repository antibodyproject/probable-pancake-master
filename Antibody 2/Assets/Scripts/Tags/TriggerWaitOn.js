#pragma strict

var thing : GameObject;
var duration : float = 1;

function Start () {
    thing.SetActive(false);
}

function OnTriggerEnter () {
        yield WaitForSeconds(duration);
        thing.SetActive(true);
}