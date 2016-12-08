#pragma strict

var thing : GameObject;
var objectTag : String;
var duration : float = 1;

function OnTriggerEnter (other : Collider) {
    if(other.gameObject.tag == objectTag){
        print("touched");
        yield WaitForSeconds (duration);
        print("speak");
//        Instantiate(thing, Vector3(0, 0, 0), Quaternion.identity);
    }
}