
    const calculateTemp = () =>{
        let temp = document.getElementById('temp').value;
        // console.log(temp);

        let units = document.getElementById('units');
        const unitsType = units.options[units.selectedIndex].value;
        // console.log(unitsType);

        const celToFah = (cel) =>{
            let fahrenheit = Math.round((cel * 9/5) + 32);
            return fahrenheit;
        }

        const fahToCel = (feh) =>{
            let celsius = Math.round((feh - 32) * 5/9);
            return celsius;
        }
        let result;

        if(unitsType == 'cel'){
            result = celToFah(temp);
            document.querySelector('.result').innerHTML = `${result}°Fahreheit`;
        }else{
            result = fahToCel(temp);
            document.querySelector('.result').innerHTML = `${result}°Celsius`;
        }

    };
