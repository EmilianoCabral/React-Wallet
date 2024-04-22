import { Link } from 'react-router-dom';

export const Cardinfo = () => {
    return (
        <article className="card h-48 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Available money</h2>
                <p>$ 300</p>
                <div className="flex gap-4">
                    <div className="card-actions">
                        <Link to={"/Transfermoney"}>
                            <button className="btn btn-primary">Transfer money</button>
                        </Link>
                    </div>
                    <div className="card-actions">
                        <Link to={"/Depositmoney"}>
                            <button className="btn btn-primary">Deposit money</button>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}
