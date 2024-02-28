import './HelloComponent.css'

// TypeScript interface for props
// interface HelloComponentProps {
//   userName?: string; // optional
//   color?: string;    // optional
// }
export default function HelloComponent({ userName = "Unknown", color = "yellow" } /* : HelloComponentProps */ ) {
    console.log("Hello ", userName, color);

    const message = "Hello!";
    const messageClass = "message";
    return (
        <>
            <div style={ getRandomColor(color) }>
                <p className={ messageClass }>{ message }</p>
            </div>
        </>
    );
}

function getRandomColor(color) {
    if (Math.random() > 0.5) {
        return { backgroundColor: color, padding: "20px" };
    } else {
        return { backgroundColor: "lime", padding: "20px" };
    }
}