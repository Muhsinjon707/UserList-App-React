import carStyles from "./index.module.css"

function Car(props) {
    const cars = props.data;
    
    return (
        <div className={carStyles.carsList}>
            {
                cars.length > 0 && cars.map((car, index) => {
                   return <div key={index}>{car}</div>
                })
            }
        </div>
    );
}

export default Car;