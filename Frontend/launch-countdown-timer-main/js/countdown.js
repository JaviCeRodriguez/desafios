const countdown = () => {
    document
        .getElementById("setupCountdown")
        .setAttribute("style", "display: none;");
    document.getElementById("timer").setAttribute("style", "display: flex");

    count =
        ss * 1000 +
        mm * 1000 * 60 +
        hh * 1000 * 60 * 60 +
        dd * 1000 * 60 * 60 * 24;
    // let now = new Date().getTime();

    setInterval(() => {
        let cdDay = Math.floor(count / (1000 * 60 * 60 * 24));
        let cdHour = Math.floor(
            (count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let cdMinute = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
        let cdSecond = Math.floor((count % (1000 * 60)) / 1000);

        document.getElementById("labelDay").innerHTML = `${cdDay.toLocaleString(
            "en-US",
            {
                minimumIntegerDigits: 2,
            }
        )}`;
        document.getElementById(
            "labelHour"
        ).innerHTML = `${cdHour.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
        })}`;
        document.getElementById(
            "labelMinute"
        ).innerHTML = `${cdMinute.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
        })}`;
        document.getElementById(
            "labelSecond"
        ).innerHTML = `${cdSecond.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
        })}`;

        if (count != 0) {
            count -= 1000;
        }
    }, 1000);
};

const validateTime = () => {
    days = document.getElementById("daysInput");
    hours = document.getElementById("hoursInput");
    minutes = document.getElementById("minutesInput");
    seconds = document.getElementById("secondsInput");

    if (days.value < 0 || days.value === "") {
        alert(
            "El campo de días no puede estar vacío y no puede ser valor negativo"
        );
    } else if (hours.value >= 24 || hours.value < 0 || hours.value === "") {
        alert(
            "La cantidad de horas debe ser entre 0 y 23. El campo no puede estar vacío"
        );
        hours.value = "";
    } else if (
        minutes.value >= 60 ||
        minutes.value < 0 ||
        minutes.value === ""
    ) {
        alert(
            "La cantidad de minutos debe ser entre 0 y 59. El campo no puede estar vacío"
        );
        minutes.value = "";
    } else if (
        seconds.value >= 60 ||
        seconds.value < 0 ||
        seconds.value === ""
    ) {
        alert(
            "La cantidad de segundos debe ser entre 0 y 59. El campo no puede estar vacío"
        );
        seconds.value = "";
    } else {
        dd = days.value;
        hh = hours.value;
        mm = minutes.value;
        ss = seconds.value;

        countdown();
    }
};

let days, dd; // Dias
let hours, hh; // Horas
let minutes, mm; // Minutos
let seconds, ss; // Segundos
