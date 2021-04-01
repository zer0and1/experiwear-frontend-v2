
const getEnglishDateWithTime = (date) => {
  if (!!date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  }
  return ''
}

const getEnglishDate = (date) => {
  if (!!date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
  return ''
}

const getEnglishTime = (date) => {
  if (!!date) {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  }
  return ''
}

const getISODate = (value) => {
  const [yyyy, mm, dd, hh, mi] = value.split(/[/:\-T]/)

  return `${yyyy}-${mm}-${dd}T${hh}:${mi}`;
}

export {
  getEnglishDate,
  getEnglishTime,
  getEnglishDateWithTime,
  getISODate
}