#pragma strict

//attach this script to the gameobject that you want to throw

//the collider of the target must be a trigger

//drag the gameobject in to this public variable

var rb : Rigidbody;

//type the tag of the target gameobject here

var objectTag : String;

function Start() {
    rb = GetComponent.<Rigidbody>();
}

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        rb.isKinematic = true;
    }
}