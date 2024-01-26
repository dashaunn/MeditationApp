import React from 'react'

export default function Card(props) {
    let duration
    if(props.item.premium === 0) {
        duration = props.item.duration;
    }
    return (
                <a href="" className="card">
                    {duration && <div className="duration-badge">{duration} min</div>}
                    {!duration && <div className="lock-badge"><img src="/images/lock-icon.png" className="lock-icon" /></div>}
                    <img src={`/images/${props.item.backgroundImage}`} alt="" className="card--image" />

                    <div className="card--info">
                        <h3 className="card--title">{props.item.info.title}</h3>
                        <p className="card--subtitle">{props.item.info.subtitle}</p>
                    </div>
                </a>

    )
}