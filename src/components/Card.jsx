import React from 'react'

export default function Card(props) {
    let badgeText

    return (
                <a href="" className="card">
                    <img src={`/src/images/${props.item.backgroundImage}`} alt="" className="card--image" />
                    <svg src="" className="card--lockIcon"></svg>

                    <div className="card--info">
                        <h3 className="card--title">{props.item.info.title}</h3>
                        <p className="card--subtitle">{props.item.info.subtitle}</p>
                    </div>
                </a>

    )
}