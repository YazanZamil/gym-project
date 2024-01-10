function calculateBMI() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);


    if (!validateForm()) {
        return;
    }

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    var bmi = calculateBMIValue(weight, height);
    var result = getBMIResult(bmi);

    showResultPopup(bmi, result, name, email, mobile, weight, height);
}

function calculateBMIValue(weight, height) {
    var heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function getBMIResult(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.99) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.99) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

function showResultPopup(bmi, result, name, email, mobile, weight, height) {
    var popup = document.getElementById('resultPopup');
    popup.innerHTML = `
        <p style="color: green;">Your BMI: ${bmi.toFixed(2)}</p>
        <p>Result: ${result}</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Mobile: ${mobile}</p>
        <p>Weight: ${weight} kg</p>
        <p>Height: ${height} cm</p>
    `;
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 10000);
}
