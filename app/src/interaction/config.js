let config = {
    WEBSOCKET_URI: "wss://api.thecurvefestival.org",
    STAGES_ID: [
        "409074837",
        "408866405",
        "408866770"
    ],
    DONATION_URL: "https://tiltify.com/@thecurve/the-curve-festival/donate"
}

config.STAGES = config.STAGES_ID.map(id => `https://vimeo.com/${id}`)

export default config