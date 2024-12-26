import addressStyles from "./index.module.css"

function Address(props) {
    const {region, zip} = props.data;
    
    return (
      <div className={addressStyles.cardAddress}>
        <div className={addressStyles.cardRegion}>{region}</div>
        <div className={addressStyles.regionZipCode}>{zip}</div>
      </div>
    );
}

export default Address;