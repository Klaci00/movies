

export const ReservLister=(reservationData,ReservParser,error)=>{

    <>
            <h1>Reservations</h1>
            {error && <p>{error}</p>}
            {reservationData.length > 0 ? (
                <div>
                    {reservationData.map(ReservParser)}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>

}