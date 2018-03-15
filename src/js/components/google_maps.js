export default function googleMaps() {
  const d = document,
    w = window,
    mq = w.matchMedia('(min-width: 64em)'),
    map = d.querySelector('.GoogleMap')

  function showMap (mq) {
    return (mq.matches)
      ? map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.0190636874586!2d-77.04074244182063!3d-12.040896174668882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf33539e84e3%3A0xcc45b3e5ce121270!2sCallao+937%2C+Cercado+de+Lima+15001!5e0!3m2!1ses-419!2spe!4v1520320798451" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>'
      : map.innerHTML = map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.0190636874586!2d-77.04074244182063!3d-12.040896174668882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf33539e84e3%3A0xcc45b3e5ce121270!2sCallao+937%2C+Cercado+de+Lima+15001!5e0!3m2!1ses-419!2spe!4v1520320798451" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>'
  }

  mq.addListener(showMap)
  showMap(mq)
}
  