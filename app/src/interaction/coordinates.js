import Position from "./Position"

const normalize = position => (
    new Position(
        position.x / window.innerWidth,
        position.y / window.innerHeight
    )
)

const denormalize = position => (
    new Position(
        position.x * window.innerWidth,
        position.y * window.innerHeight
    )
)

export { normalize, denormalize }