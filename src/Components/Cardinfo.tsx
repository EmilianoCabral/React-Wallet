

export const Cardinfo = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Dinero disponible</h2>
                <p>$ 300</p>
                <div className="flex gap-4">
                    <div className="card-actions">
                        <button className="btn btn-primary">Transferir dinero</button>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Ingresar dinero</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
