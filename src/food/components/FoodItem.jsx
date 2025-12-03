import { Link } from 'react-router-dom';
import Barcode from 'react-barcode';
export const FoodItem = ({name, image, category, labels,ingredients,code}) => {
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="col-4">
                    <img src={ image } className="card-img " alt={ name } />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{labels}</p>
                        <p className="card-text">{category}</p>
                        <p className="card-text text-truncate">{ingredients}</p>
                        <p className="card-text">{code}</p>
                        {code ? (
                            <div style={{ margin: '8px 0' }}>
                                <Barcode
                                    value={String(code)}
                                    format="CODE128"
                                    height={50}
                                    width={1}
                                    displayValue={false}
                                />
                            </div>
                        ) : (
                            <small className="text-muted">No barcode available</small>
                        )}

                        <Link to={`/food/${code}`}>
                            <span className="btn btn-outline-primary">Más..</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}