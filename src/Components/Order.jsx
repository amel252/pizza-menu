export default function Order({ openHour, closeHour }) {
    return (
        <div className="order">
            <p>
                We're open from {openHour}:00 to {closeHour}:00
            </p>
            <button className="btn">Order</button>
        </div>
    );
}
