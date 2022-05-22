let count = 0;

const switchOnOff = () => {
    count++;
    // console.log(count);

    if (count % 2 === 0) {
        document.getElementById('myImage').src = 'images/lightOn.png';
    } else {
        document.getElementById('myImage').src = 'images/lightOff.png';
    }

    document.getElementById('turnOn').style.backgroundColor = '#2980b9';
    document.getElementById('turnOn').style.color = '#fff';

    document.getElementById('turnOff').style.backgroundColor = '#2980b9';
    document.getElementById('turnOff').style.color = '#fff';

}

document.getElementById('myImage').addEventListener('click', switchOnOff());


// Turn On Btn
const turnOn = () => {
    document.getElementById('myImage').src = 'images/lightOn.png';
    document.getElementById('turnOn').style.backgroundColor = '#f8b627';
    document.getElementById('turnOn').style.color = '#000';

    document.getElementById('turnOff').style.backgroundColor = '#2980b9';
    document.getElementById('turnOff').style.color = '#fff';
}

// Turn Off Btn
const turnOff = () => {
    document.getElementById('myImage').src = 'images/lightOff.png';
    document.getElementById('turnOff').style.backgroundColor = '#f8b627';
    document.getElementById('turnOff').style.color = '#000';

    document.getElementById('turnOn').style.backgroundColor = '#2980b9';
    document.getElementById('turnOn').style.color = '#fff';
}