#pragma strict

function Start () {

}

function Update () {
    /*if (Input.GetKey(KeyCode.J)){
        transform.Translate(transform.right * -0.1);
    }
    if (Input.GetKey(KeyCode.L)){
        transform.Translate(transform.right * 0.1);
    }*/
    if(Input.GetAxis ("Horizontal")) transform.Rotate(0, 100 * Time.deltaTime * Input.GetAxis ("Horizontal"), 0);
    /*if (Input.GetKey(KeyCode.I)){
        transform.Translate(transform.forward * 0.1);
    }
    if (Input.GetKey(KeyCode.K)){
        transform.Translate(transform.forward *- 0.1);
    }*/
}