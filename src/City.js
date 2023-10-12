const City = ({data}) => {
    return <div className="weather-box">
        <h3>{data?.name}</h3>
        <p>{data?.main?.temp} °C (feeling: {data?.main?.feels_like} °C)</p>
        <p>{data?.weather[0]?.main}</p>
        <p><img src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`} title={data?.weather[0]?.description}/></p>
        <p><a href={`https://www.openstreetmap.org/#map=8/${data?.coord?.lat}/${data?.coord?.lon}`} target="_blank">Konuma Git</a></p>
    </div>
}

export default City