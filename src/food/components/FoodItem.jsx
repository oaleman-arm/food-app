import { Link } from 'react-router-dom';
import Barcode from 'react-barcode';
export const FoodItem = ({name, image, brands, packaging, price,code}) => {
    return (
        <div className="col animate__animated animate__fadeIn">
            <div id="cardFoodItem" className="card">
                    <img src={ image } className="bd-placeholder-img card-img-top" alt={ name } />
                        <div className="card-body">
                            <h5 className="card-title text-truncate text-uppercase" title={name}>{name}</h5>
                            <p className="card-text text-truncate text-uppercase"><strong>Empaque: </strong>{packaging}</p>
                            <p className="card-text text-truncate text-uppercase"><strong>Marca: </strong>{brands}</p>
                            <p className="card-text text-truncate text-uppercase"><strong>Precio: </strong>$ {price}</p>
                            <p className="card-text"><strong>Codigo: </strong>{code}</p>
                            {code ? (
                                <div style={{ margin: '8px 0' }}>
                                    <Barcode
                                        value={String(code)}
                                        format="CODE128"
                                        height={25}
                                        width={1}
                                        displayValue={false}
                                    />
                                </div>
                            ) : (
                                <small className="text-muted">No barcode available</small>
                            )}
                        </div>
                        <div className="card-footer">
                            <Link to={`/food/${code}`}>
                                <span className="btn btn-outline-primary">Agregar</span>
                            </Link>
                        </div>
                </div>
            </div>
    );
}