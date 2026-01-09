export default function getApi(params = '') {
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=rvylvsHWc98giycRfhDFKtIp8G9FNDPl${params}`
  ).then(res => res.json());
}
