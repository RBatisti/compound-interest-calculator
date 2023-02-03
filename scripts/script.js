function empty(id)
{
    if (document.getElementById(id).value.length == 0 || document.getElementById(id).value == '0.00' || document.getElementById(id).value == '0')
    {
        return true
    }
    else
    {
        return false
    }
}

function reset(array)
{
    // Reset all values
    for (i = 0; i < array.length; i++)
    {
        document.getElementById(array[i]).value = ''
    }

    // Reset result
    document.getElementById('end_amount').innerHTML = ''
}

function calculate()
{
    // Check if filled
    if(empty('start_amount') && empty('monthly_amount') || empty('rate') || empty('time'))
    {
        alert('Fill in the required fields')
        return
    }

    // Variables
    let start_amount = document.getElementById('start_amount').value
    let monthly_amount = document.getElementById('monthly_amount').value
    let rate = document.getElementById('rate').value
    let time = document.getElementById('time').value

    // Check if time is int
    if (Number.isInteger(rate))
    {
        alert('Interest rate must be an integer')
        return
    }

    // Calculate
    let end_amount = (start_amount * ((1 + (rate / 100)) ** time)) + monthly_amount * (((((1 + (rate / 100))) ** time ) - 1) / (rate / 100))

    // Approximation
    end_amount = Math.round(end_amount * 100) / 100

    document.getElementById('end_amount').innerHTML = `$${end_amount}`
}