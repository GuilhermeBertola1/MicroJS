const mqtt = require('mqtt')

const host = 'f9bd6840138b496ebfedc1975b7efc02.s2.eu.hivemq.cloud'
const port = '8883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`

const client = mqtt.connect(connectUrl,{
  clientId,
  username: 'BertolaLab',
  password: 'Guiciber123'
})