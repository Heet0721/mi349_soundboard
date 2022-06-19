const clickSounds = [
    'click_charge',
    'click_coin_roll',
    'click_cow_toy',
    'click_dentist_drill',
    'click_disconnect',
];
console.log("Click on buttons to play different sound effects.")

clickSounds.forEach ((sound) => {

    const btn = document.createElement ('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild
    (btn);

});

const hoverSounds = [
    'hover_snare-roll1',
    'hover_snare-roll2',
    'hover_snare-roll3',
    'hover_snare-roll4',
    'hover_snare-roll5',
];

hoverSounds.forEach ((sound) => {

    const btn = document.createElement ('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener("mouseenter", () => {
        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild
    (btn);

});