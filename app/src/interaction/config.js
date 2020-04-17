let config = {
    WEBSOCKET_URI: "wss://api.thecurvefestival.org",
    STAGES_ID: [
        "408864852",
        "408866405",
        "408866770"
    ],
    DONATION_URL: "https://tiltify.com/@thecurve/thecurvefestival/donate"
}

config.STAGES = config.STAGES_ID.map(id => `https://vimeo.com/${id}`)

export default config