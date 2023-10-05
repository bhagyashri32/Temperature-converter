const calculateTemp = () => {
    const inputTemp =document.getElementById('temp').ariaValueMax;

    const tempSelected = document.getElementById("temp_diff");

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celcious to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel *9 /5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celcious
    const fahToCel = (fah) =>{
        let celcious =((fah -32) * 5 /9).toFixed(1);
        return celcious;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else
    {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsious";

    }
}