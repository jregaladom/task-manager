export function formatDateToHumanReadable(dateString) {
    const currentDate = new Date()
    const inputDate = new Date(dateString)

    // Calcula la diferencia en milisegundos
    const difference = currentDate - inputDate

    // Calcula la diferencia en días
    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24))

    if (daysDifference === 0) {
        return 'Today'
    } else if (daysDifference === 1) {
        return 'Yesterday'
    } else if (daysDifference >= 2 && daysDifference <= 5) {
        return `${daysDifference} days ago`
    } else {
        // Formatea la fecha en formato mes, día, año en inglés
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return inputDate.toLocaleDateString('en-US', options)
    }
}

export function dateNow() {
    const date = new Date()

    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
}
